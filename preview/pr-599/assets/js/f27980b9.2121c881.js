"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[88080],{28453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>l});var t=r(96540);const n={},i=t.createContext(n);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(i.Provider,{value:s},e.children)}},89381:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>h,contentTitle:()=>o,default:()=>j,frontMatter:()=>c,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"administration/self-hosted/installation-helm/installation-helm","title":"Installation via Helm","description":"Installation via Helm","source":"@site/docs/administration/self-hosted/installation-helm/installation-helm.mdx","sourceDirName":"administration/self-hosted/installation-helm","slug":"/self-hosted-helm-installation","permalink":"/prophecy-docs-staging/preview/pr-599/self-hosted-helm-installation","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"deployment","permalink":"/prophecy-docs-staging/preview/pr-599/tags/deployment"},{"inline":true,"label":"installation","permalink":"/prophecy-docs-staging/preview/pr-599/tags/installation"},{"inline":true,"label":"helm","permalink":"/prophecy-docs-staging/preview/pr-599/tags/helm"}],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Installation via Helm","id":"installation-helm","slug":"/self-hosted-helm-installation","description":"Installation via Helm","sidebar_position":1,"tags":["deployment","installation","helm"]},"sidebar":"adminSidebar","previous":{"title":"Self-hosted","permalink":"/prophecy-docs-staging/preview/pr-599/administration/self-hosted/"},"next":{"title":"AWS installation guide","permalink":"/prophecy-docs-staging/preview/pr-599/administration/self-hosted/installation-helm/install-on-aws"}}');var n=r(74848),i=r(28453);function d(e){const s={code:"code",em:"em",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Parameters marked with an asterisk(*) are mandatory."})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Default value"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"ATHENA"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"athena.config"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"athena.config.fromFile"})}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsxs)(s.td,{children:["Set this to ",(0,n.jsx)(s.code,{children:"false"})," if you want to pass different environment and Prophecy application level configurations values inline here. If you keep it to ",(0,n.jsx)(s.code,{children:"true"}),", the values are taken from the ",(0,n.jsx)(s.code,{children:"../configs"})," directory of the helm chart"]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"true"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"athena.config.athenaEnvs"})}),(0,n.jsx)(s.td,{children:"map[string]string"}),(0,n.jsxs)(s.td,{children:["Provide the values you wish to override in athena ENV variables. Passed in the format of ",(0,n.jsx)(s.code,{children:'KEY: "value"'}),". Value is type sensitive. This field is only respected when fromFile is set to ",(0,n.jsx)(s.code,{children:"false"}),"."]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"./configs/athena-env-cluster.yaml"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"athena.config.envs"})}),(0,n.jsx)(s.td,{children:"map[string]string"}),(0,n.jsxs)(s.td,{children:["Provide the values you wish to override in Prophecy application ENV variables. Passed in the format of ",(0,n.jsx)(s.code,{children:'KEY: "value"'}),". Value is type sensitive. This field is only respected when fromFile is set to ",(0,n.jsx)(s.code,{children:"false"}),"."]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"./configs/env-cluster.yaml"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"athena.config.prophecyCluster"})}),(0,n.jsx)(s.td,{children:"prophecyCluster (custom)"}),(0,n.jsxs)(s.td,{children:["Provide the values you wish to override in Prophecy cluster spec. This field is only respected when fromFile is set to ",(0,n.jsx)(s.code,{children:"false"}),"."]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"./configs/prophecy-cluster.yaml"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"athena.enableSandboxing"})}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"Set this to true to enable sandboxing feature."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"athena.enableSignup"})}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"Set this to true if you want to allow signups using a verified email-id."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"athena.enableSlimImages"})}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"Set this to true to deploy Prophecy slim images (images without Spark)."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"athena.isDarkCluster"})}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"Set this to true if the cluster doesn't have internet access."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"athena.resources"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"athena.resources.requests"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"athena.resources.requests.cpu"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Guaranteed value of CPU required to deploy Athena"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"200m"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"athena.resources.requests.memory"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Guaranteed value of memory required to deploy Athena"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"512Mi"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"athena.resources.limits"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"athena.resources.limits.cpu"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Maximum usage of CPU for Athena"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"200m"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"athena.resources.limits.memory"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Maximum usage of memory for Athena"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"512Mi"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"athena.trustCA"})}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"set this variable if you want metagraph and execution to trust local self signed certificates."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"true"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"GLOBAL"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.blockStorage"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{children:"Kubernetes PVC block storage options for for Athena, Postgres and Platform components. Prophecy services takes storage values from Prophecy cluster in configs dir."}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.blockStorage.storageClassName"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Kubernetes storage class (SC) name to be used by PVCs"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"default"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.blockStorage.pvcAnnotations"})}),(0,n.jsx)(s.td,{children:"map[string]string"}),(0,n.jsx)(s.td,{children:"Any additional kubernetes annotations to be set on the PVCs"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'""'})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.customer"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"global.customer.name"}),"*"]}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Name of the customer to uniquely identify"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'""'})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"global.customer.cluster"}),"*"]}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Name of the cluster to uniquely identify the cluster for a customer"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"prophecy"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.disableIngressCreation"})}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"Set this to true, if the customer wishes to manually manage their ingress entries"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.imagePullPolicy"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Image pull policy for all the containers deployed"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Always"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.ingressController"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.ingressController.type"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsxs)(s.td,{children:["Type of ingress controller being used. Currently we support ",(0,n.jsx)(s.code,{children:"nginx"})," and ",(0,n.jsx)(s.code,{children:"istio"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"nginx"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.ingressController.class"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Name of the controller class which is to be used for ingress resources"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"prophecy-nginx"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.istio"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.istio.enabled"})}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"Set this to true to allow usage of istio as an ingress controller/gateway. We don't support sidecars yet. Istio isn't installed or managed by Prophecy."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.istio.gateway"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.istio.gateway.name"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Name of the Istio gateway"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"istio-gateways/istio-gateway"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.istio.gateway.create"})}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"Set this to true, when you wish to create the Istio gateway"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.prophecy"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.prophecy.domainValue"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"domain value used for cookies. Used to configure multiple URLs."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'""'})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.prophecy.envSecret"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{children:"Is configured when Prophecy credentials are fetched as a kubernetes secret"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.prophecy.envSecret.create"})}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsxs)(s.td,{children:["Set to true if the secret is to be created. With ",(0,n.jsx)(s.code,{children:"false"})," the secret is expected to be created by the customer."]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.prophecy.envSecret.data"})}),(0,n.jsx)(s.td,{children:"map[string]string"}),(0,n.jsxs)(s.td,{children:["Provide the values you wish to override in Prophecy secret ENV variables. Passed in the format of ",(0,n.jsx)(s.code,{children:"METADATA_DB_PASSWORD: dummyPassword123"}),"."]}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.prophecy.envSecret.name"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Name of the Kubernetes secret to be used."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"env-secrets"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.prophecy.imagePullSecret"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Name of the Kubernetes secret which contains the image pull credentials to the container registry."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'""'})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"global.prophecy.rootUrl"}),"*"]}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Root URL where the Prophecy deployment will be hosted. You may provider a list of comma separated urls if you wish to work with multiple urls. Note that the first url in the provided list will be considered as the primary url."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'""'})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.prophecy.wildcardCert"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.prophecy.wildcardCert.name"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"The number of secrets passed should either be one or equal to the number of rootUrls provided which should be generated for each of these URLs in respective order."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'""'})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.prophecy.wildcardCert.useExternal"})}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"Setting this to true will require the customer to provide a secret name here."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.repository"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Container registry prefix to be used."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"gcr.io/prophecy-share"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.tls"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.tls.enabled"})}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"Specifies if TLS is to be enabled"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"true"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"global.tls.certOnLB"})}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"Specifies whether TLS termination is to be done at the loadbalancer"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"POSTGRES"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"postgres.isExternalPostgres"})}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"Setting this to true, will allow Prophecy services to use a externally managed Postgres instance and will not use a Prophecy managed instance."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"postgres.host"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Specifies the host name for the postgres service. If isExternalPostgres, pass the DNS host name (Not IP) for the external postgres here."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"postgres"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"postgres.port"})}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"Specifies the port used to communicate with postgres."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"5432"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"postgres.resources"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"postgres.resources.requests"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"postgres.resources.requests.cpu"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Guaranteed value of CPU required to deploy Postgres"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"1"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"postgres.resources.requests.memory"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Guaranteed value of memory required to deploy Postgres"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"2000Mi"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"postgres.resources.limits"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"postgres.resources.limits.cpu"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Maximum usage of CPU for Postgres"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"2"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"postgres.resources.limits.memory"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Maximum usage of memory for Postgres"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"4000Mi"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"postgres.secretName"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Specifies the postgres AWS secret manager name from where postgres credentials are to be fetched from."}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"postgres.secretLocation"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Specifies the postgres AWS secret manager region from where postgres credentials are to be fetched from."}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"postgres.volume"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"postgres.volume.requests"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Specifies the volume size of the PVC used by postgres"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"25Gi"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"PLATFORM"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"platform.enabled"})}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"Specifies if one/more of the platform components are to be enabled"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"true"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"platform.elasticsearch.enabled"})}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"Specifies if elasticsearch is to be enabled and deployed for supporting Prophecy search feature"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"true"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"platform.ingressNginx.enabled"})}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"Specifies if nginx controller is to be deployed for ingress routing"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"true"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"platform.namespace"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Specifies the namespace used to deploy the platform components"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"prophecy"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"platform.tracing.enabled"})}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"Specifies if Jaeger based tracing is to be enabled and deployed"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"true"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"VERSION"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"version"})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Specifies the Prophecy version to be deployed"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'""'})})]})]})]})]})}function l(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}const c={title:"Installation via Helm",id:"installation-helm",slug:"/self-hosted-helm-installation",description:"Installation via Helm",sidebar_position:1,tags:["deployment","installation","helm"]},o=void 0,h={},a=[{value:"Kubernetes cluster requirements",id:"kubernetes-cluster-requirements",level:3},{value:"Helm requirements",id:"helm-requirements",level:3},{value:"Minimum resource requirements",id:"minimum-resource-requirements",level:3},{value:"Install Prophecy",id:"install-prophecy",level:2},{value:"Helm chart values",id:"helm-chart-values",level:2},{value:"Common configurations",id:"common-configurations",level:3},{value:"Nginx ingress controller",id:"nginx-ingress-controller",level:4},{value:"Private container registry",id:"private-container-registry",level:4},{value:"Custom domain names",id:"custom-domain-names",level:4},{value:"Additional example Helm install commands",id:"additional-example-helm-install-commands",level:2}];function x(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["One way to install Prophecy is to use ",(0,n.jsx)(s.a,{href:"https://helm.sh/docs/intro/quickstart/",children:"Helm"}),".\nInstallation requirements and Helm chart values are outlined in this page."]}),"\n",(0,n.jsxs)(s.p,{children:["For an example step-by-step installation, visit ",(0,n.jsx)(s.a,{href:"/administration/self-hosted/installation-helm/install-on-aws",children:"AWS installation guide"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"kubernetes-cluster-requirements",children:"Kubernetes cluster requirements"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Kubernetes Version"}),": 1.21 or later."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Namespace"}),": Dedicated namespace for Prophecy installation."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Permissions"}),": Ability to install custom resources (CRDs) or deploy an additional provided Helm chart."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Cluster Configuration"}),": Supports multi-AZ or single-AZ mode."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Block Storage"}),": Required; in multi-AZ mode, set volume binding mode to ",(0,n.jsx)(s.code,{children:"waitforfirstconsumer"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Persistent Storage"}),": Dynamic provisioning (e.g., gp2) required."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"helm-requirements",children:"Helm requirements"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"https://helm.sh/docs/intro/quickstart/",children:"Helm"})}),": Must be installed to deploy Prophecy."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"#custom-domain-names",children:"Custom Domain Hosting"})}),": Requires SSL certificates and DNS configuration; include during Helm installation."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"#private-container-registry",children:"Private Container Registry"})}),": Pull images from ",(0,n.jsx)(s.code,{children:"gcr.io/prophecy-share"})," and push to your private registry. Set ",(0,n.jsx)(s.code,{children:"global.repository"})," during Helm installation."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"minimum-resource-requirements",children:"Minimum resource requirements"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Components"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"# Cores"}),(0,n.jsx)(s.th,{children:"# RAM"}),(0,n.jsx)(s.th,{children:"# Block Storage"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Prophecy core services"}),(0,n.jsx)(s.td,{children:"Main services (front-end, code editor, metadata, lineage, etc.)"}),(0,n.jsx)(s.td,{children:"40 Cores"}),(0,n.jsx)(s.td,{children:"78GB"}),(0,n.jsx)(s.td,{children:"160GB"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Platform"}),(0,n.jsx)(s.td,{children:"Backups, monitoring, logging services (optional)"}),(0,n.jsx)(s.td,{children:"4 Cores"}),(0,n.jsx)(s.td,{children:"8GB"}),(0,n.jsx)(s.td,{children:"200GB"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"install-prophecy",children:"Install Prophecy"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"helm install"})," command installs Prophecy via the provided Helm chart."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"To retrieve the Prophecy Helm chart, run the command:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"helm repo add prophecy https://prophecy-chart.s3.us-west-2.amazonaws.com\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"If you want to install Prophecy using all of the provided values, the simplest command to run is:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"helm -n <namespace> install prophecy prophecy/prophecy-installer --version <prophecy-chart-version> --set global.customer.name=<customer-name> --set global.prophecy.rootUrl=<IDE-URL>\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Read through the rest of this page to understand how to customize the installation command."}),"\n",(0,n.jsx)(s.h2,{id:"helm-chart-values",children:"Helm chart values"}),"\n",(0,n.jsx)(s.p,{children:"Prophecy is installed via Helm chart called the Prophecy-installer. The following are the commonly used values which can be configured for this helm chart. The Helm chart values can be broadly classified into 5 different sections:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Athena:"})," Configurations related to the management plane."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Global:"})," Configurations for all common values between components like Athena, Postgres, and Platform."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Postgres:"})," Configurations related to Postgres or at the database level."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Platform:"})," Configurations regarding various platform components like elastic search, Prometheus, Grafana, etc."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Version:"})," The Prophecy version you want to deploy."]}),"\n"]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Complete table of Helm values"}),(0,n.jsx)(l,{})]}),"\n",(0,n.jsx)(s.h3,{id:"common-configurations",children:"Common configurations"}),"\n",(0,n.jsx)(s.p,{children:"Here are some configurations that are commonly changed from the default."}),"\n",(0,n.jsx)(s.h4,{id:"nginx-ingress-controller",children:"Nginx ingress controller"}),"\n",(0,n.jsxs)(s.p,{children:["By default, Prophecy will install its own managed Nginx ingress controller during the Helm installation. If you want to use your own Nginx ingress controller already installed on your Kubernetes cluster, you can do so if it supports external service exposure via a LoadBalancer. You'll have to set ",(0,n.jsx)(s.code,{children:"global.disableIngressCreation"})," to true, and set ",(0,n.jsx)(s.code,{children:"global.ingressController.class"})," to the appropriate name."]}),"\n",(0,n.jsx)(s.h4,{id:"private-container-registry",children:"Private container registry"}),"\n",(0,n.jsxs)(s.p,{children:["During the Helm installation, docker images are pulled from Prophecy's public Google Container Registry ",(0,n.jsx)(s.code,{children:"gcr.io/prophecy-share"}),". If you want to use your own private container registry, you can specify it by setting the ",(0,n.jsx)(s.code,{children:"global.repository"})," value during installation. Make sure to push all the images to your private registry first."]}),"\n",(0,n.jsx)(s.h4,{id:"custom-domain-names",children:"Custom domain names"}),"\n",(0,n.jsx)(s.p,{children:"If you are using Prophecy's domain, you don't have to worry about hostname resolution. However, if you want to use your own domain, you need to create SSL certificates, set up the correct DNS configurations, and include that information during the Helm installation."}),"\n",(0,n.jsx)(s.h2,{id:"additional-example-helm-install-commands",children:"Additional example Helm install commands"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Using your own SSL certificates without internet connectivity:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"helm -n <namespace> install prophecy prophecy/prophecy-installer --version <prophecy-chart-version> --set global.customer.name=<customer name> --set global.prophecy.rootUrl=<Base URL> --set global.prophecy.wildcardCert.useExternal=true --set global.prophecy.wildcardCert.name=<wildcard cert secret name> --set athena.controlcenter.disabled=true --set global.repository=<Image repository> --set global.prophecy.imagePullSecret=<Image pull secret name> --set athena.isDarkCluster=true\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Using an external SQL database:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"helm -n <namespace> upgrade -i prophecy-installer prophecy/prophecy-installer --version 3.3.1-1 --set version=3.3.1.1 --set global.customer.cluster={cluster-name} --set global.prophecy.rootUrl={cluster-name}-{customer-name}.dev.cloud.prophecy.io --set global.customer.name={customer-name} --set postgres.isExternalPostgres=true --set postgres.host={googlesql-dns-name} --set postgres.user={google-sql-user-name} --set postgres.password={google-sql-user-password} --debug\n"})}),"\n"]}),"\n"]})]})}function j(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}}}]);