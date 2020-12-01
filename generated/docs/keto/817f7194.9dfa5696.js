(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{108:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var c=a(0),b=a.n(c);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,c,b=function(e,t){if(null==e)return{};var a,c,b={},i=Object.keys(e);for(c=0;c<i.length;c++)a=i[c],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)a=i[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var l=b.a.createContext({}),o=function(e){var t=b.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=o(e.components);return b.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},m=b.a.forwardRef((function(e,t){var a=e.components,c=e.mdxType,i=e.originalType,s=e.parentName,l=n(e,["components","mdxType","originalType","parentName"]),p=o(a),m=c,O=p["".concat(s,".").concat(m)]||p[m]||h[m]||i;return a?b.a.createElement(O,r(r({ref:t},l),{},{components:a})):b.a.createElement(O,r({ref:t},l))}));function O(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=a.length,s=new Array(i);s[0]=m;var r={};for(var n in t)hasOwnProperty.call(t,n)&&(r[n]=t[n]);r.originalType=e,r.mdxType="string"==typeof e?e:c,s[1]=r;for(var l=2;l<i;l++)s[l]=a[l];return b.a.createElement.apply(null,s)}return b.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return n})),a.d(t,"default",(function(){return o}));var c=a(3),b=a(7),i=(a(0),a(108)),s={id:"milestones",title:"Milestones and Roadmap"},r={unversionedId:"milestones",id:"milestones",isDocsHomePage:!1,title:"Milestones and Roadmap",description:"Next Gen Keto - fist working version",source:"@site/docs/milestones.md",slug:"/milestones",permalink:"/keto/docs/next/milestones",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/milestones.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1606609275,sidebar:"docs",previous:{title:"Overview",permalink:"/keto/docs/next/sdk/index"}},n=[{value:"Next Gen Keto - fist working version",id:"next-gen-keto---fist-working-version",children:[{value:"Bug",id:"bug",children:[]},{value:"Feat",id:"feat",children:[]},{value:"Blocking",id:"blocking",children:[]},{value:"Rfc",id:"rfc",children:[]}]},{value:"Next Gen Keto - next milestone",id:"next-gen-keto---next-milestone",children:[{value:"Bug",id:"bug-1",children:[]},{value:"Feat",id:"feat-1",children:[]},{value:"Docs",id:"docs",children:[]},{value:"Blocking",id:"blocking-1",children:[]},{value:"Rfc",id:"rfc-1",children:[]}]},{value:"next",id:"next",children:[{value:"Bug",id:"bug-2",children:[]},{value:"Feat",id:"feat-2",children:[]},{value:"Rfc",id:"rfc-2",children:[]}]}],l={rightToc:n};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(i.b)("wrapper",Object(c.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"next-gen-keto---fist-working-version"},Object(i.b)("a",Object(c.a)({parentName:"h2"},{href:"https://github.com/ory/keto/milestone/4"}),"Next Gen Keto - fist working version")),Object(i.b)("p",null,"Goals:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"check/expand/read/write APIs"),Object(i.b)("li",{parentName:"ul"},"SQL persistence (only local database)"),Object(i.b)("li",{parentName:"ul"},"operation using one node in one data center"),Object(i.b)("li",{parentName:"ul"},"namespace configuration including subject set rewrites")),Object(i.b)("p",null,"Non-goals:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"watch API"),Object(i.b)("li",{parentName:"ul"},"caching"),Object(i.b)("li",{parentName:"ul"},"fan-out"),Object(i.b)("li",{parentName:"ul"},"Leopard indexing system"),Object(i.b)("li",{parentName:"ul"},"fancy query features")),Object(i.b)("h3",{id:"bug"},Object(i.b)("a",Object(c.a)({parentName:"h3"},{href:"https://github.com/ory/keto/labels/bug"}),"Bug")),Object(i.b)("p",null,"Something is not working."),Object(i.b)("h4",{id:"issues"},"Issues"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","CLI remote flag should be required\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/287"}),"keto#287"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","REST Relations API returns null instead of ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/289"}),"keto#289"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","REST API create relation should mirror payload in 201 OK response\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/290"}),"keto#290"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Relations are not unique\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/292"}),"keto#292"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","REST API create and subsequent get relation does not properly persist\nfields (",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/291"}),"keto#291"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Unable to create relations using REST API and string notation\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/293"}),"keto#293"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Replace in-memory persister with SQLite schema\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/294"}),"keto#294"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Write GRPC handler and tests for check engine\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/296"}),"keto#296"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik"))),Object(i.b)("h3",{id:"feat"},Object(i.b)("a",Object(c.a)({parentName:"h3"},{href:"https://github.com/ory/keto/labels/feat"}),"Feat")),Object(i.b)("p",null,"New feature or request."),Object(i.b)("h4",{id:"issues-1"},"Issues"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","[next-gen]"," Allow defining userset rewrites\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/263"}),"keto#263"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Write relationtuple tests for http and grpc handlers\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/297"}),"keto#297"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Ensure telemetry is running for both GRPC and HTTP\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/298"}),"keto#298"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/aeneasr"}),"@hackerman"),",\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Define and architect SQL schema and queries for querying relations\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/300"}),"keto#300"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Namespace configuration\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/303"}),"keto#303"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik"))),Object(i.b)("h3",{id:"blocking"},Object(i.b)("a",Object(c.a)({parentName:"h3"},{href:"https://github.com/ory/keto/labels/blocking"}),"Blocking")),Object(i.b)("p",null,"Blocks milestones or other issues or pulls."),Object(i.b)("h4",{id:"issues-2"},"Issues"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Ensure telemetry is running for both GRPC and HTTP\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/298"}),"keto#298"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/aeneasr"}),"@hackerman"),",\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Define and architect SQL schema and queries for querying relations\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/300"}),"keto#300"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Namespace configuration\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/303"}),"keto#303"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik"))),Object(i.b)("h4",{id:"pull-requests"},"Pull Requests"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","feat: first API draft and generation\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/pull/315"}),"keto#315"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik"),",\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/robinbraemer"}),"@Robin Br\xe4mer"))),Object(i.b)("h3",{id:"rfc"},Object(i.b)("a",Object(c.a)({parentName:"h3"},{href:"https://github.com/ory/keto/labels/rfc"}),"Rfc")),Object(i.b)("p",null,"A request for comments to discuss and share ideas."),Object(i.b)("h4",{id:"issues-3"},"Issues"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Consider rename WriteRelationTuples in WriteService\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/351"}),"keto#351"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik"),",\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/robinbraemer"}),"@Robin Br\xe4mer"))),Object(i.b)("h4",{id:"pull-requests-1"},"Pull Requests"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","feat: first API draft and generation\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/pull/315"}),"keto#315"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik"),",\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/robinbraemer"}),"@Robin Br\xe4mer"))),Object(i.b)("h2",{id:"next-gen-keto---next-milestone"},Object(i.b)("a",Object(c.a)({parentName:"h2"},{href:"https://github.com/ory/keto/milestone/3"}),"Next Gen Keto - next milestone")),Object(i.b)("p",null,"Tracks all the issues contributing to next gen Keto."),Object(i.b)("h3",{id:"bug-1"},Object(i.b)("a",Object(c.a)({parentName:"h3"},{href:"https://github.com/ory/keto/labels/bug"}),"Bug")),Object(i.b)("p",null,"Something is not working."),Object(i.b)("h4",{id:"issues-4"},"Issues"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Move models package to relations\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/295"}),"keto#295"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik"))),Object(i.b)("h3",{id:"feat-1"},Object(i.b)("a",Object(c.a)({parentName:"h3"},{href:"https://github.com/ory/keto/labels/feat"}),"Feat")),Object(i.b)("p",null,"New feature or request."),Object(i.b)("h4",{id:"issues-5"},"Issues"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Define naming conventions for objects, relations, namespaces\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/288"}),"keto#288"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Write benchmark tests for relationtuple package\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/301"}),"keto#301"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Database sharding (",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/306"}),"keto#306"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Integrate Next Gen Keto with wider policy ecosystems / Open Policy Agent\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/318"}),"keto#318"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/aeneasr"}),"@hackerman")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Allow defining ABAC relation tuples\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/319"}),"keto#319"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Allow narrowed ACL evaluation in check requests\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/323"}),"keto#323"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Allow modifying relation tuples with consistency guarantees\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/328"}),"keto#328"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/robinbraemer"}),"@Robin Br\xe4mer")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Add TTL support to relation tuple\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/346"}),"keto#346"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Remove support for AND/OR/XOR in GetRelationTuples\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/299"}),"keto#299"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Rewrite check engine to search the graph in the other direction\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/302"}),"keto#302"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik"))),Object(i.b)("h3",{id:"docs"},Object(i.b)("a",Object(c.a)({parentName:"h3"},{href:"https://github.com/ory/keto/labels/docs"}),"Docs")),Object(i.b)("p",null,"Affects documentation."),Object(i.b)("h4",{id:"issues-6"},"Issues"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Integrate Next Gen Keto with wider policy ecosystems / Open Policy Agent\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/318"}),"keto#318"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/aeneasr"}),"@hackerman"))),Object(i.b)("h3",{id:"blocking-1"},Object(i.b)("a",Object(c.a)({parentName:"h3"},{href:"https://github.com/ory/keto/labels/blocking"}),"Blocking")),Object(i.b)("p",null,"Blocks milestones or other issues or pulls."),Object(i.b)("h4",{id:"issues-7"},"Issues"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Protobuf APIs & tooling\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/311"}),"keto#311"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik"),",\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/robinbraemer"}),"@Robin Br\xe4mer")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Write benchmark tests for relationtuple package\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/301"}),"keto#301"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik"))),Object(i.b)("h4",{id:"pull-requests-2"},"Pull Requests"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","chore: make all go packages internal\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/pull/313"}),"keto#313"),")")),Object(i.b)("h3",{id:"rfc-1"},Object(i.b)("a",Object(c.a)({parentName:"h3"},{href:"https://github.com/ory/keto/labels/rfc"}),"Rfc")),Object(i.b)("p",null,"A request for comments to discuss and share ideas."),Object(i.b)("h4",{id:"issues-8"},"Issues"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Design decisions, Clarifications and Proposals\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/307"}),"keto#307"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/aeneasr"}),"@hackerman"),",\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/zepatrik"}),"@Patrik")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Integrate Next Gen Keto with wider policy ecosystems / Open Policy Agent\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/318"}),"keto#318"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/aeneasr"}),"@hackerman")),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Allow defining ABAC relation tuples\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/319"}),"keto#319"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Allow narrowed ACL evaluation in check requests\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/323"}),"keto#323"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Allow modifying relation tuples with consistency guarantees\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/328"}),"keto#328"),") -\n",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/robinbraemer"}),"@Robin Br\xe4mer"))),Object(i.b)("h2",{id:"next"},Object(i.b)("a",Object(c.a)({parentName:"h2"},{href:"https://github.com/ory/keto/milestone/2"}),"next")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"This milestone does not have a description.")),Object(i.b)("h3",{id:"bug-2"},Object(i.b)("a",Object(c.a)({parentName:"h3"},{href:"https://github.com/ory/keto/labels/bug"}),"Bug")),Object(i.b)("p",null,"Something is not working."),Object(i.b)("h4",{id:"issues-9"},"Issues"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Slash (/) in role or policy id causes 404 error for GET and DELETE\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/140"}),"keto#140"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Keto is posting plain text passwords when there is an issue with DSN\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/237"}),"keto#237"),")")),Object(i.b)("h3",{id:"feat-2"},Object(i.b)("a",Object(c.a)({parentName:"h3"},{href:"https://github.com/ory/keto/labels/feat"}),"Feat")),Object(i.b)("p",null,"New feature or request."),Object(i.b)("h4",{id:"issues-10"},"Issues"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Evaluate queries needs to get the entire database in cache to works\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/187"}),"keto#187"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Roles and Policies Filter by using flavor strategy\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/186"}),"keto#186"),")"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Add a description attribute to access control policy role\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/213"}),"keto#213"),")")),Object(i.b)("h3",{id:"rfc-2"},Object(i.b)("a",Object(c.a)({parentName:"h3"},{href:"https://github.com/ory/keto/labels/rfc"}),"Rfc")),Object(i.b)("p",null,"A request for comments to discuss and share ideas."),Object(i.b)("h4",{id:"issues-11"},"Issues"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","IDs being limited to varchar(64) reduces the usefulness of URNs when you\nare using them globally\n(",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/197"}),"keto#197"),")")))}o.isMDXComponent=!0}}]);