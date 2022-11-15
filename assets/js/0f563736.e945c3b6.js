"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[9692],{4137:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>f});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(i),f=r,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return i?n.createElement(m,o(o({ref:t},u),{},{components:i})):n.createElement(m,o({ref:t},u))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},5140:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=i(7462),r=(i(7294),i(4137));const a={version:1,submitted_by:"danielmeixner",published_date:new Date("2022-11-10T00:00:00.000Z"),category:"cloud",description:"If service downtimes are acceptable it's better to not strive for highest availability but to design the solution according to real business needs. Lower availability guarantees can help reduce energy consumption by using less infrastructure components.",tags:["Cloud","Reliability/Availability","Monitoring"]},o="Match your service level objectives to business needs",s={unversionedId:"catalog/cloud/match-slo",id:"catalog/cloud/match-slo",title:"Match your service level objectives to business needs",description:"If service downtimes are acceptable it's better to not strive for highest availability but to design the solution according to real business needs. Lower availability guarantees can help reduce energy consumption by using less infrastructure components.",source:"@site/docs/catalog/cloud/match-slo.md",sourceDirName:"catalog/cloud",slug:"/catalog/cloud/match-slo",permalink:"/catalog/cloud/match-slo",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/cloud/match-slo.md",tags:[{label:"Cloud",permalink:"/tags/cloud"},{label:"Reliability/Availability",permalink:"/tags/reliability-availability"},{label:"Monitoring",permalink:"/tags/monitoring"}],version:"current",frontMatter:{version:1,submitted_by:"danielmeixner",published_date:"2022-11-10T00:00:00.000Z",category:"cloud",description:"If service downtimes are acceptable it's better to not strive for highest availability but to design the solution according to real business needs. Lower availability guarantees can help reduce energy consumption by using less infrastructure components.",tags:["Cloud","Reliability/Availability","Monitoring"]},sidebar:"tutorialSidebar",previous:{title:"Implement stateless design",permalink:"/catalog/cloud/implement-stateless-design"},next:{title:"Match utilization requirements of virtual machines (VMs)",permalink:"/catalog/cloud/match-utilization-requirements-of-vm"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2},{value:"References",id:"references",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"match-your-service-level-objectives-to-business-needs"},"Match your service level objectives to business needs"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"If service downtimes are acceptable it's better to not strive for highest availability but to design the solution according to real business needs. Lower availability guarantees can help reduce energy consumption by using less infrastructure components."),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("p",null,"Adjust your solution design to the service level your actual end users require."),(0,r.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"E"),": We reduce the total electricity required by reducing the number of infrastructure components running."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"M"),": Depending on the solution used it might also reduce the number of physical infrastructure components used.")),(0,r.kt)("h2",{id:"assumptions"},"Assumptions"),(0,r.kt)("p",null,"Suppose you offer a service level objective (SLO) for availability for your service. Engineering teams target to fulfill this objective and will try to exceed this service level objective. In some cases, engineering teams tend to strive for very sophisticated solutions to not run into any danger of falling below the SLO.\nHigh availability comes often for the cost of additional resources used, in the case of hot stand-by designs even with full duplication of infrastructure where half of the infrastructure is not even used.\nIdeally you validate the business reason for a specific SLO target and use it to design a solution that matches business requirements with a reasonable design for reliability and availability."),(0,r.kt)("h2",{id:"considerations"},"Considerations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This can impact the end user experience negatively because you are working towards a specifc SLO instead of highest availability."),(0,r.kt)("li",{parentName:"ul"},"This can reduce overall cloud cost because you will use less resources.")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Uptime"},"Uptime")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Availability_(system)"},"Availability")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Service-level_objective"},"Service Level Objective (SLO)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.greensoftware.foundation/practitioner/energy-efficiency/"},"Energy Efficiency Principle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.greensoftware.foundation/practitioner/hardware-efficiency/"},"Hardware Efficiency Principle"))))}p.isMDXComponent=!0}}]);