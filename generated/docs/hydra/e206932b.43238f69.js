(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{420:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(485)),a={id:"hydra-token-user",title:"hydra token user",description:"hydra token user An exemplary OAuth 2.0 Client performing the OAuth 2.0 Authorize Code Flow"},s={unversionedId:"cli/hydra-token-user",id:"version-v1.9/cli/hydra-token-user",isDocsHomePage:!1,title:"hydra token user",description:"hydra token user An exemplary OAuth 2.0 Client performing the OAuth 2.0 Authorize Code Flow",source:"@site/versioned_docs/version-v1.9/cli/hydra-token-user.md",slug:"/cli/hydra-token-user",permalink:"/hydra/docs/cli/hydra-token-user",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/cli/hydra-token-user.md",version:"v1.9",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607427290,sidebar:"version-v1.9/docs",previous:{title:"hydra token revoke",permalink:"/hydra/docs/cli/hydra-token-revoke"},next:{title:"hydra version",permalink:"/hydra/docs/cli/hydra-version"}},c=[{value:"hydra token user",id:"hydra-token-user",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],u={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hydra-token-user"},"hydra token user"),Object(i.b)("p",null,"An exemplary OAuth 2.0 Client performing the OAuth 2.0 Authorize Code Flow"),Object(i.b)("h3",{id:"synopsis"},"Synopsis"),Object(i.b)("p",null,"Starts an exemplary web server that acts as an OAuth 2.0 Client performing the\nAuthorize Code Flow. This command will help you to see if ORY Hydra has been\nconfigured properly."),Object(i.b)("p",null,"This command must not be used for anything else than manual testing or demo\npurposes. The server will terminate on error and success."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"hydra token user [flags]\n")),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"      --audience strings       Request a specific OAuth 2.0 Access Token Audience\n      --auth-url endpoint      Usually it is enough to specify the endpoint flag, but if you want to force the authorization url, use this flag\n      --client-id string       Use the provided OAuth 2.0 Client ID, defaults to environment variable OAUTH2_CLIENT_ID\n      --client-secret string   Use the provided OAuth 2.0 Client Secret, defaults to environment variable OAUTH2_CLIENT_SECRET\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_URL\n  -h, --help                   help for user\n      --https                  Sets up HTTPS for the endpoint using a self-signed certificate which is re-generated every time you start this command\n      --max-age int            Set the OpenID Connect max_age parameter\n      --no-open                Do not open the browser window automatically\n  -p, --port int               The port on which the server should run (default 4446)\n      --prompt strings         Set the OpenID Connect prompt parameter\n      --redirect string        Force a redirect url\n      --scope strings          Request OAuth2 scope (default [offline,openid])\n      --token-url endpoint     Usually it is enough to specify the endpoint flag, but if you want to force the token url, use this flag\n")),Object(i.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   fake tls termination by adding "X-Forwarded-Proto: https" to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unknown certificate authorities\n')),Object(i.b)("h3",{id:"see-also"},"SEE ALSO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"hydra-token"}),"hydra token")," - Issue and Manage OAuth2 tokens")))}l.isMDXComponent=!0},485:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,f=d["".concat(a,".").concat(h)]||d[h]||p[h]||i;return n?o.a.createElement(f,s(s({ref:t},u),{},{components:n})):o.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);