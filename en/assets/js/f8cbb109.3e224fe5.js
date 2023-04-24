"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),y=o,m=u["".concat(c,".").concat(y)]||u[y]||f[y]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:4},a="\u7cfb\u7edf\u6258\u76d8\u56fe\u6807\u9009\u9879",p={unversionedId:"options/tray",id:"options/tray",title:"\u7cfb\u7edf\u6258\u76d8\u56fe\u6807\u9009\u9879",description:"* \u5176\u4e2d\u83dc\u5355\u9009\u9879 MenuOptions \u8be6\u89c1 \u83dc\u5355\u9009\u9879",source:"@site/docs/options/tray.md",sourceDirName:"options",slug:"/options/tray",permalink:"/niva/en/docs/options/tray",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docSidebar",previous:{title:"\u7a97\u53e3\u83dc\u5355\u9009\u9879",permalink:"/niva/en/docs/options/menu"},next:{title:"\u5168\u5c40\u5feb\u6377\u952e\u9009\u9879",permalink:"/niva/en/docs/options/shortcut"}},c={},s=[],l={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7cfb\u7edf\u6258\u76d8\u56fe\u6807\u9009\u9879"},"\u7cfb\u7edf\u6258\u76d8\u56fe\u6807\u9009\u9879"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5176\u4e2d\u83dc\u5355\u9009\u9879 ",(0,o.kt)("inlineCode",{parentName:"li"},"MenuOptions")," \u8be6\u89c1 ",(0,o.kt)("a",{parentName:"li",href:"/docs/options/menu"},"\u83dc\u5355\u9009\u9879"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// NivaTray \u7684\u9009\u9879\u3002\ninterface NivaTrayOptions {\n  icon: string;         // \u6258\u76d8\u83dc\u5355\u7684\u56fe\u6807\uff0c\u4ec5\u652f\u6301 png\n  title?: string;       // \u6258\u76d8\u83dc\u5355\u7684\u6807\u9898\n  tooltip?: string;     // \u6258\u76d8\u83dc\u5355\u7684\u63d0\u793a\u4fe1\u606f\n  menu?: MenuOptions;   // \u6258\u76d8\u83dc\u5355\u7684\u83dc\u5355\u9009\u9879\n}\n\n// NivaTray \u7684\u66f4\u65b0\u9009\u9879\u3002\ninterface NivaTrayUpdateOptions {\n  icon?: string;        // \u66f4\u65b0\u6258\u76d8\u83dc\u5355\u7684\u56fe\u6807\uff0c\u4ec5\u652f\u6301 png\n  title?: string;       // \u66f4\u65b0\u6258\u76d8\u83dc\u5355\u7684\u6807\u9898\n  tooltip?: string;     // \u66f4\u65b0\u6258\u76d8\u83dc\u5355\u7684\u63d0\u793a\u4fe1\u606f\n  menu?: MenuOptions;   // \u66f4\u65b0\u6258\u76d8\u83dc\u5355\u7684\u83dc\u5355\u9009\u9879\n}\n")))}f.isMDXComponent=!0}}]);