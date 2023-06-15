"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[644],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),u=i,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5810:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={},a="Metrics",c={unversionedId:"Deploy/metrics",id:"Deploy/metrics",title:"Metrics",description:"Uniffle has provided many metrics information, which help to maintain the Uniffle cluster in production.",source:"@site/docs/03-Deploy/03-metrics.md",sourceDirName:"03-Deploy",slug:"/Deploy/metrics",permalink:"/zh-CN/docs/Deploy/metrics",draft:!1,editUrl:"https://github.com/apache/incubator-uniffle/docs/03-Deploy/03-metrics.md",tags:[],version:"current",lastUpdatedBy:"roryqi",lastUpdatedAt:1684300930,formattedLastUpdatedAt:"2023\u5e745\u670817\u65e5",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hardware Provision",permalink:"/zh-CN/docs/Deploy/hardware-provisioning"},next:{title:"Uniffle Operator Design",permalink:"/zh-CN/docs/K8s-Operator/uniffle-operator-design"}},l={},s=[{value:"Http Interface",id:"http-interface",level:2},{value:"coordinator-related metrics",id:"coordinator-related-metrics",level:3},{value:"server-related metrics",id:"server-related-metrics",level:3},{value:"grpc-related metrics",id:"grpc-related-metrics",level:3},{value:"jvm-related metrics",id:"jvm-related-metrics",level:3}],p={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"metrics"},"Metrics"),(0,i.kt)("p",null,"Uniffle has provided many metrics information, which help to maintain the Uniffle cluster in production."),(0,i.kt)("h2",{id:"http-interface"},"Http Interface"),(0,i.kt)("p",null,"Each coordinator or shuffle server has a http interface to get its metrics.\nWe divide all metrics into four categories."),(0,i.kt)("h3",{id:"coordinator-related-metrics"},"coordinator-related metrics"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl http://[coordinatorIP]:[jettyPort]/metrics/server\n")),(0,i.kt)("h3",{id:"server-related-metrics"},"server-related metrics"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl http://[serverIp]:[jettyPort]/metrics/server\n")),(0,i.kt)("h3",{id:"grpc-related-metrics"},"grpc-related metrics"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl http://[coordinatorIP or serverIp]:[jettyPort]/metrics/grpc\n")),(0,i.kt)("h3",{id:"jvm-related-metrics"},"jvm-related metrics"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl http://[coordinatorIP or serverIp]:[jettyPort]/metrics/jvm\n")))}m.isMDXComponent=!0}}]);