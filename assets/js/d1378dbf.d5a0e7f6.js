"use strict";(self.webpackChunknada=self.webpackChunknada||[]).push([[429],{3905:function(e,n,a){a.d(n,{Zo:function(){return d},kt:function(){return u}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),l=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},d=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=l(a),u=r,m=k["".concat(p,".").concat(u)]||k[u]||c[u]||i;return a?t.createElement(m,s(s({ref:n},d),{},{components:a})):t.createElement(m,s({ref:n},d))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=k;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3832:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return k}});var t=a(7462),r=a(3366),i=(a(7294),a(3905)),s=["components"],o={title:"Publisering av datapakker"},p=void 0,l={unversionedId:"dele-innsikt/publish-data-packages",id:"dele-innsikt/publish-data-packages",isDocsHomePage:!1,title:"Publisering av datapakker",description:"Eksempelet under viser hvordan man kan publisere datapakker til datapakke-katalogen i dev (https//datakatalog-api.intern.nav.no.",source:"@site/docs/dele-innsikt/publish-data-packages.md",sourceDirName:"dele-innsikt",slug:"/dele-innsikt/publish-data-packages",permalink:"/oslomet-nada-docs/dele-innsikt/publish-data-packages",editUrl:"https://github.com/navikt/nada/edit/main/docs/dele-innsikt/publish-data-packages.md",tags:[],version:"current",frontMatter:{title:"Publisering av datapakker"},sidebar:"docs",previous:{title:"Metabase",permalink:"/oslomet-nada-docs/dele-innsikt/metabase"}},d=[{value:"Lag en ny datapakke",id:"lag-en-ny-datapakke",children:[{value:"Respons",id:"respons",children:[]}]},{value:"Last opp view og ressursfil",id:"last-opp-view-og-ressursfil",children:[]},{value:"Oppdater en datapakke",id:"oppdater-en-datapakke",children:[]},{value:"Eksempel p\xe5 en datapakke json som inneholder en visualisering",id:"eksempel-p\xe5-en-datapakke-json-som-inneholder-en-visualisering",children:[{value:"Echarts dekker mange forskjellige visualiseringstyper",id:"echarts-dekker-mange-forskjellige-visualiseringstyper",children:[]}]},{value:"Eksempel p\xe5 en datapakke json som inkluderer en nedlastbar fil og en referanse til en visualisering",id:"eksempel-p\xe5-en-datapakke-json-som-inkluderer-en-nedlastbar-fil-og-en-referanse-til-en-visualisering",children:[]}],c={toc:d};function k(e){var n=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Eksempelet under viser hvordan man kan publisere datapakker til datapakke-katalogen i dev (",(0,i.kt)("a",{parentName:"p",href:"https://data.dev.intern.nav.no"},"https://data.dev.intern.nav.no"),"). API-adressen for prod er ",(0,i.kt)("inlineCode",{parentName:"p"},"https://datakatalog-api.intern.nav.no"),"."),(0,i.kt)("h2",{id:"lag-en-ny-datapakke"},"Lag en ny datapakke"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -X 'POST' -d @datapackage.json 'https://datakatalog-api.dev.intern.nav.no/v1/datapackage'\n")),(0,i.kt)("h3",{id:"respons"},"Respons"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "id": "1c9c6c7c40812e207946632dcc4be58f",\n  "status": "Successfully created datapackage my datapackage"\n}\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Merk deg IDen som returneres. Du trenger denne dersom du \xf8nsker \xe5 oppdatere datapakken"))),(0,i.kt)("h2",{id:"last-opp-view-og-ressursfil"},"Last opp view og ressursfil"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -X PUT -F files=@resource.csv -F files=@testfig.json https://datakatalog-api.dev.intern.nav.no/v1/datapackage/1c9c6c7c40812e207946632dcc4be58f/attachments\n")),(0,i.kt)("h2",{id:"oppdater-en-datapakke"},"Oppdater en datapakke"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -X 'PUT' -d @datapakke.json 'https://datakatalog-api.dev.intern.nav.no/v1/datapackage/1c9c6c7c40812e207946632dcc4be58f'\n")),(0,i.kt)("h2",{id:"eksempel-p\xe5-en-datapakke-json-som-inneholder-en-visualisering"},"Eksempel p\xe5 en datapakke json som inneholder en visualisering"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "title": "Echarts demo data package",\n  "description": "Echarts demo data package",\n  "views": [\n    {\n      "title": "Echart demofigure",\n      "description": "This is a test figure",\n      "specType": "echart",\n      "spec": { option: {\n        xAxis: {\n            type: \'category\',\n            data: [\'Mon\', \'Tue\', \'Wed\', \'Thu\', \'Fri\', \'Sat\', \'Sun\']\n        },\n        yAxis: {\n            type: \'value\'\n        },\n        series: [{\n            data: [150, 230, 224, 218, 135, 147, 260],\n            type: \'line\'\n        }]\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"echarts-dekker-mange-forskjellige-visualiseringstyper"},"Echarts dekker mange forskjellige ",(0,i.kt)("a",{parentName:"h3",href:"https://echarts.apache.org/examples/en/index.html"},"visualiseringstyper")),(0,i.kt)("h2",{id:"eksempel-p\xe5-en-datapakke-json-som-inkluderer-en-nedlastbar-fil-og-en-referanse-til-en-visualisering"},"Eksempel p\xe5 en datapakke json som inkluderer en nedlastbar fil og en referanse til en visualisering"),(0,i.kt)("p",null,"N\xe5r man inkluderer en eller flere figurer som inneholder mye data burde du lagre visualiseringsdata (",(0,i.kt)("inlineCode",{parentName:"p"},"spec"),") som separate filer og referere til disse i datapakke json, f.eks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "title": "my data package",\n  "description": "this is my data package",\n  "views": [\n    {\n      "title": "Test figure",\n      "description": "This is a test figure",\n      "specType": "plotly",\n      "spec": {\n        "url": "testfigure.json"\n      }\n    }\n  ],\n  "resources": [\n    {\n      "name": "resource",\n      "description": "This is a test resource",\n      "path": "resource.csv",\n      "format": "csv",\n      "dsv_separator": ";"\n    }\n  ]\n}\n')))}k.isMDXComponent=!0}}]);