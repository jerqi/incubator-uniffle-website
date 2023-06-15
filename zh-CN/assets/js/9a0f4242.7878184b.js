"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[148],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>b});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function u(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=r.createContext({}),o=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=o(i),k=n,b=s["".concat(p,".").concat(k)]||s[k]||c[k]||a;return i?r.createElement(b,l(l({ref:t},d),{},{components:i})):r.createElement(b,l({ref:t},d))}));function b(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=k;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[s]="string"==typeof e?e:n,l[1]=u;for(var o=2;o<a;o++)l[o]=i[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}k.displayName="MDXCreateElement"},2272:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>o});var r=i(7462),n=(i(7294),i(3905));const a={},l="Build Notes",u={unversionedId:"build",id:"build",title:"Build Notes",description:"Build requirements",source:"@site/docs/06-build.md",sourceDirName:".",slug:"/build",permalink:"/zh-CN/docs/build",draft:!1,editUrl:"https://github.com/apache/incubator-uniffle/docs/06-build.md",tags:[],version:"current",lastUpdatedBy:"roryqi",lastUpdatedAt:1684300930,formattedLastUpdatedAt:"2023\u5e745\u670817\u65e5",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Uniffle Configuration",permalink:"/zh-CN/docs/configuration"},next:{title:"Tuning Uniffle",permalink:"/zh-CN/docs/tuning"}},p={},o=[{value:"Build requirements",id:"build-requirements",level:2},{value:"Building Uniffle",id:"building-uniffle",level:2},{value:"Build Minimal",id:"build-minimal",level:3},{value:"Build against profile Spark2(2.4.6)",id:"build-against-profile-spark2246",level:3},{value:"Build against profile Spark3(3.1.2)",id:"build-against-profile-spark3312",level:3},{value:"Build against Spark 3.2.x, Except 3.2.0",id:"build-against-spark-32x-except-320",level:3},{value:"Build against Spark 3.2.0",id:"build-against-spark-320",level:3},{value:"Build distribution",id:"build-distribution",level:3},{value:"Build distribution Spark 3.2.0",id:"build-distribution-spark-320",level:3},{value:"Build distribution Spark 3.2.x (Not 3.2.0)",id:"build-distribution-spark-32x-not-320",level:3}],d={toc:o},s="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(s,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"build-notes"},"Build Notes"),(0,n.kt)("h2",{id:"build-requirements"},"Build requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mac OS X or Linux"),(0,n.kt)("li",{parentName:"ul"},"JDK 1.8, 64-bit"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://maven.apache.org/"},"Maven"))),(0,n.kt)("h2",{id:"building-uniffle"},"Building Uniffle"),(0,n.kt)("h3",{id:"build-minimal"},"Build Minimal"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mvn -DskipTests clean package\n")),(0,n.kt)("h3",{id:"build-against-profile-spark2246"},"Build against profile Spark2(2.4.6)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mvn -DskipTests clean package -Pspark2\n")),(0,n.kt)("h3",{id:"build-against-profile-spark3312"},"Build against profile Spark3(3.1.2)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mvn -DskipTests clean package -Pspark3\n")),(0,n.kt)("h3",{id:"build-against-spark-32x-except-320"},"Build against Spark 3.2.x, Except 3.2.0"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mvn -DskipTests clean package -Pspark3.2\n")),(0,n.kt)("h3",{id:"build-against-spark-320"},"Build against Spark 3.2.0"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mvn -DskipTests clean package -Pspark3.2.0\n")),(0,n.kt)("h3",{id:"build-distribution"},"Build distribution"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./build_distribution.sh\n")),(0,n.kt)("h3",{id:"build-distribution-spark-320"},"Build distribution Spark 3.2.0"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./build_distribution.sh --spark3-profile 'spark3.2.0'\n")),(0,n.kt)("h3",{id:"build-distribution-spark-32x-not-320"},"Build distribution Spark 3.2.x (Not 3.2.0)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./build_distribution.sh --spark3-profile 'spark3.2'\n")),(0,n.kt)("p",null,"rss-xxx.tgz will be generated."))}c.isMDXComponent=!0}}]);