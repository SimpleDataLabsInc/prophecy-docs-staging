"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[62712],{28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var t=s(96540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}},80387:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"administration/self-hosted/installation-helm/install-on-aws","title":"AWS installation guide","description":"Use this guide to help when installing Prophecy on AWS.","source":"@site/docs/administration/self-hosted/installation-helm/install-on-aws.mdx","sourceDirName":"administration/self-hosted/installation-helm","slug":"/administration/self-hosted/installation-helm/install-on-aws","permalink":"/prophecy-docs-staging/preview/pr-610/administration/self-hosted/installation-helm/install-on-aws","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"deployment","permalink":"/prophecy-docs-staging/preview/pr-610/tags/deployment"},{"inline":true,"label":"installation","permalink":"/prophecy-docs-staging/preview/pr-610/tags/installation"},{"inline":true,"label":"aws","permalink":"/prophecy-docs-staging/preview/pr-610/tags/aws"}],"version":"current","frontMatter":{"title":"AWS installation guide","id":"install-on-aws","description":"Use this guide to help when installing Prophecy on AWS.","tags":["deployment","installation","aws"]},"sidebar":"adminSidebar","previous":{"title":"Installation via Helm","permalink":"/prophecy-docs-staging/preview/pr-610/self-hosted-helm-installation"},"next":{"title":"Installation via Marketplaces","permalink":"/prophecy-docs-staging/preview/pr-610/administration/self-hosted/installation-marketplaces/"}}');var i=s(74848),o=s(28453);const r={title:"AWS installation guide",id:"install-on-aws",description:"Use this guide to help when installing Prophecy on AWS.",tags:["deployment","installation","aws"]},l=void 0,a={},c=[{value:"Get started",id:"get-started",level:2},{value:"Connect to your Kubernetes cluster",id:"connect-to-your-kubernetes-cluster",level:2},{value:"Validate your Kubernetes configurations",id:"validate-your-kubernetes-configurations",level:2},{value:"Define network configurations",id:"define-network-configurations",level:2},{value:"Ingress controller",id:"ingress-controller",level:3},{value:"Hostname resolution",id:"hostname-resolution",level:3},{value:"Install Prophecy with Helm",id:"helm-installation",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"If you want a self-hosted deployment of Prophecy, you need to install Prophecy in your Virtual Private Cloud (VPC). Use this guide to help when installing Prophecy on AWS."}),"\n",(0,i.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,i.jsxs)(n.p,{children:["In this guide, we'll walk you through how to install Prophecy on an ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/eks/",children:"EKS cluster"})," in AWS. Note that this is just one recommended way to perform the installation."]}),"\n",(0,i.jsx)(n.h2,{id:"connect-to-your-kubernetes-cluster",children:"Connect to your Kubernetes cluster"}),"\n",(0,i.jsx)(n.p,{children:"Let's start by connecting to the Kubernetes cluster where you will install Prophecy."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Throughout this guide, you'll need to interact with the command line interface. Make sure you have these command line tools:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html",children:"AWS CLI"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://helm.sh/docs/intro/install/",children:"Helm"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/reference/configure/",children:"Configure your AWS CLI"})," if you have not already."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure ",(0,i.jsx)(n.code,{children:"kubectl"})," to connect to your cluster using the following command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"aws eks --region <aws-region> update-kubeconfig --name <cluster-name> --alias <alias>\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Now, your EKS cluster should be included in your local Kubernetes configuration."}),"\n",(0,i.jsx)(n.h2,{id:"validate-your-kubernetes-configurations",children:"Validate your Kubernetes configurations"}),"\n",(0,i.jsx)(n.p,{children:"The Kubernetes cluster on which you will install Prophecy must meet a set of requirements."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Kubernetes must be version 1.21 or later. Check your Kubernetes server version using the following command."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl version\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Your Kubernetes cluster must have ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/",children:"persistant storage with dynamic provisioning"}),". To make sure you have at least one ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/storage/storage-classes/",children:"StorageClass"})," that has a provisioner and reclaimPolicy set, run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl get storageclass\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["You must have permission to install ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",children:"custom resources"}),", or CRDs, to your Kubernetes cluster. CRDs will be installed during installation with the Helm command. You can check if you have this permission with the following command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl auth can-i create customresourcedefinitions --all-namespaces\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you do not have this permission, contact your Kubernetes admin or EKS owner to grant you ",(0,i.jsx)(n.code,{children:"cluster-admin"})," or equivalent permissions. Alternatively, you can deploy a single Helm chart instead that can be shared on request."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"You need a namespace in your Kubernetes cluster where you will install Prophecy. Create a namespace using the command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl create namespace <namespace>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["A common namespace to use is ",(0,i.jsx)(n.code,{children:"prophecy"}),". To check if you namespace was created, run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl get namespaces\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"define-network-configurations",children:"Define network configurations"}),"\n",(0,i.jsx)(n.p,{children:"There are certain configurations that control how Prophecy's services are exposed, secured, and accessed in a networked environment. Network configurations can be managed by Prophecy, or they can be self-managed."}),"\n",(0,i.jsx)(n.h3,{id:"ingress-controller",children:"Ingress controller"}),"\n",(0,i.jsxs)(n.p,{children:["Prophecy can install its own Nginx ingress controller to expose services externally. However, you can also use an Nginx ingress controller already installed on your Kubernetes cluster if it supports external service exposure via a LoadBalancer. You'll have to specify a ingress controller during the ",(0,i.jsx)(n.a,{href:"#helm-installation",children:"Helm installation"})," if you are not using the Prophecy ingress controller."]}),"\n",(0,i.jsx)(n.h3,{id:"hostname-resolution",children:"Hostname resolution"}),"\n",(0,i.jsxs)(n.p,{children:["If you use a Prophecy domain in the format ",(0,i.jsx)(n.code,{children:"*.cloud.prophecy.io"}),", Prophecy handles the hostname resolution. SSL certificates are managed using ",(0,i.jsx)(n.a,{href:"https://letsencrypt.org/how-it-works/",children:"Let's Encrypt"}),", and the DNS configuration is done for you."]}),"\n",(0,i.jsx)(n.p,{children:"If you want to use your own domain:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Obtain SSL certificates for your domain."}),"\n",(0,i.jsx)(n.li,{children:"Install the certificates in your Kubernetes cluster."}),"\n",(0,i.jsx)(n.li,{children:"Add DNS entries for the services in your domain's DNS zone."}),"\n",(0,i.jsx)(n.li,{children:"Ensure the entries point to the external IP address of the Nginx ingress controller LoadBalancer."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"helm-installation",children:"Install Prophecy with Helm"}),"\n",(0,i.jsx)(n.p,{children:"At this point, you should be ready to install Prophecy using Helm."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add the Prophecy Helm chart repository:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"helm repo add prophecy https://prophecy-chart.s3.us-west-2.amazonaws.com\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the Helm install command. Below is the most basic configuration command that only includes required Helm chart values:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"helm -n <namespace> install prophecy prophecy/prophecy-installer --version <version-number>\n--set global.customer.name=<customer-name> --set global.prophecy.rootUrl=<base-url>\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For a full list of Helm chart values that you can set during the installation, visit ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-610/self-hosted-helm-installation#helm-chart-values",children:"Helm chart values"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);