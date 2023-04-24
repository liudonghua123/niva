"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[136],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>y});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function m(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),u=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},b=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),l=u(r),b=i,y=l["".concat(p,".").concat(b)]||l[b]||c[b]||o;return r?t.createElement(y,a(a({ref:n},s),{},{components:r})):t.createElement(y,a({ref:n},s))}));function y(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=b;var m={};for(var p in n)hasOwnProperty.call(n,p)&&(m[p]=n[p]);m.originalType=e,m[l]="string"==typeof e?e:i,a[1]=m;for(var u=2;u<o;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}b.displayName="MDXCreateElement"},246:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>u});var t=r(7462),i=(r(7294),r(3905));const o={},a="\u76d1\u89c6\u5668 monitor",m={unversionedId:"api/monitor",id:"api/monitor",title:"\u76d1\u89c6\u5668 monitor",description:"Niva.api.monitor.list",source:"@site/docs/api/monitor.md",sourceDirName:"api",slug:"/api/monitor",permalink:"/niva/docs/api/monitor",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"\u7f51\u7edc http",permalink:"/niva/docs/api/http"},next:{title:"\u7cfb\u7edf os",permalink:"/niva/docs/api/os"}},p={},u=[{value:"Niva.api.monitor.list",id:"nivaapimonitorlist",level:2},{value:"Niva.api.monitor.current",id:"nivaapimonitorcurrent",level:2},{value:"Niva.api.monitor.primary",id:"nivaapimonitorprimary",level:2},{value:"Niva.api.monitor.fromPoint",id:"nivaapimonitorfrompoint",level:2}],s={toc:u},l="wrapper";function c(e){let{components:n,...r}=e;return(0,i.kt)(l,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u76d1\u89c6\u5668-monitor"},"\u76d1\u89c6\u5668 monitor"),(0,i.kt)("h2",{id:"nivaapimonitorlist"},"Niva.api.monitor.list"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * \u5217\u51fa\u7cfb\u7edf\u4e2d\u53ef\u7528\u7684\u6240\u6709\u76d1\u89c6\u5668\uff0c\u5e76\u8fd4\u56de\u5b83\u4eec\u7684\u4fe1\u606f\u3002\u5305\u62ec\u6bcf\u4e2a\u76d1\u89c6\u5668\u7684\u540d\u79f0\u3001\u5927\u5c0f\u3001\u4f4d\u7f6e\u3001\u7269\u7406\u5927\u5c0f\u3001\u7269\u7406\u4f4d\u7f6e\u548c\u7f29\u653e\u56e0\u5b50\u3002\n * @returns \u4e00\u4e2a Promise\uff0c\u5728\u83b7\u53d6\u76d1\u89c6\u5668\u4fe1\u606f\u6210\u529f\u65f6\u89e3\u6790\u8be5 Promise\uff0c\u6216\u5728\u53d1\u751f\u9519\u8bef\u65f6\u62d2\u7edd\u8be5 Promise\u3002\u6210\u529f\u65f6\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u6240\u6709\u76d1\u89c6\u5668\u4fe1\u606f\u7684\u6570\u7ec4\u3002\n */\nexport function list(): Promise<{\n    name: string;\n    size: { width: number; height: number };\n    position: { x: number; y: number };\n    physicalSize: { width: number; height: number };\n    physicalPosition: { x: number; y: number };\n    scaleFactor: number;\n}[]>;\n")),(0,i.kt)("h2",{id:"nivaapimonitorcurrent"},"Niva.api.monitor.current"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * \u83b7\u53d6\u5305\u542b\u5f53\u524d\u7a97\u53e3\u7684\u76d1\u89c6\u5668\u7684\u4fe1\u606f\uff0c\u5305\u62ec\u8be5\u76d1\u89c6\u5668\u7684\u540d\u79f0\u3001\u5927\u5c0f\u3001\u4f4d\u7f6e\u3001\u7269\u7406\u5927\u5c0f\u3001\u7269\u7406\u4f4d\u7f6e\u548c\u7f29\u653e\u56e0\u5b50\u3002\n * @returns \u4e00\u4e2a Promise\uff0c\u5728\u83b7\u53d6\u76d1\u89c6\u5668\u4fe1\u606f\u6210\u529f\u65f6\u89e3\u6790\u8be5 Promise\uff0c\u6216\u5728\u53d1\u751f\u9519\u8bef\u65f6\u62d2\u7edd\u8be5 Promise\u3002\u6210\u529f\u65f6\u8fd4\u56de\u5305\u542b\u76d1\u89c6\u5668\u4fe1\u606f\u7684\u5bf9\u8c61\u3002\n */\nexport function current(): Promise<{\n    name: string;\n    size: { width: number; height: number };\n    position: { x: number; y: number };\n    physicalSize: { width: number; height: number };\n    physicalPosition: { x: number; y: number };\n    scaleFactor: number;\n} | null>;\n")),(0,i.kt)("h2",{id:"nivaapimonitorprimary"},"Niva.api.monitor.primary"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * \u83b7\u53d6\u7cfb\u7edf\u4e2d\u4e3b\u76d1\u89c6\u5668\u7684\u4fe1\u606f\uff0c\u5305\u62ec\u8be5\u76d1\u89c6\u5668\u7684\u540d\u79f0\u3001\u5927\u5c0f\u3001\u4f4d\u7f6e\u3001\u7269\u7406\u5927\u5c0f\u3001\u7269\u7406\u4f4d\u7f6e\u548c\u7f29\u653e\u56e0\u5b50\u3002\n * @returns \u4e00\u4e2a Promise\uff0c\u5728\u83b7\u53d6\u4e3b\u76d1\u89c6\u5668\u4fe1\u606f\u6210\u529f\u65f6\u89e3\u6790\u8be5 Promise\uff0c\u6216\u5728\u53d1\u751f\u9519\u8bef\u65f6\u62d2\u7edd\u8be5 Promise\u3002\u6210\u529f\u65f6\u8fd4\u56de\u5305\u542b\u76d1\u89c6\u5668\u4fe1\u606f\u7684\u5bf9\u8c61\u3002\n */\nexport function primary(): Promise<{\n    name: string;\n    size: { width: number; height: number };\n    position: { x: number; y: number };\n    physicalSize: { width: number; height: number };\n    physicalPosition: { x: number; y: number };\n    scaleFactor: number;\n} | null>;\n")),(0,i.kt)("h2",{id:"nivaapimonitorfrompoint"},"Niva.api.monitor.fromPoint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * \u83b7\u53d6\u6307\u5b9a\u5750\u6807\u70b9\u6240\u5728\u7684\u76d1\u89c6\u5668\u7684\u4fe1\u606f\uff0c\u5305\u62ec\u8be5\u76d1\u89c6\u5668\u7684\u540d\u79f0\u3001\u5927\u5c0f\u3001\u4f4d\u7f6e\u3001\u7269\u7406\u5927\u5c0f\u3001\u7269\u7406\u4f4d\u7f6e\u548c\u7f29\u653e\u56e0\u5b50\u3002\n * @param x \u5750\u6807\u70b9\u7684 X \u5750\u6807\u3002\n * @param y \u5750\u6807\u70b9\u7684 Y \u5750\u6807\u3002\n * @returns \u4e00\u4e2a Promise\uff0c\u5728\u83b7\u53d6\u76d1\u89c6\u5668\u4fe1\u606f\u6210\u529f\u65f6\u89e3\u6790\u8be5 Promise\uff0c\u6216\u5728\u53d1\u751f\u9519\u8bef\u65f6\u62d2\u7edd\u8be5 Promise\u3002\u6210\u529f\u65f6\u8fd4\u56de\u5305\u542b\u76d1\u89c6\u5668\u4fe1\u606f\u7684\u5bf9\u8c61\u3002\n */\nexport function fromPoint(x: number, y: number): Promise<{\n    name: string;\n    size: { width: number; height: number };\n    position: { x: number; y: number };\n    physicalSize: { width: number; height: number };\n    physicalPosition: { x: number; y: number };\n    scaleFactor: number;\n} | null>;\n")))}c.isMDXComponent=!0}}]);