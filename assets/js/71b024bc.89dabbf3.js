"use strict";(self.webpackChunknada=self.webpackChunknada||[]).push([[260],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(r),g=a,m=c["".concat(p,".").concat(g)]||c[g]||u[g]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2625:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"Registrere dataprodukt"},p=void 0,s={unversionedId:"dele-data/registrere-dataprodukt",id:"dele-data/registrere-dataprodukt",isDocsHomePage:!1,title:"Registrere dataprodukt",description:"For \xe5 dele et dataprodukt med andre kan teamet registrere dataproduktet i NAV Data.",source:"@site/docs/dele-data/registrere-dataprodukt.md",sourceDirName:"dele-data",slug:"/dele-data/registrere-dataprodukt",permalink:"/oslomet-nada-docs/dele-data/registrere-dataprodukt",editUrl:"https://github.com/nais/oslomet-nada-docs/edit/main/docs/dele-data/registrere-dataprodukt.md",tags:[],version:"current",frontMatter:{title:"Registrere dataprodukt"},sidebar:"docs",previous:{title:"Laste opp fil til BigQuery",permalink:"/oslomet-nada-docs/dele-data/laste-opp-fil"},next:{title:"Datapakker",permalink:"/oslomet-nada-docs/dele-innsikt/data-packages"}},d=[{value:"Tilgangsstyring",id:"tilgangsstyring",children:[]}],u={toc:d};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For \xe5 dele et dataprodukt med andre kan teamet registrere dataproduktet i ",(0,o.kt)("a",{parentName:"p",href:"https://data.intern.nav.no"},"NAV Data"),".\nFor at en bruker p\xe5 ",(0,o.kt)("a",{parentName:"p",href:"https://data.intern.nav.no"},"NAV Data")," skal v\xe6re mest mulig selvbetjent er det viktig at teamet skriver en fyldig beskrivelse av dataproduktet.\nBeskrivelsen av et BigQuery dataprodukt kan for eksempel inneholde"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Introduksjon til tabellen"),(0,o.kt)("li",{parentName:"ul"},"Transformasjoner gjort p\xe5 tabellen"),(0,o.kt)("li",{parentName:"ul"},"Forklaring av kolonnene i tabellen")),(0,o.kt)("h3",{id:"tilgangsstyring"},"Tilgangsstyring"),(0,o.kt)("p",null,"Det er teamet som eier tilgangsstyringen p\xe5 sine dataprodukter og har ansvar for \xe5 gi tilgang til riktige grupper og personer.\nHer skilles det p\xe5 to niv\xe5er:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Har tilgang"),(0,o.kt)("li",{parentName:"ul"},"Kan gi seg selv tilgang")),(0,o.kt)("p",null,"Tilgangene styres via grensesnittet i ",(0,o.kt)("a",{parentName:"p",href:"https://data.intern.nav.no"},"NAV Data"),", som automatisk oppdaterer tilgangen i gcp-prosjektet."))}c.isMDXComponent=!0}}]);