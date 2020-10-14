(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var i=n(2),r=n(6),o=(n(0),n(411)),s={id:"kratos-identities-delete",title:"kratos identities delete",description:"kratos identities delete Delete identities by ID"},a={unversionedId:"cli/kratos-identities-delete",id:"version-v0.5/cli/kratos-identities-delete",isDocsHomePage:!1,title:"kratos identities delete",description:"kratos identities delete Delete identities by ID",source:"@site/versioned_docs/version-v0.5/cli/kratos-identities-delete.md",slug:"/cli/kratos-identities-delete",permalink:"/kratos/docs/cli/kratos-identities-delete",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/cli/kratos-identities-delete.md",version:"v0.5",sidebar:"version-v0.5/docs",previous:{title:"kratos identities",permalink:"/kratos/docs/cli/kratos-identities"},next:{title:"kratos identities get",permalink:"/kratos/docs/cli/kratos-identities-get"}},c=[{value:"kratos identities delete",id:"kratos-identities-delete",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"kratos-identities-delete"},"kratos identities delete"),Object(o.b)("p",null,"Delete identities by ID"),Object(o.b)("h3",{id:"synopsis"},"Synopsis"),Object(o.b)("p",null,"This command deletes one or more identities by ID. To delete an identity by some selector, e.g. the recovery email address, use the list command in combination with jq."),Object(o.b)("p",null,"We have to admit, this is not easy if you don't speak jq fluently. What about opening an issue and telling us what predefined selectors you want to have? ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ory/kratos/issues/new/choose"}),"https://github.com/ory/kratos/issues/new/choose")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"kratos identities delete <id-0 [id-1 ...]> [flags]\n")),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'To delete the identity with the recovery email address "foo@bar.com", run:\n\n    $ kratos identities delete $(kratos identities list --format json | jq -r \'map(select(.recovery_addresses[].value == "foo@bar.com")) | .[].id\')\n')),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"  -h, --help   help for delete\n")),Object(o.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"  -e, --endpoint string   The URL of ORY Kratos' Admin API. Alternatively set using the KRATOS_ADMIN_URL environmental variable.\n  -f, --format string     Set the output format. One of table, json, and json-pretty.\n  -q, --quiet             Prints only IDs, one per line. Takes precedence over --format.\n")),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"kratos-identities"}),"kratos identities")," - Tools to interact with remote identities")))}d.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=i,m=p["".concat(s,".").concat(b)]||p[b]||u[b]||o;return n?r.a.createElement(m,a(a({ref:t},l),{},{components:n})):r.a.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);