"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[877],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(r),d=o,y=l["".concat(p,".").concat(d)]||l[d]||f[d]||i;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4421:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:5},a="\u5168\u5c40\u5feb\u6377\u952e\u9009\u9879",c={unversionedId:"options/shortcut",id:"options/shortcut",title:"\u5168\u5c40\u5feb\u6377\u952e\u9009\u9879",description:"",source:"@site/docs/options/shortcut.md",sourceDirName:"options",slug:"/options/shortcut",permalink:"/niva/en/docs/options/shortcut",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docSidebar",previous:{title:"\u7cfb\u7edf\u6258\u76d8\u56fe\u6807\u9009\u9879",permalink:"/niva/en/docs/options/tray"},next:{title:"API \u6587\u6863",permalink:"/niva/en/docs/category/api-\u6587\u6863"}},p={},s=[],u={toc:s},l="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5168\u5c40\u5feb\u6377\u952e\u9009\u9879"},"\u5168\u5c40\u5feb\u6377\u952e\u9009\u9879"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u5168\u5c40\u5feb\u6377\u952e\u7684\u9009\u9879\u3002\ninterface ShortcutOption {\n  accelerator: string;\n  id: number;\n}\n\n// Niva \u5168\u5c40\u5feb\u6377\u952e\u7684\u9009\u9879\u3002\ntype NivaShortcutsOptions = ShortcutOption[];\n")))}f.isMDXComponent=!0}}]);