"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[3505],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(4137));const a={version:1,submitted_by:"yelghali",published_date:new Date("2022-11-10T00:00:00.000Z"),category:"cloud",description:"Network and web application firewalls provide protection against most common attacks and load shedding bad bots. These tools help to remove unnecessary data transmission and reduce the burden on the cloud infrastructure, while also using lower bandwidth and less infrastructure.",tags:["cloud","security","networking","compute","kubernetes","role:software-engineer","size:medium"]},s="Use cloud native network security tools and controls",i={unversionedId:"catalog/cloud/use-cloud-native-network-security-tools-and-controls",id:"catalog/cloud/use-cloud-native-network-security-tools-and-controls",title:"Use cloud native network security tools and controls",description:"Network and web application firewalls provide protection against most common attacks and load shedding bad bots. These tools help to remove unnecessary data transmission and reduce the burden on the cloud infrastructure, while also using lower bandwidth and less infrastructure.",source:"@site/docs/catalog/cloud/use-cloud-native-network-security-tools-and-controls.md",sourceDirName:"catalog/cloud",slug:"/catalog/cloud/use-cloud-native-network-security-tools-and-controls",permalink:"/catalog/cloud/use-cloud-native-network-security-tools-and-controls",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/cloud/use-cloud-native-network-security-tools-and-controls.md",tags:[{label:"cloud",permalink:"/tags/cloud"},{label:"security",permalink:"/tags/security"},{label:"networking",permalink:"/tags/networking"},{label:"compute",permalink:"/tags/compute"},{label:"kubernetes",permalink:"/tags/kubernetes"},{label:"role:software-engineer",permalink:"/tags/role-software-engineer"},{label:"size:medium",permalink:"/tags/size-medium"}],version:"current",frontMatter:{version:1,submitted_by:"yelghali",published_date:"2022-11-10T00:00:00.000Z",category:"cloud",description:"Network and web application firewalls provide protection against most common attacks and load shedding bad bots. These tools help to remove unnecessary data transmission and reduce the burden on the cloud infrastructure, while also using lower bandwidth and less infrastructure.",tags:["cloud","security","networking","compute","kubernetes","role:software-engineer","size:medium"]},sidebar:"tutorialSidebar",previous:{title:"Time-shift Kubernetes cron jobs",permalink:"/catalog/cloud/time-shift-kubernetes-cron-jobs"},next:{title:"Web",permalink:"/catalog/web/"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2},{value:"References",id:"references",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-cloud-native-network-security-tools-and-controls"},"Use cloud native network security tools and controls"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Network & web application firewalls provide protection against ",(0,o.kt)("a",{parentName:"p",href:"https://owasp.org/Top10/"},"most common attacks")," and load shedding bad bots. These tools help to remove unnecessary data transmission and reduce the burden on the cloud infrastructure, while also using lower bandwidth and less infrastructure."),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"Filter ingress and egress traffic at the source to block any unauthorized data transmissions."),(0,o.kt)("p",null,"Use cloud native security tools, as they scale based on demand, and only the necessary infrastructure resources."),(0,o.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,o.kt)("p",null,"Using cloud native security controls and tools will impact SCI as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"E"),": By filtering transmitted data, less energy is consumed by the networking resources."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"M"),": By scaling the tools based on demand and maximizing resource utilization, the total embodied carbon emissions are lower.")),(0,o.kt)("h2",{id:"assumptions"},"Assumptions"),(0,o.kt)("p",null,"Deployment and configuration of the security tools is automated."),(0,o.kt)("h2",{id:"considerations"},"Considerations"),(0,o.kt)("p",null,"Consider implementing a zero trust model, where security controls are layered."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/architecture/framework/sustainability/sustainability-security"},"Microsoft Azure well architected framework sustainability patterns")))}d.isMDXComponent=!0}}]);