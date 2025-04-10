"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[71955],{28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var n=r(96540);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}},74316:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"administration/authentication/active_directory","title":"Active Directory with LDAP","description":"Authentication using Active Directory with LDAP","source":"@site/docs/administration/authentication/active-directory.md","sourceDirName":"administration/authentication","slug":"/administration/authentication/active_directory","permalink":"/prophecy-docs-staging/preview/pr-611/administration/authentication/active_directory","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"authentication","permalink":"/prophecy-docs-staging/preview/pr-611/tags/authentication"},{"inline":true,"label":"ad","permalink":"/prophecy-docs-staging/preview/pr-611/tags/ad"},{"inline":true,"label":"active-directory","permalink":"/prophecy-docs-staging/preview/pr-611/tags/active-directory"}],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Active Directory with LDAP","id":"active_directory","description":"Authentication using Active Directory with LDAP","sidebar_position":2,"tags":["authentication","ad","active-directory"]},"sidebar":"adminSidebar","previous":{"title":"Authentication","permalink":"/prophecy-docs-staging/preview/pr-611/administration/authentication/"},"next":{"title":"Authentication","permalink":"/prophecy-docs-staging/preview/pr-611/administration/authentication/"}}');var i=r(74848),s=r(28453);const o={title:"Active Directory with LDAP",id:"active_directory",description:"Authentication using Active Directory with LDAP",sidebar_position:2,tags:["authentication","ad","active-directory"]},a=void 0,c={},d=[{value:"Overview",id:"overview",level:2},{value:"Host and Certs",id:"host-and-certs",level:2},{value:"Binds",id:"binds",level:2},{value:"User Search",id:"user-search",level:2},{value:"Group Search",id:"group-search",level:2},{value:"Configured LDAP Groups API",id:"configured-ldap-groups-api",level:3},{value:"User Matchers",id:"user-matchers",level:2}];function l(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Learn how to configure Active Directory with LDAP as an identity provider for Prophecy."}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Here are the basics steps to follow connect Prophecy with your LDAP:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Log in to Prophecy as an admin user."}),"\n",(0,i.jsxs)(t.li,{children:["Navigate to the ",(0,i.jsx)(t.strong,{children:"SSO"})," tab of the Prophecy ",(0,i.jsx)(t.strong,{children:"Settings"})," page."]}),"\n",(0,i.jsxs)(t.li,{children:["Under ",(0,i.jsx)(t.strong,{children:"Authentication Provider"}),", select LDAP."]}),"\n",(0,i.jsxs)(t.li,{children:["Fill out the rest of the information and click ",(0,i.jsx)(t.strong,{children:"Save"}),". More information about the available fields can be found below."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"host-and-certs",children:"Host and Certs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Host"}),(0,i.jsxs)(t.td,{children:["Host and optional port of the LDAP server in the form ",(0,i.jsx)(t.code,{children:"host:port"}),'. If the port is not supplied, it will be guessed based on "Disable SSL" and "Start TLS" flags.']})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Disable SSL"}),(0,i.jsx)(t.td,{children:"Required if the LDAP host is not using TLS (port 389). This option inherently leaks passwords to anyone on the same network."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Skip Certificate Verification"}),(0,i.jsx)(t.td,{children:"If a custom certificate isn't provided, this option can be used to turn on TLS certificate checks."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Certificates"}),(0,i.jsx)(t.td,{children:"Upload trusted Root certs, client certs, and client keys."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"binds",children:"Binds"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Bind Distinguished Name"}),(0,i.jsx)(t.td,{children:"The distinguished name for an application service account. The connector uses these credentials to search for users and groups."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Bind Password"}),(0,i.jsx)(t.td,{children:"The distinguished password for an application service account. The connector uses these credentials to search for users and groups."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Username Prompt"}),(0,i.jsx)(t.td,{children:"The attribute to display in the provided password prompt."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"user-search",children:"User Search"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Base Distinguished Name"}),(0,i.jsx)(t.td,{children:"BaseDN to start the search from."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Filter"}),(0,i.jsx)(t.td,{children:"Optional filter to apply when searching the directory."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"User Name"}),(0,i.jsx)(t.td,{children:"Username attribute used for comparing user entries."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ID Attribute"}),(0,i.jsx)(t.td,{children:"String representation of the user."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Email Attribute"}),(0,i.jsx)(t.td,{children:"Attribute to map to Email."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Name Attribute"}),(0,i.jsx)(t.td,{children:"Maps to display name of users."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"group-search",children:"Group Search"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Base Distinguished Name"}),(0,i.jsx)(t.td,{children:"BaseDN to start the search from."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Filter"}),(0,i.jsx)(t.td,{children:"Optional filter to apply when searching the directory."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Name Attribute"}),(0,i.jsx)(t.td,{children:"Maps to display name of users."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"configured-ldap-groups-api",children:"Configured LDAP Groups API"}),"\n",(0,i.jsx)(t.p,{children:"You can use the Configured LDAP Groups API to retrieve all config data for your LDAP groups."}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"curl 'https://<prophecy-env-url>/api/idp/getAllIDPsConfig' \\\n  -H 'Content-Type: application/json;charset=utf-8' \\\n  -H 'cookie: prophecy-token=<prophecy-access-token>'\n"})}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Response:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'{\n "data": {\n  "config": [\n   {\n    "id": "cp_ldap",\n    "type": "ldap",\n    "name": "",\n    "idp": "others",\n    "resourceVersion": "",\n    "idpConfig": {\n     "host": "host-name-here:host-port",\n     "insecureNoSSL": true,\n     "insecureSkipVerify": true,\n     "startTLS": false,\n     "rootCA": "",\n     "clientCert": "",\n     "clientKey": "",\n     "rootCAData": "",\n     "clientCertData": "",\n     "clientKeyData": "",\n     "bindDN": "*****",\n     "bindPW": "*****",\n     "usernamePrompt": "cn",\n     "userSearch": {\n      "baseDN": "dc=example,dc=org",\n      "filter": "(objectClass=person)",\n      "username": "cn",\n      "scope": "",\n      "idAttr": "DN",\n      "emailAttr": "mail",\n      "nameAttr": "cn",\n      "preferredUsernameAttr": "",\n      "emailSuffix": ""\n     },\n     "groupSearch": {\n      "baseDN": "ou=users,dc=example,dc=org|ou=newusers,dc=example,dc=org",\n      "filter": "(objectClass=groupOfNames)",\n      "scope": "",\n      "userAttr": "",\n      "groupAttr": "",\n      "userMatchers": null,\n      "nameAttr": "cn"\n     }\n    }\n   },\n   {\n    "id": "cp_saml",\n    "type": "saml",\n    "name": "",\n    "idp": "okta",\n    "resourceVersion": "",\n    "idpConfig": {\n     "caData": "-----BEGIN CERTIFICATE-----\\nCERT-HERE\\r\\n-----END CERTIFICATE-----\\n",\n     "emailAttr": "email",\n     "entityIssuer": "issuer",\n     "groupsDelim": ", ",\n     "nameIDPolicyFormat": "persistent",\n     "redirectURI": "https://env-domain/api/oauth/samlCallback",\n     "ssoIssuer": "http://www.okta.com/TOKEN",\n     "ssoURL": "https://SSO-URL",\n     "usernameAttr": "name"\n    }\n   }\n  ]\n },\n "success": true\n}\n'})})]}),"\n",(0,i.jsx)(t.h2,{id:"user-matchers",children:"User Matchers"}),"\n",(0,i.jsx)(t.p,{children:"This list contains field pairs that are used to match a user to a group. It adds a requirement to the filter that an attribute in the group must match the user's attribute value."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);