(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{247:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(485)),i={id:"jwks",title:"JSON Web Key Sets"},c={unversionedId:"jwks",id:"jwks",isDocsHomePage:!1,title:"JSON Web Key Sets",description:"A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that",source:"@site/docs/jwks.md",slug:"/jwks",permalink:"/hydra/docs/next/jwks",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/jwks.md",version:"current",lastUpdatedBy:"Vincent",lastUpdatedAt:1611218342,sidebar:"docs",previous:{title:"Logout Flow",permalink:"/hydra/docs/next/concepts/logout"},next:{title:"Limitations",permalink:"/hydra/docs/next/limitations"}},s=[{value:"Auto-generated JWKs",id:"auto-generated-jwks",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that\nrepresents a cryptographic key and is specified at\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc7517"}),"IETF RFC7517"),". If you've heard of PEM\nfiles..."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"-----BEGIN ENCRYPTED PRIVATE KEY-----\nid: MIIFDjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDg\nMBQGCCqGSIb3DQMHBAgD1kGN4ZslJgSCBMi1xk9jhlPxPc\n9g73NQbtqZwI+9X5OhpSg/2ALxlCCjbqvzgSu8gfFZ4yo+\nA .... MANY LINES LIKE THAT ....\nX0R+meOaudPTBxoSgCCM51poFgaqt4l6VlTN4FRpj+c/Wc\nblK948UAda/bWVmZjXfY4Tztah0CuqlAldOQBzu8TwE7WD\nH0ga/iLNvWYexG7FHLRiq5hTj0g9mUPEbeTXuPtOkTEb/0\nGEs=\n-----END ENCRYPTED PRIVATE KEY-----\n")),Object(o.b)("p",null,"... JWKs are the same, but formatted using JSON:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "keys":\n  [\n   {"kty":"oct",\n    "alg":"A128KW",\n    "k":"GawgguFyGrWKav7AX4VKUg"},\n\n   {"kty":"oct",\n    "k":"AyM1SysPpbyDfgZld3umj1qzKObwVMkoqQ-EstJQLr_T-1qS0gZH75\n  aKtMN3Yj0iPS4hcgUuTwjAzZr1Z9CAow",\n    "kid":"HMAC key used in JWS spec Appendix A.1 example"}\n  ]\n}\n')),Object(o.b)("p",null,"ORY Hydra offers an API for generating and managing JWKs, the\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/hydra/docs/next/reference/api"}),"JSON Web Keys API"),". When using persistent storage\nbackends, the keys are encrypted at rest using AES256-GCM and ",Object(o.b)("em",{parentName:"p"},"the system\nsecret"),". The system secret is generated by default and overridden by the\nenvironment variable ",Object(o.b)("inlineCode",{parentName:"p"},"SYSTEM_SECRET"),"."),Object(o.b)("p",null,"JWKs are well supported amongst all languages. This endpoint helps you managing\ncertificates, private, public and symmetric keys. It is important to never\ntransport keys over insecure channels such as http."),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/hydra/docs/next/reference/api"}),"REST API Documentation")," will give you details on the\nvarious endpoints."),Object(o.b)("h2",{id:"auto-generated-jwks"},"Auto-generated JWKs"),Object(o.b)("p",null,"Hydra generates a couple of JSON Web Keys in order to operate correctly:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"http://localhost:4445/keys/hydra.openid.id-token"),": A RSA public/private key\npair for signing and validating OpenID Connect ID Tokens."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"http://localhost:4445/keys/https-tls"),": A RSA public/private key pair and a\ncertificate for signing HTTP over TLS.")))}l.isMDXComponent=!0},485:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,y=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(y,c(c({ref:t},p),{},{components:n})):a.a.createElement(y,c({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);