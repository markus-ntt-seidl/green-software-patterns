"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[8540],{4137:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var r=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(i),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||n;return i?r.createElement(f,o(o({ref:t},c),{},{components:i})):r.createElement(f,o({ref:t},c))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<n;u++)o[u]=i[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},1102:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=i(7462),a=(i(7294),i(4137));const n={version:1,submitted_by:"dubrie",published_date:new Date("2022-11-10T00:00:00.000Z"),category:"cloud",description:"CPU usage and utilization varies throughout the day, sometimes wildly for different computational requirements. The larger the variance between the average and peak CPU utilization values, the more resources need to be provisioned in stand-by mode to absorb those spikes in traffic.",tags:["compute","monitoring","role:cloud-engineer","role:software-engineer","role:reliability-engineer","size:medium"]},o="Optimize average CPU utilization",l={unversionedId:"catalog/cloud/optimize-avg-cpu-utilization",id:"catalog/cloud/optimize-avg-cpu-utilization",title:"Optimize average CPU utilization",description:"CPU usage and utilization varies throughout the day, sometimes wildly for different computational requirements. The larger the variance between the average and peak CPU utilization values, the more resources need to be provisioned in stand-by mode to absorb those spikes in traffic.",source:"@site/docs/catalog/cloud/optimize-avg-cpu-utilization.md",sourceDirName:"catalog/cloud",slug:"/catalog/cloud/optimize-avg-cpu-utilization",permalink:"/catalog/cloud/optimize-avg-cpu-utilization",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/cloud/optimize-avg-cpu-utilization.md",tags:[{label:"compute",permalink:"/tags/compute"},{label:"monitoring",permalink:"/tags/monitoring"},{label:"role:cloud-engineer",permalink:"/tags/role-cloud-engineer"},{label:"role:software-engineer",permalink:"/tags/role-software-engineer"},{label:"role:reliability-engineer",permalink:"/tags/role-reliability-engineer"},{label:"size:medium",permalink:"/tags/size-medium"}],version:"current",frontMatter:{version:1,submitted_by:"dubrie",published_date:"2022-11-10T00:00:00.000Z",category:"cloud",description:"CPU usage and utilization varies throughout the day, sometimes wildly for different computational requirements. The larger the variance between the average and peak CPU utilization values, the more resources need to be provisioned in stand-by mode to absorb those spikes in traffic.",tags:["compute","monitoring","role:cloud-engineer","role:software-engineer","role:reliability-engineer","size:medium"]},sidebar:"tutorialSidebar",previous:{title:"Optimise storage utilization",permalink:"/catalog/cloud/optimise-storage-resource-utilisation"},next:{title:"Optimize peak CPU utilization",permalink:"/catalog/cloud/optimize-peak-cpu-utilization"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2},{value:"References",id:"references",level:2}],c={toc:u};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"optimize-average-cpu-utilization"},"Optimize average CPU utilization"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"CPU usage and utilization varies throughout the day, sometimes wildly for different computational requirements. The larger the variance between the average and peak CPU utilization values, the more resources need to be provisioned in stand-by mode to absorb those spikes in traffic. "),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"Optimizing average CPU utilization means driving the average utilization value to an optimal level. To find that optimal level, you must understand how your system reacts to traffic and scale issues. If you system can scale quickly, a higher average CPU is ideal. If you system cannot scale quickly, lower average CPU values are generally better to provide additional buffer to support the longer scale times. "),(0,a.kt)("p",null,"From an energy efficiency perspective, optimizing and reducing the average CPU utilization values for your system reduces the overall energy required to support traffic and can make your system hardware requirements more predictable overall. "),(0,a.kt)("p",null,"From a hardware efficiency perspective, optimizing and reducing the average CPU utilization values for your system reduces the amount of resources needed to support traffic. If the traffic in your system spikes quickly, that typically requires resources to be on stand-by and under utilized. This pattern would reduce the amount of resources required to support traffic. "),(0,a.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,a.kt)("p",null,"Optimizing average CPU utilization will impact SCI as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"E"),": Optimized average CPU utilization can reduce the amount of energy needed to support the systems traffic from the reduced CPU requirements."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"M"),": Optimized average CPU utilization can reduce the amount of resources needed which will decrease the amount of embodied carbon required to support the system.")),(0,a.kt)("h2",{id:"assumptions"},"Assumptions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"There is an assumption that traffic is expected to fluctuate during normal production usage because of external natural changes in how users consume. Monitoring the average CPU utilization helps to normalize these fluctuations and give a better overall sense of the system CPU utilization.")),(0,a.kt)("h2",{id:"considerations"},"Considerations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"There is no optimal CPU utilization value provided in this pattern, that should be determined from the system and its specific requirements."),(0,a.kt)("li",{parentName:"ul"},"Reducing average CPU utilization could be achieved by adding more hardware to better load balance. The software practioner should try to find efficiencies within the system that don't involve introducing more hardware and therefore additional embodied carbon.")),(0,a.kt)("h2",{id:"references"},"References"))}d.isMDXComponent=!0}}]);