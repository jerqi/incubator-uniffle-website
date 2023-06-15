"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[938],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(r),f=n,h=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return r?o.createElement(h,s(s({ref:t},c),{},{components:r})):o.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<a;d++)s[d]=r[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6867:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=r(7462),n=(r(7294),r(3905));const a={},s="Uniffle Operator Design",i={unversionedId:"K8s-Operator/uniffle-operator-design",id:"K8s-Operator/uniffle-operator-design",title:"Uniffle Operator Design",description:"Summary",source:"@site/docs/04-K8s-Operator/00-uniffle-operator-design.md",sourceDirName:"04-K8s-Operator",slug:"/K8s-Operator/uniffle-operator-design",permalink:"/docs/K8s-Operator/uniffle-operator-design",draft:!1,editUrl:"https://github.com/apache/incubator-uniffle/docs/04-K8s-Operator/00-uniffle-operator-design.md",tags:[],version:"current",lastUpdatedBy:"roryqi",lastUpdatedAt:1684300930,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Metrics",permalink:"/docs/Deploy/metrics"},next:{title:"Installation",permalink:"/docs/K8s-Operator/install"}},l={},d=[{value:"Summary",id:"summary",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Goals",id:"goals",level:2},{value:"Design Details",id:"design-details",level:2},{value:"CRD Definition",id:"crd-definition",level:2},{value:"State Transition",id:"state-transition",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"uniffle-operator-design"},"Uniffle Operator Design"),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"The purpose is to develop an operator to facilitate the rapid deployment of Uniffle in kubernetes environments."),(0,n.kt)("h2",{id:"motivation"},"Motivation"),(0,n.kt)("p",null,"Using the advantages of kubernetes in container orchestration, elastic scaling, and rolling upgrades, uniffle can more\neasily manage coordinator and shuffle server clusters."),(0,n.kt)("p",null,"In addition, based on the operating characteristics of shuffle servers, we hope to achieve safe offline:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Before a shuffle server is scaled down or upgraded, it should be added to the Coordinator's blacklist in advance."),(0,n.kt)("li",{parentName:"ol"},"After ensuring that the number of remaining applications is 0, allow its corresponding pod to be deleted and removed\nfrom the blacklist.")),(0,n.kt)("p",null,"We don't just want to simply pull up the coordinators and shuffle servers, but also ensure that running jobs are not\naffected. Therefore, we decided to develop an operator specifically."),(0,n.kt)("h2",{id:"goals"},"Goals"),(0,n.kt)("p",null,"Operator will implement the following functions:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Normally pull up two coordinator deployments (to ensure active-active) and a shuffle server statefulSet."),(0,n.kt)("li",{parentName:"ol"},"Supports replica expansion and upgrade of coordinators and shuffle servers, among which shuffle server also supports\ngrayscale upgrade."),(0,n.kt)("li",{parentName:"ol"},"Using the webhook mechanism, before a shuffle server is deleted, add its name to the coordinator's blacklist, and\ncheck the number of applications remaining running, and then release the pod deletion request after ensuring safety.")),(0,n.kt)("h2",{id:"design-details"},"Design Details"),(0,n.kt)("p",null,"This operator consists of two components: a crd controller and a webhook that admits crd and pod requests."),(0,n.kt)("p",null,"The crd controller observes the status changes of the crd and controls the workload changes."),(0,n.kt)("p",null,"The webhook verifies the changes of the crd, and admits the pod deletion request according to whether the number of\nremaining applications is 0."),(0,n.kt)("p",null,"The webhook will add the pod to be deleted to the coordinator's blacklist. When the pod is actually deleted, the\ncontroller will remove it from the blacklist."),(0,n.kt)("h2",{id:"crd-definition"},"CRD Definition"),(0,n.kt)("p",null,"An example of a crd object is as follows\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: uniffle.apache.org/v1alpha1\nkind: RemoteShuffleService\nmetadata:\n  name: rss-demo\n  namespace: kube-system\nspec:\n  # ConfigMapName indicates configMap name stores configurations of coordinators and shuffle servers.\n  configMapName: rss-demo\n  # Coordinator represents the relevant configuration of the coordinators.\n  coordinator:\n    # Image represents the mirror image used by coordinators.\n    image: ${coordinator-image}\n    # InitContainerImage is optional, mainly for non-root users to initialize host path permissions.\n    initContainerImage: "busybox:latest"\n    # Count is the number of coordinator workloads to be generated.\n    # By default, we will deploy two coordinators to ensure active-active.\n    count: 2\n    # RpcNodePort represents the port required by the rpc protocol of the coordinators,\n    # and the range is the same as the port range of the NodePort type service in kubernetes.\n    # By default, we will deploy two coordinators to ensure active-active.\n    rpcNodePort:\n      - 30001\n      - 30011\n    # httpNodePort represents the port required by the http protocol of the coordinators,\n    # and the range is the same as the port range of the NodePort type service in kubernetes.\n    # By default, we will deploy two coordinators to ensure active-active.\n    httpNodePort:\n      - 30002\n      - 30012\n    # XmxSize indicates the xmx size configured for coordinators.\n    xmxSize: "10G"\n    # ConfigDir records the directory where the configuration of coordinators reside.\n    configDir: "/data/rssadmin/rss/conf"\n    # Replicas field is the replicas of each coordinator\'s deployment.\n    replicas: 1\n    # ExcludeNodesFilePath indicates exclude nodes file path in coordinators\' containers.\n    excludeNodesFilePath: "/data/rssadmin/rss/coo/exclude_nodes"\n    # SecurityContext holds pod-level security attributes and common container settings.\n    securityContext:\n      # RunAsUser specifies the user ID of all processes in coordinator pods.\n      runAsUser: 1000\n      # FsGroup specifies the group ID of the owner of the volume within coordinator pods.\n      fsGroup: 1000\n    # LogHostPath represents the host path used to save logs of coordinators.\n    logHostPath: "/data/logs/rss"\n    # HostPathMounts field indicates host path volumes and their mounting path within coordinators\' containers.\n    hostPathMounts:\n      /data/logs/rss: /data/rssadmin/rss/logs\n  # shuffleServer represents the relevant configuration of the shuffleServers\n  shuffleServer:\n    # Sync marks whether the shuffle server needs to be updated or restarted.\n    # When the user needs to update the shuffle servers, it needs to be set to true.\n    # After the update is successful, the controller will modify it to false.\n    sync: true\n    # Replicas field is the replicas of each coordinator\'s deployment.\n    replicas: 3\n    # Image represents the mirror image used by shuffle servers.\n    image: ${shuffle-server-image}\n')),(0,n.kt)("p",null,"After a user creates a rss object, the rss-controller component will create the corresponding workloads."),(0,n.kt)("p",null,"For coordinators, the user directly modifies the rss object, and the controller synchronizes the corresponding state to\nthe workloads."),(0,n.kt)("p",null,"For shuffle servers, only by changing the spec.shuffleServer.sync field to true, the controller will apply the\ncorresponding updates to the workloads."),(0,n.kt)("p",null,"If you want more examples, please read more in ",(0,n.kt)("a",{parentName:"p",href:"/docs/K8s-Operator/examples"},"examples"),"."),(0,n.kt)("h2",{id:"state-transition"},"State Transition"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"state transition",src:r(2902).Z,width:"1864",height:"1158"})))}u.isMDXComponent=!0},2902:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/rss-crd-state-transition-330944efa8bb505a5f33e6fa07a66365.png"}}]);