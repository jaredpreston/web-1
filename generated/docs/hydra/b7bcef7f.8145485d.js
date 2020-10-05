(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{286:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(2),i=n(6),a=(n(0),n(393)),c={id:"hydra-clients-create",title:"hydra clients create",description:"hydra clients create Create a new OAuth 2.0 Client"},o={unversionedId:"cli/hydra-clients-create",id:"cli/hydra-clients-create",isDocsHomePage:!1,title:"hydra clients create",description:"hydra clients create Create a new OAuth 2.0 Client",source:"@site/docs/cli/hydra-clients-create.md",slug:"/cli/hydra-clients-create",permalink:"/hydra/docs/next/cli/hydra-clients-create",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/cli/hydra-clients-create.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601727603,sidebar:"docs",previous:{title:"hydra clients",permalink:"/hydra/docs/next/cli/hydra-clients"},next:{title:"hydra clients delete",permalink:"/hydra/docs/next/cli/hydra-clients-delete"}},s=[{value:"hydra clients create",id:"hydra-clients-create",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={rightToc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hydra-clients-create"},"hydra clients create"),Object(a.b)("p",null,"Create a new OAuth 2.0 Client"),Object(a.b)("h3",{id:"synopsis"},"Synopsis"),Object(a.b)("p",null,"This command creates an OAuth 2.0 Client which can be used to perform various\nOAuth 2.0 Flows like the Authorize Code, Implicit, Refresh flow."),Object(a.b)("p",null,"ORY Hydra implements the OpenID Connect Dynamic Client registration\nspecification. Most flags are supported by this command as well."),Object(a.b)("p",null,'Example: hydra clients create -n "my app" -c http://localhost/cb -g\nauthorization_code -r code -a core,foobar'),Object(a.b)("p",null,'To encrypt auto generated client secret, use "--pgp-key", "--pgp-key-url" or\n"--keybase" flag, for example: hydra clients create -n "my app" -g\nclient_credentials -r token -a core,foobar --keybase keybase_username'),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"hydra clients create [flags]\n")),Object(a.b)("h3",{id:"options"},"Options"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'      --allowed-cors-origins strings        The list of URLs allowed to make CORS requests. Requires CORS_ENABLED.\n      --audience strings                    The audience this client is allowed to request\n  -c, --callbacks strings                   REQUIRED list of allowed callback URLs\n      --client-uri string                   A URL string of a web page providing information about the client\n  -g, --grant-types strings                 A list of allowed grant types (default [authorization_code])\n  -h, --help                                help for create\n      --id string                           Give the client this id\n      --jwks-uri string                     Define the URL where the JSON Web Key Set should be fetched from when performing the "private_key_jwt" client authentication method\n      --keybase string                      Keybase username for encrypting client secret\n      --logo-uri string                     A URL string that references a logo for the client\n  -n, --name string                         The client\'s name\n      --pgp-key string                      Base64 encoded PGP encryption key for encrypting client secret\n      --pgp-key-url string                  PGP encryption key URL for encrypting client secret\n      --policy-uri string                   A URL string that points to a human-readable privacy policy document that describes how the deployment organization collects, uses, retains, and discloses personal data\n      --post-logout-callbacks strings       List of allowed URLs to be redirected to after a logout\n  -r, --response-types strings              A list of allowed response types (default [code])\n  -a, --scope strings                       The scope the client is allowed to request\n      --secret string                       Provide the client\'s secret\n      --subject-type string                 A identifier algorithm. Valid values are "public" and "pairwise" (default "public")\n      --token-endpoint-auth-method string   Define which authentication method the client may use at the Token Endpoint. Valid values are "client_secret_post", "client_secret_basic", "private_key_jwt", and "none" (default "client_secret_basic")\n      --tos-uri string                      A URL string that points to a human-readable terms of service document for the client that describes a contractual relationship between the end-user and the client that the end-user accepts when authorizing the client\n')),Object(a.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'      --access-token string    Set an access token to be used in the Authorization header, defaults to environment variable OAUTH2_ACCESS_TOKEN\n      --config string          Config file (default is $HOME/.hydra.yaml)\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_ADMIN_URL. A unix socket can be set in the form unix:///path/to/socket\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   Fake tls termination by adding "X-Forwarded-Proto: https" to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unkown certificate authorities\n')),Object(a.b)("h3",{id:"see-also"},"SEE ALSO"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"hydra-clients"}),"hydra clients")," - Manage OAuth 2.0 Clients")))}d.isMDXComponent=!0},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,y=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return n?i.a.createElement(y,o(o({ref:t},l),{},{components:n})):i.a.createElement(y,o({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);