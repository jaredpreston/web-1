(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{108:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var c=a(0),r=a.n(c);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,c,r=function(e,t){if(null==e)return{};var a,c,r={},i=Object.keys(e);for(c=0;c<i.length;c++)a=i[c],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)a=i[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),l=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,c=e.mdxType,i=e.originalType,b=e.parentName,o=n(e,["components","mdxType","originalType","parentName"]),p=l(a),m=c,u=p["".concat(b,".").concat(m)]||p[m]||h[m]||i;return a?r.a.createElement(u,s(s({ref:t},o),{},{components:a})):r.a.createElement(u,s({ref:t},o))}));function u(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=a.length,b=new Array(i);b[0]=m;var s={};for(var n in t)hasOwnProperty.call(t,n)&&(s[n]=t[n]);s.originalType=e,s.mdxType="string"==typeof e?e:c,b[1]=s;for(var o=2;o<i;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return n})),a.d(t,"default",(function(){return l}));var c=a(2),r=a(6),i=(a(0),a(108)),b={id:"milestones",title:"Milestones and Roadmap"},s={unversionedId:"milestones",id:"milestones",isDocsHomePage:!1,title:"Milestones and Roadmap",description:"v0.39.0",source:"@site/docs/milestones.md",permalink:"/oathkeeper/docs/next/milestones",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/docs/milestones.md",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1597999806,sidebar:"docs",previous:{title:"Overview",permalink:"/oathkeeper/docs/next/sdk/index"}},n=[{value:"v0.39.0",id:"v0390",children:[{value:"Bug",id:"bug",children:[]},{value:"Feat",id:"feat",children:[]},{value:"Help wanted",id:"help-wanted",children:[]}]},{value:"v1.0.0",id:"v100",children:[{value:"Bug",id:"bug-1",children:[]},{value:"Feat",id:"feat-1",children:[]},{value:"Rfc",id:"rfc",children:[]}]}],o={rightToc:n};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(c.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"v0390"},Object(i.b)("a",Object(c.a)({parentName:"h2"},{href:"https://github.com/ory/oathkeeper/milestone/7"}),"v0.39.0")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"This milestone does not have a description.")),Object(i.b)("h3",{id:"bug"},Object(i.b)("a",Object(c.a)({parentName:"h3"},{href:"https://github.com/ory/oathkeeper/labels/bug"}),"Bug")),Object(i.b)("p",null,"Something is not working."),Object(i.b)("h4",{id:"issues"},"Issues"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Integrate with Traefik, Nginx, Ambassador, Envoy\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/263"}),"oathkeeper#263"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Rule mutator template changes not reloaded after file update\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/272"}),"oathkeeper#272"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Log specified http request headers\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/361"}),"oathkeeper#361"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Timeout in oauth2_client_credentials when using self-signed certificates\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/368"}),"oathkeeper#368"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","oauth2_introspection not parsing single string aud valie\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/491"}),"oathkeeper#491"),")")),Object(i.b)("h3",{id:"feat"},Object(i.b)("a",Object(c.a)({parentName:"h3"},{href:"https://github.com/ory/oathkeeper/labels/feat"}),"Feat")),Object(i.b)("p",null,"New feature or request."),Object(i.b)("h4",{id:"issues-1"},"Issues"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Implement GRPC response handler in Decisions API\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/134"}),"oathkeeper#134"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Pass query parameters to the hydrator\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/339"}),"oathkeeper#339"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Switch to go-jose key generation lib\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/419"}),"oathkeeper#419"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Oathkeeper behind ssl terminating balancer\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/153"}),"oathkeeper#153"),")")),Object(i.b)("h4",{id:"pull-requests"},"Pull Requests"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","refactor: refactor decisions API and add traefik (#486)\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/pull/487"}),"oathkeeper#487"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/aeneasr"}),"@hackerman"))),Object(i.b)("h3",{id:"help-wanted"},Object(i.b)("a",Object(c.a)({parentName:"h3"},{href:"https://github.com/ory/oathkeeper/labels/help%20wanted"}),"Help wanted")),Object(i.b)("p",null,"We are looking for help on this one."),Object(i.b)("h4",{id:"issues-2"},"Issues"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Implement GRPC response handler in Decisions API\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/134"}),"oathkeeper#134"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Integrate with Traefik, Nginx, Ambassador, Envoy\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/263"}),"oathkeeper#263"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Rule mutator template changes not reloaded after file update\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/272"}),"oathkeeper#272"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Pass query parameters to the hydrator\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/339"}),"oathkeeper#339"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Log specified http request headers\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/361"}),"oathkeeper#361"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Oathkeeper behind ssl terminating balancer\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/153"}),"oathkeeper#153"),")")),Object(i.b)("h2",{id:"v100"},Object(i.b)("a",Object(c.a)({parentName:"h2"},{href:"https://github.com/ory/oathkeeper/milestone/2"}),"v1.0.0")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"This milestone does not have a description.")),Object(i.b)("h3",{id:"bug-1"},Object(i.b)("a",Object(c.a)({parentName:"h3"},{href:"https://github.com/ory/oathkeeper/labels/bug"}),"Bug")),Object(i.b)("p",null,"Something is not working."),Object(i.b)("h4",{id:"issues-3"},"Issues"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Adopt new Keto SDK\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/172"}),"oathkeeper#172"),")")),Object(i.b)("h3",{id:"feat-1"},Object(i.b)("a",Object(c.a)({parentName:"h3"},{href:"https://github.com/ory/oathkeeper/labels/feat"}),"Feat")),Object(i.b)("p",null,"New feature or request."),Object(i.b)("h4",{id:"issues-4"},"Issues"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","TLS Termination 'X-Forwarded-Proto'\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/95"}),"oathkeeper#95"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Provide an endpoint that allows to fetch configuration information\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/131"}),"oathkeeper#131"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/aeneasr"}),"@hackerman"),",\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Adopt new Keto SDK\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/172"}),"oathkeeper#172"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Add file watcher for config file\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/215"}),"oathkeeper#215"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/aeneasr"}),"@hackerman")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Add file watcher for access rules\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/216"}),"oathkeeper#216"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/aeneasr"}),"@hackerman"))),Object(i.b)("h3",{id:"rfc"},Object(i.b)("a",Object(c.a)({parentName:"h3"},{href:"https://github.com/ory/oathkeeper/labels/rfc"}),"Rfc")),Object(i.b)("p",null,"A request for comments to discuss and share ideas."),Object(i.b)("h4",{id:"issues-5"},"Issues"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Customizable on unauthenticated, forbidden, route not found, and other\nerror handlers\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/issues/284"}),"oathkeeper#284"),")")))}l.isMDXComponent=!0}}]);