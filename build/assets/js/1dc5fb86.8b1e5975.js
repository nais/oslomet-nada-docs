"use strict";(self.webpackChunknada=self.webpackChunknada||[]).push([[445],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(n),k=a,c=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return n?r.createElement(c,i(i({ref:t},u),{},{components:n})):r.createElement(c,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9878:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"Vault"},p=void 0,m={unversionedId:"prosessere-data/onprem/vault",id:"prosessere-data/onprem/vault",isDocsHomePage:!1,title:"Vault",description:"For lagring av hemmeligheter som skal brukes i Jupyterhub/Airflow i knada clusteret brukes",source:"@site/docs/prosessere-data/onprem/vault.md",sourceDirName:"prosessere-data/onprem",slug:"/prosessere-data/onprem/vault",permalink:"/prosessere-data/onprem/vault",editUrl:"https://github.com/navikt/nada/edit/master/docs/prosessere-data/onprem/vault.md",tags:[],version:"current",frontMatter:{title:"Vault"},sidebar:"docs",previous:{title:"Jupyterhub",permalink:"/prosessere-data/onprem/jupyterhub"},next:{title:"Dataprodukt",permalink:"/dele-data/data-products"}},u=[{value:"Oppsett av vault for onprem Jupyterhub og Airflow",id:"oppsett-av-vault-for-onprem-jupyterhub-og-airflow",children:[{value:"Team namespace",id:"team-namespace",children:[]},{value:"Enkeltbruker namespace",id:"enkeltbruker-namespace",children:[]}]},{value:"Legg inn hemmeligheter for Jupyterhub/Airflow namespacet",id:"legg-inn-hemmeligheter-for-jupyterhubairflow-namespacet",children:[]},{value:"Bruke hemmeligheter i Jupyterhub/Airflow",id:"bruke-hemmeligheter-i-jupyterhubairflow",children:[]}],s={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"For lagring av hemmeligheter som skal brukes i Jupyterhub/Airflow i knada clusteret brukes\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/navikt/vault-iac/tree/master/doc"},"vault")," p\xe5 samme m\xe5te som applikasjoner gj\xf8r i de \xf8vrige onprem\nclusterne i NAV."),(0,l.kt)("h2",{id:"oppsett-av-vault-for-onprem-jupyterhub-og-airflow"},"Oppsett av vault for onprem Jupyterhub og Airflow"),(0,l.kt)("p",null,"For \xe5 sette opp vault for et nytt Jupyterhub/Airflow namespace kreves det en PR til\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/navikt/vault-iac"},"navikt/vault-iac"),". Hva denne PRen skal best\xe5 av er avhengig av om du skal\nopprette vault omr\xe5de for et ",(0,l.kt)("a",{parentName:"p",href:"#team-namespace"},"team namespace")," eller et ",(0,l.kt)("a",{parentName:"p",href:"#enkeltbruker-namespace"},"enkeltbruker namespace"),"."),(0,l.kt)("h3",{id:"team-namespace"},"Team namespace"),(0,l.kt)("p",null,"For team namespace gj\xf8res f\xf8lgende:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Hvis den ikke allerede eksisterer, opprett mappen ",(0,l.kt)("inlineCode",{parentName:"li"},"terraform/teams/<team-navn>")),(0,l.kt)("li",{parentName:"ol"},"Hvis den ikke allerede eksisterer, opprett en ",(0,l.kt)("inlineCode",{parentName:"li"},"<team-navn>.yml")," fil i mappen ",(0,l.kt)("inlineCode",{parentName:"li"},"terraform/teams/<team-navn>")),(0,l.kt)("li",{parentName:"ol"},"I yml-filen legges f\xf8lgende inn:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"name: <team-navn>\ngroup_id: <gruppe-id>\nkubeflow:\n  - namespace: <jupyter-namespace>\n")),(0,l.kt)("h4",{id:"name"},"name"),(0,l.kt)("p",null,"Navnet p\xe5 teamet"),(0,l.kt)("h4",{id:"group_id"},"group_id"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"group_id")," finner du ved \xe5 g\xe5 til\n",(0,l.kt)("a",{parentName:"p",href:"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/GroupsManagementMenuBlade/AllGroups"},"AAD gruppen"),"\nog leter opp teamet ditt."),(0,l.kt)("h4",{id:"kubeflownamespace"},"kubeflow[].namespace"),(0,l.kt)("p",null,"Navnet p\xe5 Jupyterhub/Airflow namespacet. Skal teamet ha tilgang til vault for flere Jupyterhub/Airflow namespacer s\xe5\nlegger man bare til flere i listen under ",(0,l.kt)("inlineCode",{parentName:"p"},"kubeflow"),"."),(0,l.kt)("h3",{id:"enkeltbruker-namespace"},"Enkeltbruker namespace"),(0,l.kt)("p",null,"For enkeltbruker namespace gj\xf8res f\xf8lgende:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Opprett mappen ",(0,l.kt)("inlineCode",{parentName:"li"},"terraform/users/<navn>")),(0,l.kt)("li",{parentName:"ol"},"Hvis den ikke allerede eksisterer, opprett en ",(0,l.kt)("inlineCode",{parentName:"li"},"<navn>.yml")," fil i mappen ",(0,l.kt)("inlineCode",{parentName:"li"},"terraform/users/<navn>")),(0,l.kt)("li",{parentName:"ol"},"I yml-filen legges f\xf8lgende inn:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"email: <nav-epost>\nkubeflow:\n  - namespace: <jupyter-namespace>\n")),(0,l.kt)("h4",{id:"email"},"email"),(0,l.kt)("p",null,"NAV-eposten til brukeren"),(0,l.kt)("h4",{id:"kubeflownamespace-1"},"kubeflow[].namespace"),(0,l.kt)("p",null,"Navnet p\xe5 Jupyterhub/Airflow namespacet. Skal personen ha tilgang til vault for flere Jupyterhub/Airflow namespacer s\xe5\nlegger man bare til flere i listen under ",(0,l.kt)("inlineCode",{parentName:"p"},"kubeflow"),"."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Etter at pull requesten er godkjent og merget inn vil det ta 5-10 minutter f\xf8r endringene i vault\ner synkronisert."))),(0,l.kt)("h2",{id:"legg-inn-hemmeligheter-for-jupyterhubairflow-namespacet"},"Legg inn hemmeligheter for Jupyterhub/Airflow namespacet"),(0,l.kt)("p",null,"For \xe5 legge inn hemmeligheter g\xe5 til ",(0,l.kt)("a",{parentName:"p",href:"https://vault.adeo.no"},"https://vault.adeo.no")," og logg inn med ",(0,l.kt)("inlineCode",{parentName:"p"},"OIDC"),"."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Velg ",(0,l.kt)("inlineCode",{parentName:"li"},"kv/prod/kubeflow")),(0,l.kt)("li",{parentName:"ol"},"Trykk ",(0,l.kt)("inlineCode",{parentName:"li"},"Create secret +")),(0,l.kt)("li",{parentName:"ol"},"Under ",(0,l.kt)("inlineCode",{parentName:"li"},"Path for this secret")," skriv namespacet du satte\n",(0,l.kt)("a",{parentName:"li",href:"#oppsett-av-vault-for-onprem-jupyterhub-og-airflow"},"over"),".")),(0,l.kt)("p",null,"Deretter kan man legge inn hemmeligheter som key/value verdier, alts\xe5 hvor ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," er navnet p\xe5\nhemmeligheten som du skal bruke for \xe5 referere til den senere og ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," er verdien."),(0,l.kt)("h2",{id:"bruke-hemmeligheter-i-jupyterhubairflow"},"Bruke hemmeligheter i Jupyterhub/Airflow"),(0,l.kt)("p",null,"Hvis du f.eks. har lagt inn en hemmelighet som heter ",(0,l.kt)("inlineCode",{parentName:"p"},"DB_PASSWORD")," i vault kan denne n\xe5 hentes inn\ni Jupyterhub/Airflow med f\xf8lgende kode "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import os\nfrom dataverk_vault import api as vault_api\n\nvault_api.set_secrets_as_envs()\n\nmy_secret = os.environ["DB_PASSWORD"]\n')))}d.isMDXComponent=!0}}]);