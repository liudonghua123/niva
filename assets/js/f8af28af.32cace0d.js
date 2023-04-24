"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[943],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8479:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:3},a="\u7a97\u53e3\u83dc\u5355\u9009\u9879",l={unversionedId:"options/menu",id:"options/menu",title:"\u7a97\u53e3\u83dc\u5355\u9009\u9879",description:"",source:"@site/docs/options/menu.md",sourceDirName:"options",slug:"/options/menu",permalink:"/niva/docs/options/menu",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docSidebar",previous:{title:"\u7a97\u53e3\u9009\u9879",permalink:"/niva/docs/options/window"},next:{title:"\u7cfb\u7edf\u6258\u76d8\u56fe\u6807\u9009\u9879",permalink:"/niva/docs/options/tray"}},c={},p=[],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7a97\u53e3\u83dc\u5355\u9009\u9879"},"\u7a97\u53e3\u83dc\u5355\u9009\u9879"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// \u7cfb\u7edf\u539f\u751f\u83dc\u5355\u9879\u6807\u7b7e\u679a\u4e3e\u7c7b\u578b\u3002\nenum NativeLabel {\n  Hide,              // \u663e\u793a "Hide"\n  Services,          // \u663e\u793a "Services"\n  HideOthers,        // \u663e\u793a "Hide Others"\n  ShowAll,           // \u663e\u793a "Show All"\n  CloseWindow,       // \u663e\u793a "Close Window"\n  Quit,              // \u663e\u793a "Quit"\n  Copy,              // \u663e\u793a "Copy"\n  Cut,               // \u663e\u793a "Cut"\n  Undo,              // \u663e\u793a "Undo"\n  Redo,              // \u663e\u793a "Redo"\n  SelectAll,         // \u663e\u793a "Select All"\n  Paste,             // \u663e\u793a "Paste"\n  EnterFullScreen,   // \u663e\u793a "Enter Full Screen"\n  Minimize,          // \u663e\u793a "Minimize"\n  Zoom,              // \u663e\u793a "Zoom"\n  Separator,         // \u8868\u793a\u4e00\u4e2a\u5206\u9694\u7ebf\n}\n\n// \u83dc\u5355\u9879\u9009\u9879\u679a\u4e3e\u7c7b\u578b\u3002\ntype MenuItemOption =\n  | { type: "native"; label: NativeLabel }  // \u672c\u5730\u83dc\u5355\u9009\u9879\n  | {\n      type: "item";\n      id: number;\n      label: string;                  // \u663e\u793a\u7684\u6587\u672c\n      enabled?: boolean;              // \u662f\u5426\u542f\u7528\n      selected?: boolean;             // \u662f\u5426\u9009\u4e2d\n      icon?: string;                  // \u56fe\u6807\u56fe\u7247\uff0c\u4ec5\u652f\u6301 png\n      accelerator?: string;           // \u5feb\u6377\u952e\n    }                                // \u81ea\u5b9a\u4e49\u83dc\u5355\u9009\u9879\n  | { type: "menu"; label: string; enabled?: boolean; children: MenuOptions }; // \u5b50\u83dc\u5355\u9009\u9879\n\n// \u83dc\u5355\u9009\u9879\u5217\u8868\u3002\ntype MenuOptions = MenuItemOption[];\n')))}d.isMDXComponent=!0}}]);