(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(393)),i=(n(394),{id:"oauth2-clients",title:"Creating OAuth 2.0 Clients"}),c={unversionedId:"guides/oauth2-clients",id:"version-v1.6/guides/oauth2-clients",isDocsHomePage:!1,title:"Creating OAuth 2.0 Clients",description:"You can manage OAuth 2.0 clients using the cli or the HTTP REST API:",source:"@site/versioned_docs/version-v1.6/guides/oauth2-clients.mdx",slug:"/guides/oauth2-clients",permalink:"/hydra/docs/v1.6/guides/oauth2-clients",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.6/guides/oauth2-clients.mdx",version:"v1.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1595248858,sidebar:"version-v1.6/docs",previous:{title:"Advanced OAuth2 and OpenID Connect Flows",permalink:"/hydra/docs/v1.6/advanced"},next:{title:"Using Common OAuth2 and OpenID Connect Flows",permalink:"/hydra/docs/v1.6/guides/common-oauth2-openid-connect-flows"}},l=[{value:"Authorize Code Flow with Refresh Token",id:"authorize-code-flow-with-refresh-token",children:[]},{value:"Client Credentials Flow",id:"client-credentials-flow",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can manage ",Object(a.b)("em",{parentName:"p"},"OAuth 2.0 clients")," using the cli or the HTTP REST API:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"CLI:")," ",Object(a.b)("inlineCode",{parentName:"li"},"hydra help clients")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"REST:")," Read the ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"../reference/api"}),"API Docs"))),Object(a.b)("h2",{id:"authorize-code-flow-with-refresh-token"},"Authorize Code Flow with Refresh Token"),Object(a.b)("p",null,"The following command creates an OAuth 2.0 Client capable of executing the\nAuthorize Code Flow, requesting ID and Refresh Tokens and performing the OAuth\n2.0 Refresh Grant:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"hydra clients create \\\n    --endpoint http://ory-hydra:4445 \\\n    --id client-id \\\n    --secret client-secret \\\n    --grant-types authorization_code,refresh_token \\\n    --response-types code \\\n    --scope openid,offline \\\n    --callbacks http://my-app.com/callback,http://my-other-app.com/callback\n")),Object(a.b)("p",null,"The OAuth 2.0 Client will be allowed to use values ",Object(a.b)("inlineCode",{parentName:"p"},"http://my-app.com/callback"),"\nand ",Object(a.b)("inlineCode",{parentName:"p"},"http://my-other-app.com/callback")," as ",Object(a.b)("inlineCode",{parentName:"p"},"redirect_url"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"It is expected that the OAuth 2.0 Client sends its credentials using HTTP\nBasic Authorization.")),Object(a.b)("p",null,"If you wish to send credentials in the POST Body, add the following flag to the\ncommand above:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"    --token-endpoint-auth-method client_secret_post \\\n")),Object(a.b)("p",null,"The same can be achieved by setting\n",Object(a.b)("inlineCode",{parentName:"p"},'"token_endpoint_auth_method": "client_secret_post"')," in the request body of\n",Object(a.b)("inlineCode",{parentName:"p"},"POST /clients")," and ",Object(a.b)("inlineCode",{parentName:"p"},"PUT /clients/<id>"),"."),Object(a.b)("h2",{id:"client-credentials-flow"},"Client Credentials Flow"),Object(a.b)("p",null,"A client only capable of performing the Client Credentials Flow can be created\nas follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"hydra clients create \\\n    --endpoint http://ory-hydra:4445 \\\n    --id my-client \\\n    --secret secret \\\n    -g client_credentials\n")))}s.isMDXComponent=!0},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,h=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(h,c(c({ref:t},u),{},{components:n})):o.a.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},394:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(395),o=n(396);function a(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,l=a.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},395:function(e,t,n){"use strict";var r=n(0),o=n(19);t.a=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},396:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);