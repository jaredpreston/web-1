(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{154:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(9),o=(r(0),r(162)),c={id:"upgrading",title:"Software Updates"},i={id:"ecosystem/upgrading",title:"Software Updates",description:"> Running security-critical open source technology in a self-service format",source:"@site/docs/ecosystem/upgrading.md",permalink:"/docs/ecosystem/upgrading",editUrl:"https://github.com/ory/docs/edit/master/docs/ecosystem/upgrading.md",lastUpdatedBy:"hackerman",lastUpdatedAt:1558105892,sidebar:"docs",previous:{title:"Logs and Audit Trails",permalink:"/docs/ecosystem/logging"},next:{title:"API Design",permalink:"/docs/ecosystem/api-design"}},s=[],u={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Running security-critical open source technology in a self-service format\nrequires vigilance. We make your life easier by announcing important software\nupdates via the\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://ory.us10.list-manage.com/subscribe?u=ffb1a878e4ec6c0ed312a3480&id=f605a41b53"}),"ORY Security Newsletter"),".\nNever miss an update and\n",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://ory.us10.list-manage.com/subscribe?u=ffb1a878e4ec6c0ed312a3480&id=f605a41b53"}),"sign up now to important release updates!")))),Object(o.b)("p",null,"Good software improves over time. If it wouldn't, you shouldn't use it.\nUnfortunately, some of these improvements have breaking changes. We know that\nbreaking changes are annoying so we want to make upgrading as painless as\npossible."),Object(o.b)("p",null,"We document detailed changelogs and upgrade guides for this very reason:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ORY Hydra:\n",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/hydra/blob/master/UPGRADE.md"}),"upgrade guide"),",\n",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/hydra/blob/master/CHANGELOG.md"}),"changelog")),Object(o.b)("li",{parentName:"ul"},"ORY Oathkeeper:\n",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/blob/master/UPGRADE.md"}),"upgrade guide"),",\n",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/blob/master/CHANGELOG.md"}),"changelog")),Object(o.b)("li",{parentName:"ul"},"ORY Keto: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/keto/blob/master/UPGRADE.md"}),"upgrade guide"),",\n",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/keto/blob/master/CHANGELOG.md"}),"changelog"))),Object(o.b)("p",null,"Before upgrading to a newer version, please make sure to check with these\ndocuments first."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"If you have not already subscribed to our release announcements,\n",Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"http://eepurl.com/di390P"}),"subscribe now"),"!")," We announce important releases\n(e.g. security releases) in this newsletter."))}p.isMDXComponent=!0},162:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=p(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||l[m]||o;return r?a.a.createElement(d,i({ref:t},u,{components:r})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);