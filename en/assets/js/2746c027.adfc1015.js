"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[887],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1812:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4},i="\u5bfc\u5165\u5176\u4ed6\u524d\u7aef\u9879\u76ee",l={unversionedId:"tutorial/import-project",id:"tutorial/import-project",title:"\u5bfc\u5165\u5176\u4ed6\u524d\u7aef\u9879\u76ee",description:"\u5f00\u59cb\u4e4b\u524d\uff0c\u9700\u8981\u5148\u5230\u4e0b\u8f7d\u9875\u9762\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684 Niva \u5f00\u53d1\u8005\u5de5\u5177\u3002",source:"@site/docs/tutorial/import-project.md",sourceDirName:"tutorial",slug:"/tutorial/import-project",permalink:"/niva/en/docs/tutorial/import-project",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docSidebar",previous:{title:"\u4ece React \u9879\u76ee\u4e2d\u5bfc\u5165",permalink:"/niva/en/docs/tutorial/import-project-from-react"},next:{title:"\u9009\u9879\u6587\u6863",permalink:"/niva/en/docs/category/\u9009\u9879\u6587\u6863"}},p={},c=[{value:"\u5bfc\u5165\u4e00\u4e2a\u6ca1\u6709\u7f16\u8bd1\u6784\u5efa\u7cfb\u7edf\u7684\u524d\u7aef\u9879\u76ee",id:"\u5bfc\u5165\u4e00\u4e2a\u6ca1\u6709\u7f16\u8bd1\u6784\u5efa\u7cfb\u7edf\u7684\u524d\u7aef\u9879\u76ee",level:2},{value:"\u5bfc\u5165\u4e00\u4e2a\u6709\u7f16\u8bd1\u6784\u5efa\u7cfb\u7edf\u7684\u524d\u7aef\u9879\u76ee",id:"\u5bfc\u5165\u4e00\u4e2a\u6709\u7f16\u8bd1\u6784\u5efa\u7cfb\u7edf\u7684\u524d\u7aef\u9879\u76ee",level:2},{value:"\u8c03\u8bd5\u914d\u7f6e",id:"\u8c03\u8bd5\u914d\u7f6e",level:3},{value:"\u6784\u5efa\u914d\u7f6e",id:"\u6784\u5efa\u914d\u7f6e",level:3}],u={toc:c},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5bfc\u5165\u5176\u4ed6\u524d\u7aef\u9879\u76ee"},"\u5bfc\u5165\u5176\u4ed6\u524d\u7aef\u9879\u76ee"),(0,a.kt)("p",null,"\u5f00\u59cb\u4e4b\u524d\uff0c\u9700\u8981\u5148\u5230",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bramblex/niva/releases"},"\u4e0b\u8f7d\u9875\u9762"),"\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684 Niva \u5f00\u53d1\u8005\u5de5\u5177\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4e00\u4e2a\u73b0\u6210\u7684\u524d\u7aef\u9879\u76ee"),(0,a.kt)("h2",{id:"\u5bfc\u5165\u4e00\u4e2a\u6ca1\u6709\u7f16\u8bd1\u6784\u5efa\u7cfb\u7edf\u7684\u524d\u7aef\u9879\u76ee"},"\u5bfc\u5165\u4e00\u4e2a\u6ca1\u6709\u7f16\u8bd1\u6784\u5efa\u7cfb\u7edf\u7684\u524d\u7aef\u9879\u76ee"),(0,a.kt)("p",null,"\u8ddf\u524d\u9762\u6253\u5f00\u9879\u76ee\u7c7b\u4f3c\uff0c\u53ea\u9700\u8981\u627e\u5230\u524d\u7aef\u9879\u76ee index.html \u5b58\u5728\u7684\u6587\u4ef6\u5939\uff0c\u7136\u540e\u901a\u8fc7 Niva \u5f00\u53d1\u8005\u5de5\u5177\u6253\u5f00\u8fd9\u4e2a\u76ee\u5f55\u5373\u53ef\u3002"),(0,a.kt)("p",null,"[\u56fe\u7247]"),(0,a.kt)("p",null,"\u540e\u9762\u7684\u6b65\u9aa4\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/new-project"},"\u521b\u5efa\u65b0\u9879\u76ee"),"\u3002"),(0,a.kt)("h2",{id:"\u5bfc\u5165\u4e00\u4e2a\u6709\u7f16\u8bd1\u6784\u5efa\u7cfb\u7edf\u7684\u524d\u7aef\u9879\u76ee"},"\u5bfc\u5165\u4e00\u4e2a\u6709\u7f16\u8bd1\u6784\u5efa\u7cfb\u7edf\u7684\u524d\u7aef\u9879\u76ee"),(0,a.kt)("p",null,"\u6ce8\uff1a\u6211\u4eec\u9ed8\u8ba4\u5bf9 React \u548c Vue \u7684\u9879\u76ee\u505a\u4e86\u652f\u6301\uff0c\u5982\u679c\u9700\u8981\u5bfc\u5165\u4e00\u4e2a React \u6216\u8005 Vue \u9879\u76ee\u53ef\u4ee5\u770b ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/import-project-from-react"},"\u4ece React \u9879\u76ee\u4e2d\u5bfc\u5165")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/import-project-from-vue"},"\u4ece Vue \u9879\u76ee\u4e2d\u5bfc\u5165"),"\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5176\u4ed6\u9879\u9996\u5148\u5728\u901a\u8fc7 Niva \u5f00\u53d1\u8005\u5de5\u5177\u6253\u5f00\u9879\u76ee\u7684\u6839\u76ee\u5f55\uff0c\u5e76\u4e14\u81ea\u52a8\u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"niva.json")," \u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "<\u9879\u76ee\u540d>", // \u5982\u679c\u6709 package.json \u5219\u81ea\u52a8\u4ece package.json \u4e2d\u8bfb\u53d6\n    "uuid": "<\u9879\u76ee uuid>" // \u81ea\u52a8\u751f\u6210\uff0c\u4e0d\u8981\u4fee\u6539\n}\n')),(0,a.kt)("h3",{id:"\u8c03\u8bd5\u914d\u7f6e"},"\u8c03\u8bd5\u914d\u7f6e"),(0,a.kt)("p",null,"\u5982\u679c\u9879\u76ee\u6709\u5f00\u53d1\u670d\u52a1\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"niva.json")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," \u5b57\u6bb5\u914d\u7f6e\u8c03\u8bd5\u4fe1\u606f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // ... \n    "debug": {\n        "resource": "<\u8c03\u8bd5\u73af\u5883\u9759\u6001\u6587\u4ef6\u76ee\u5f55>", // \u9759\u6001\u6587\u4ef6\u76ee\u5f55\uff0c\u4e00\u822c\u662f\u9879\u76ee\u4e2d public \u76ee\u5f55\n        "entry": "<\u8c03\u8bd5\u73af\u5883\u5165\u53e3>", // \u5f00\u53d1\u670d\u52a1\u7684\u5165\u53e3\n    }\n}\n')),(0,a.kt)("p",null,"\u914d\u7f6e\u597d\u4ee5\u540e\uff0c\u5c31\u53ef\u4ee5\u542f\u52a8\u5f00\u53d1\u670d\u52a1\u3002\u4e4b\u540e\u518d\u7528 Niva \u5f00\u53d1\u8005\u5de5\u5177\u542f\u52a8\u9879\u76ee\u8c03\u8bd5\u7a97\u53e3\u3002\u63a5\u4e0b\u6765\u5c31\u8ddf\u5728\u6d4f\u89c8\u5668\u4e2d\u5f00\u53d1\u8c03\u8bd5\u4e00\u6837\u4e86\u3002"),(0,a.kt)("p",null,"[\u56fe\u7247]"),(0,a.kt)("h3",{id:"\u6784\u5efa\u914d\u7f6e"},"\u6784\u5efa\u914d\u7f6e"),(0,a.kt)("p",null,"\u5982\u679c\u8981\u80fd\u591f\u6b63\u5e38\u7528 Niva \u6784\u5efa\uff0c\u9700\u8981\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"niva.json")," \u91cc\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," \u5b57\u6bb5\u4ee5\u914d\u7f6e\u6784\u5efa\u4fe1\u606f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "build": {\n        "resource": "<\u6784\u5efa\u65f6\u7684\u9759\u6001\u6587\u4ef6\u76ee\u5f55>" // \u9879\u76ee\u7f16\u8bd1\u540e\u7684\u76ee\u6807\u76ee\u5f55\uff0c\u5f80\u5f80\u5305\u542b index.html\n    }\n}\n')),(0,a.kt)("p",null,"\u914d\u7f6e\u597d\u4ee5\u540e\uff0c\u5c31\u53ef\u4ee5\u5148\u6784\u5efa\u9879\u76ee\uff0c\u5f97\u5230\u6784\u5efa\u540e\u7684\u9759\u6001\u9879\u76ee\u6587\u4ef6\u3002\u4e4b\u540e\u518d\u7528 Niva \u5f00\u53d1\u8005\u5de5\u5177\u6784\u5efa\u53ef\u6267\u884c\u6587\u4ef6\uff1a"),(0,a.kt)("p",null,"[\u56fe\u7247]"))}m.isMDXComponent=!0}}]);