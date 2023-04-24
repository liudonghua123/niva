"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[671],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>N});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=p(n),s=a,N=d["".concat(u,".").concat(s)]||d[s]||m[s]||l;return n?r.createElement(N,i(i({ref:e},c),{},{components:n})):r.createElement(N,i({ref:e},c))}));function N(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[d]="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9881:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1},i="\u7b80\u4ecb",o={unversionedId:"intro",id:"intro",title:"\u7b80\u4ecb",description:"\u4ec0\u4e48\u662f Niva\uff1f",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/niva/en/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",next:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/niva/en/docs/category/\u5feb\u901f\u4e0a\u624b"}},u={},p=[{value:"\u4ec0\u4e48\u662f Niva\uff1f",id:"\u4ec0\u4e48\u662f-niva",level:2},{value:"Niva \u5f00\u53d1\u8005\u5de5\u5177",id:"niva-\u5f00\u53d1\u8005\u5de5\u5177",level:2},{value:"Niva \u4e0e Tauri \u548c Electron \u7684\u5f02\u540c",id:"niva-\u4e0e-tauri-\u548c-electron-\u7684\u5f02\u540c",level:2}],c={toc:p},d="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f-niva"},"\u4ec0\u4e48\u662f Niva\uff1f"),(0,a.kt)("p",null,"Niva \u662f\u4e00\u4e2a\u8de8\u5e73\u53f0\uff08\u652f\u6301 Windows \u548c MacOS\uff09\u7684\u684c\u9762\u5e94\u7528\u5f00\u53d1\u6846\u67b6\uff0c\u4f7f\u7528\u524d\u7aef\u6280\u672f\u5f00\u53d1\uff0c\u53ef\u7528\u4e8e\u6784\u5efa\u8f7b\u91cf\u7ea7\u7684\u684c\u9762\u5e94\u7528\u3002\u5b83\u57fa\u4e8e\u7cfb\u7edf Webview \u800c\u975e Chromium\uff0c\u4f53\u79ef\u4ec5\u4e3a 3MB ~ 4MB\uff0c\u4e0d\u9700\u8981 Node.js \u73af\u5883\uff0c\u76f4\u63a5\u63d0\u4f9b\u7cfb\u7edf API \u8fdb\u884c\u64cd\u4f5c\u3002Niva \u517c\u5bb9 React / Vue \u7b49\u4e3b\u6d41\u6846\u67b6\uff0c\u5bf9\u4e8e Vue \u548c React \u9879\u76ee\u53ef\u4ee5\u76f4\u63a5\u4e00\u952e\u5bfc\u5165\u3002"),(0,a.kt)("h2",{id:"niva-\u5f00\u53d1\u8005\u5de5\u5177"},"Niva \u5f00\u53d1\u8005\u5de5\u5177"),(0,a.kt)("p",null,"Niva \u5f00\u53d1\u8005\u5de5\u5177\u662f\u4e00\u4e2a\u56fe\u5f62\u5316\u754c\u9762\u5f00\u53d1\u8005\u5de5\u5177\uff0c\u63d0\u4f9b\u56fe\u5f62\u5316\u754c\u9762\u8fdb\u884c\u5bf9 Niva \u9879\u76ee\u8fdb\u884c\u6784\u5efa\u6216\u8005\u8c03\u8bd5\u7684\u5f00\u53d1\u5de5\u5177\u3002"),(0,a.kt)("h2",{id:"niva-\u4e0e-tauri-\u548c-electron-\u7684\u5f02\u540c"},"Niva \u4e0e Tauri \u548c Electron \u7684\u5f02\u540c"),(0,a.kt)("p",null,"Niva \u4e0e Tauri \u548c Electron \u5b9a\u4f4d\u4e0d\u540c\u3002\u5b83\u662f Tauri \u548c Electron \u7684\u8f7b\u91cf\u7ea7\u66ff\u4ee3\u65b9\u6848\uff0c\u6bd4\u5b83\u4eec\u66f4\u52a0\u7b80\u5355\u6613\u7528\u4f46\u540c\u65f6\u727a\u7272\u4e86\u90e8\u5206\u751f\u6001\u548c\u80fd\u529b\u3002"),(0,a.kt)("p",null,"\u4e0b\u8868\u5217\u51fa\u4e86 Niva\u3001Tauri \u548c Electron \u7684\u4e3b\u8981\u533a\u522b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Niva"),(0,a.kt)("th",{parentName:"tr",align:null},"Tauri"),(0,a.kt)("th",{parentName:"tr",align:null},"Electron"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u4f53\u79ef"),(0,a.kt)("td",{parentName:"tr",align:null},"3MB"),(0,a.kt)("td",{parentName:"tr",align:null},"6MB+"),(0,a.kt)("td",{parentName:"tr",align:null},"85MB+")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u7cfb\u7edf"),(0,a.kt)("td",{parentName:"tr",align:null},"Windows10+/MacOS"),(0,a.kt)("td",{parentName:"tr",align:null},"Windows10+/MacOS/Linux"),(0,a.kt)("td",{parentName:"tr",align:null},"Windows/MacOS/Linux")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"APP \u540e\u7aef"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e0\uff0c\u4f46\u53ef\u7528\u9690\u85cf window \u4ee3\u66ff"),(0,a.kt)("td",{parentName:"tr",align:null},"Rust"),(0,a.kt)("td",{parentName:"tr",align:null},"Node.js")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Webview"),(0,a.kt)("td",{parentName:"tr",align:null},"System"),(0,a.kt)("td",{parentName:"tr",align:null},"System"),(0,a.kt)("td",{parentName:"tr",align:null},"Chromium")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u751f\u6001"),(0,a.kt)("td",{parentName:"tr",align:null},"\u524d\u7aef"),(0,a.kt)("td",{parentName:"tr",align:null},"Rust + \u524d\u7aef"),(0,a.kt)("td",{parentName:"tr",align:null},"Node.js + \u524d\u7aef")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u4e0a\u624b\u96be\u5ea6"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7b80\u5355"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6781\u96be"),(0,a.kt)("td",{parentName:"tr",align:null},"\u56f0\u96be")))),(0,a.kt)("p",null,"Niva \u4f7f\u7528\u4e86 Tauri \u7684\u8de8\u7aef\u7a97\u53e3\u7ba1\u7406\u5e93 tao \u548c\u8de8\u7aef Webview \u5e93 wry\uff0c\u6240\u4ee5\u5728\u7a97\u53e3\u548c Webview \u4e0a\u9762 Niva \u548c Tauri \u5177\u5907\u76f8\u540c\u7684\u80fd\u529b\uff0c\u4ee5\u53ca\u76f8\u540c\u6570\u91cf\u7ea7\u7684\u4f53\u79ef\u3002\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0cNiva \u76f4\u63a5\u4e3a Webview \u63d0\u4f9b\u901a\u7528\u7684 API\uff0c\u65e0\u9700\u7f16\u5199 Rust \u4ee3\u7801\uff0c\u5bf9\u524d\u7aef\u5f00\u53d1\u8005\u66f4\u52a0\u53cb\u597d\u3002\u800c\u4f7f\u7528 Electron \u5219\u9700\u8981 Node.js \u548c Chromium \u7684\u4f9d\u8d56\uff0c\u4f53\u79ef\u4e5f\u66f4\u5927\u3002"),(0,a.kt)("p",null,"\u4e0e Electron \u76f8\u6bd4\uff0cNiva \u4e0d\u4f9d\u8d56 Node.js \u548c Chromium\uff0c\u56e0\u6b64\u80fd\u591f\u5b9e\u73b0\u66f4\u5c0f\u7684\u4f53\u79ef\uff0c\u5bf9\u524d\u7aef\u5f00\u53d1\u8005\u66f4\u52a0\u53cb\u597d\u3002Niva \u63d0\u4f9b\u4e86\u56fe\u5f62\u5316\u7684\u5f00\u53d1\u8005\u5de5\u5177\u548c\u7b80\u5355\u6613\u7528\u7684\u914d\u7f6e\uff0c\u80fd\u591f\u5feb\u901f\u5c06\u524d\u7aef\u9879\u76ee\u8fc1\u79fb\u81f3 Niva \u7b49\u684c\u9762\u5e94\u7528\u3002"),(0,a.kt)("p",null,"\u603b\u4e4b\uff0cNiva \u4e13\u6ce8\u4e8e\u63d0\u4f9b\u66f4\u5c0f\u7684\u4f53\u79ef\u548c\u66f4\u52a0\u4fbf\u6377\u7684\u5f00\u53d1\u4f53\u9a8c\uff0c\u9002\u5408\u9700\u8981\u5feb\u901f\u6784\u5efa\u8f7b\u91cf\u7ea7\u684c\u9762\u5e94\u7528\u7684\u524d\u7aef\u5f00\u53d1\u8005\u4f7f\u7528\u3002"))}m.isMDXComponent=!0}}]);