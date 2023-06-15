"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[230],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(r),p=o,h=f["".concat(s,".").concat(p)]||f[p]||d[p]||i;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9045:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={},a="Tuning Uniffle",l={unversionedId:"tuning",id:"tuning",title:"Tuning Uniffle",description:"Local Disk",source:"@site/docs/07-tuning.md",sourceDirName:".",slug:"/tuning",permalink:"/zh-CN/docs/tuning",draft:!1,editUrl:"https://github.com/apache/incubator-uniffle/docs/07-tuning.md",tags:[],version:"current",lastUpdatedBy:"roryqi",lastUpdatedAt:1684300930,formattedLastUpdatedAt:"2023\u5e745\u670817\u65e5",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Build Notes",permalink:"/zh-CN/docs/build"}},s={},u=[{value:"Local Disk",id:"local-disk",level:2},{value:"Flush Threshold",id:"flush-threshold",level:2},{value:"Total buffer size",id:"total-buffer-size",level:2},{value:"Partition num and spark write buffer size",id:"partition-num-and-spark-write-buffer-size",level:2},{value:"Multiple Remote Storage",id:"multiple-remote-storage",level:2}],c={toc:u},f="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tuning-uniffle"},"Tuning Uniffle"),(0,o.kt)("h2",{id:"local-disk"},"Local Disk"),(0,o.kt)("p",null,"Normally HDD is recommended since the shuffle data is non-critical and temporary. You can skip this part if you do not care the cost of SSD.Uniffle's shuffle server is a typical I/O-intensive application, it's suggested to use multiple disks to amortize the IO and increase the total throughput.",(0,o.kt)("a",{parentName:"p",href:"https://www.techtarget.com/searchstorage/definition/RAID-10-redundant-array-of-independent-disks"},"RAID10")," is strongly recommended to use to get lower latency, high throughput, and good fault tolerance, which consumes more space (twice), which is acceptable since we use HDD."),(0,o.kt)("h2",{id:"flush-threshold"},"Flush Threshold"),(0,o.kt)("p",null,"One of the design principles of Uniffle is to handle both small and huge shuffles, therefore the shuffle server writes the small block to the local disk and the big block to the HDFS, and the threshold is configured by the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"rss.server.flush.cold.storage.threshold.size"),". It is recommended to tune this parameter to make the ratio between the remote write total size and local write total size according to your workload and storage system's situation."),(0,o.kt)("h2",{id:"total-buffer-size"},"Total buffer size"),(0,o.kt)("p",null,"Uniffle use ",(0,o.kt)("inlineCode",{parentName:"p"},"rss.server.buffer.capacity")," to constrait the memory consumed by the buffered shuffle data, however the memory used by the metadata is not controlled, and it is recommended to reserve a certain percentage of redundancy, for example 20%, in the the shuffler server's jvm process (",(0,o.kt)("inlineCode",{parentName:"p"},"XMX_SIZE"),") in additon to the total buffer (",(0,o.kt)("inlineCode",{parentName:"p"},"rss.server.buffer.capacity")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"rss.server.read.buffer.capacity"),")."),(0,o.kt)("h2",{id:"partition-num-and-spark-write-buffer-size"},"Partition num and spark write buffer size"),(0,o.kt)("p",null,"Uniffle's spark client allocated buffer for each partition, and if the total memory used exceed the total buffer spill threshold (",(0,o.kt)("inlineCode",{parentName:"p"},"spark.rss.writer.buffer.spill.size"),") the client would send all the buffer data to the shuffle server, so it is recommmended to increase this threshold for the huge shuffle spark applications to avoid small network io."),(0,o.kt)("h2",{id:"multiple-remote-storage"},"Multiple Remote Storage"),(0,o.kt)("p",null,"Uniffle not only support multiple local disk but also supports using multiple remote storage with different configuration."))}d.isMDXComponent=!0}}]);