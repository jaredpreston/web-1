(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(9),o=(n(0),n(223)),c={id:"js",title:"JavaScript"},i={id:"sdk/js",title:"JavaScript",description:"The JavaScript SDK is autogenerated and developer experience is not great. We",source:"@site/docs/sdk/js.md",permalink:"/hydra/docs/next/sdk/js",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/sdk/js.md",version:"next",lastUpdatedBy:"hackerman",lastUpdatedAt:1586178985,sidebar:"docs",previous:{title:"Go",permalink:"/hydra/docs/next/sdk/go"},next:{title:"PHP",permalink:"/hydra/docs/next/sdk/php"}},s=[{value:"Configuration",id:"configuration",children:[]},{value:"API Usage",id:"api-usage",children:[]},{value:"API Docs",id:"api-docs",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The JavaScript SDK is autogenerated and developer experience is not great. We\nencourage you to use\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),Object(o.b)("inlineCode",{parentName:"a"},"fetch"))," instead.")),Object(o.b)("p",null,"To install the JavaScript SDK, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install --save @oryd/hydra-client\n")),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("h4",{id:"basic-configuration"},"Basic configuration"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const Hydra = require('@oryd/hydra-client')\n\n// Set this to Hydra's URL\nHydra.ApiClient.instance.basePath = 'http://localhost:4445'\n")),Object(o.b)("h3",{id:"api-usage"},"API Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const hydra = new Hydra.AdminAPI()\n\n// for example, let's fetch all OAuth2 clients\nhydra.listOAuth2Clients((error, data, response) => {\n  if (error) {\n    // a network error occurred.\n    throw error\n  } else if (response.statusCode < 200 || response.statusCode >= 400) {\n    // an application error occurred.\n    throw new Error(\n      'Consent endpoint gave status code ' +\n        response.statusCode +\n        ', but status code 200 was expected.'\n    )\n  }\n\n  console.log(response) // a list of OAuth2 clients.\n})\n")),Object(o.b)("h3",{id:"api-docs"},"API Docs"),Object(o.b)("p",null,"API docs are available\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/master/sdk/js/swagger/README.md"}),"here"),".\nPlease note that those docs are generated and may introduce bugs if code\nexamples are used 1:1. Especially the package name is not correct."))}l.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,f=d["".concat(c,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(f,i(i({ref:t},p),{},{components:n})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);