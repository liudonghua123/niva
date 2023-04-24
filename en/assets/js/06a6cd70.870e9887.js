"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[776],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,y=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8399:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={},o="\u6258\u76d8\u56fe\u6807 tray",p={unversionedId:"api/tray",id:"api/tray",title:"\u6258\u76d8\u56fe\u6807 tray",description:"Niva.api.tray.create",source:"@site/docs/api/tray.md",sourceDirName:"api",slug:"/api/tray",permalink:"/niva/en/docs/api/tray",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"\u5168\u5c40\u5feb\u6377\u952e shortcut",permalink:"/niva/en/docs/api/shortcut"},next:{title:"Webview webview",permalink:"/niva/en/docs/api/webview"}},l={},s=[{value:"Niva.api.tray.create",id:"nivaapitraycreate",level:2},{value:"Niva.api.tray.destroy",id:"nivaapitraydestroy",level:2},{value:"Niva.api.tray.destroyAll",id:"nivaapitraydestroyall",level:2},{value:"Niva.api.tray.list",id:"nivaapitraylist",level:2},{value:"Niva.api.tray.update",id:"nivaapitrayupdate",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6258\u76d8\u56fe\u6807-tray"},"\u6258\u76d8\u56fe\u6807 tray"),(0,a.kt)("h2",{id:"nivaapitraycreate"},"Niva.api.tray.create"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"li"},"NivaTrayOptions")," \u8be6\u89c1 ",(0,a.kt)("a",{parentName:"li",href:"/docs/options/tray"},"\u6258\u76d8\u9009\u9879"),"\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * \u5728\u7cfb\u7edf\u6258\u76d8\u4e2d\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6258\u76d8\u56fe\u6807\u3002\n * @param options \u521b\u5efa\u6258\u76d8\u56fe\u6807\u7684\u914d\u7f6e\u9879\u3002\n * @param window_id \u8981\u521b\u5efa\u6258\u76d8\u56fe\u6807\u7684\u7a97\u53e3 ID\uff0c\u9ed8\u8ba4\u4e3a\u5f53\u524d\u6d3b\u52a8\u7a97\u53e3 ID\u3002\n * @returns \u4e00\u4e2a Promise\uff0c\u5728\u521b\u5efa\u6210\u529f\u65f6\u89e3\u6790\u8be5 Promise\uff0c\u6216\u5728\u53d1\u751f\u9519\u8bef\u65f6\u62d2\u7edd\u8be5 Promise\u3002\u6210\u529f\u65f6\u8fd4\u56de\u65b0\u521b\u5efa\u7684\u6258\u76d8\u56fe\u6807 ID\u3002\n */\nexport function create(\n  options: NivaTrayOptions,\n  window_id?: number\n): Promise<number>;\n")),(0,a.kt)("h2",{id:"nivaapitraydestroy"},"Niva.api.tray.destroy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * \u9500\u6bc1\u6307\u5b9a\u7684\u6258\u76d8\u56fe\u6807\u3002\n * @param id \u8981\u9500\u6bc1\u7684\u6258\u76d8\u56fe\u6807 ID\u3002\n * @param window_id \u8981\u9500\u6bc1\u6258\u76d8\u56fe\u6807\u7684\u7a97\u53e3 ID\uff0c\u9ed8\u8ba4\u4e3a\u5f53\u524d\u6d3b\u52a8\u7a97\u53e3 ID\u3002\n * @returns \u4e00\u4e2a Promise\uff0c\u5728\u9500\u6bc1\u6210\u529f\u65f6\u89e3\u6790\u8be5 Promise\uff0c\u6216\u5728\u53d1\u751f\u9519\u8bef\u65f6\u62d2\u7edd\u8be5 Promise\u3002\n */\nexport function destroy(id: number, window_id?: number): Promise<void>;\n")),(0,a.kt)("h2",{id:"nivaapitraydestroyall"},"Niva.api.tray.destroyAll"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * \u9500\u6bc1\u6307\u5b9a\u7a97\u53e3\u7684\u6240\u6709\u6258\u76d8\u56fe\u6807\u3002\n * @param window_id \u8981\u9500\u6bc1\u6258\u76d8\u56fe\u6807\u7684\u7a97\u53e3 ID\uff0c\u9ed8\u8ba4\u4e3a\u5f53\u524d\u6d3b\u52a8\u7a97\u53e3 ID\u3002\n * @returns \u4e00\u4e2a Promise\uff0c\u5728\u9500\u6bc1\u6210\u529f\u65f6\u89e3\u6790\u8be5 Promise\uff0c\u6216\u5728\u53d1\u751f\u9519\u8bef\u65f6\u62d2\u7edd\u8be5 Promise\u3002\n */\nexport function destroyAll(window_id?: number): Promise<void>;\n")),(0,a.kt)("h2",{id:"nivaapitraylist"},"Niva.api.tray.list"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * \u83b7\u53d6\u6307\u5b9a\u7a97\u53e3\u5f53\u524d\u5b58\u5728\u7684\u6240\u6709\u6258\u76d8\u56fe\u6807 ID\u3002\n * @param window_id \u8981\u83b7\u53d6\u6258\u76d8\u56fe\u6807 ID \u7684\u7a97\u53e3 ID\uff0c\u9ed8\u8ba4\u4e3a\u5f53\u524d\u6d3b\u52a8\u7a97\u53e3 ID\u3002\n * @returns \u4e00\u4e2a Promise\uff0c\u5728\u83b7\u53d6\u6210\u529f\u65f6\u89e3\u6790\u8be5 Promise\uff0c\u6216\u5728\u53d1\u751f\u9519\u8bef\u65f6\u62d2\u7edd\u8be5 Promise\u3002\u6210\u529f\u65f6\u8fd4\u56de\u6258\u76d8\u56fe\u6807 ID \u7684\u6570\u7ec4\u3002\n */\nexport function list(window_id?: number): Promise<number[]>;\n")),(0,a.kt)("h2",{id:"nivaapitrayupdate"},"Niva.api.tray.update"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"li"},"NivaTrayUpdateOptions")," \u8be6\u89c1 ",(0,a.kt)("a",{parentName:"li",href:"/docs/options/tray"},"\u6258\u76d8\u9009\u9879"),"\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * \u66f4\u65b0\u6307\u5b9a\u6258\u76d8\u56fe\u6807\u7684\u914d\u7f6e\u9879\u3002\n * @param id \u8981\u66f4\u65b0\u7684\u6258\u76d8\u56fe\u6807 ID\u3002\n * @param options \u65b0\u7684\u6258\u76d8\u56fe\u6807\u914d\u7f6e\u9879\u3002\n * @param window_id \u8981\u66f4\u65b0\u6258\u76d8\u56fe\u6807\u7684\u7a97\u53e3 ID\uff0c\u9ed8\u8ba4\u4e3a\u5f53\u524d\u6d3b\u52a8\u7a97\u53e3 ID\u3002\n * @returns \u4e00\u4e2a Promise\uff0c\u5728\u66f4\u65b0\u6210\u529f\u65f6\u89e3\u6790\u8be5 Promise\uff0c\u6216\u5728\u53d1\u751f\u9519\u8bef\u65f6\u62d2\u7edd\u8be5 Promise\u3002\n */\nexport function update(\n  id: number,\n  options: NivaTrayUpdateOptions,\n  window_id?: number\n): Promise<void>;\n")))}d.isMDXComponent=!0}}]);