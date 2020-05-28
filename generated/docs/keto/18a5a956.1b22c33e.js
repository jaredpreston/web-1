(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),a=(n(0),n(176)),i={id:"index",title:"Introduction"},c={id:"version-v0.5/index",title:"Introduction",description:"ORY Keto is a permission server that implements best practice access control",source:"@site/versioned_docs/version-v0.5/index.md",permalink:"/keto/docs/index",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.5/index.md",version:"v0.5",lastUpdatedBy:"hackerman",lastUpdatedAt:1586170560,sidebar:"version-v0.5/docs",next:{title:"Installation",permalink:"/keto/docs/install"}},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"ORY Keto is a permission server that implements best practice access control\nmechanisms. If you came looking for the answer to the question:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Is a certain user allowed to modify this blog article?"),Object(a.b)("li",{parentName:"ul"},"Is this service is allowed to print that document?"),Object(a.b)("li",{parentName:"ul"},"Is a member of the ACME organisation allowed to modify data of one of their\ntenants?"),Object(a.b)("li",{parentName:"ul"},"Is this process allowed to execute that worker when coming from IP 10.0.0.2\nbetween 4pm and 5pm on a Monday?"),Object(a.b)("li",{parentName:"ul"},"...")),Object(a.b)("p",null,"ORY Keto provides various access control engines:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Available today:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"ORY-flavored Access Control Policies with exact, glob, and regexp matching\nstrategies"))),Object(a.b)("li",{parentName:"ul"},"Available soon:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Access_control_list"}),"Access Control Lists")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Role-based_access_control"}),"Role-based Access Control")),Object(a.b)("li",{parentName:"ul"},"Role Based Access Control with Context (Google/Kubernetes-flavored)"),Object(a.b)("li",{parentName:"ul"},"Amazon Web Services Identity & Access Management Policies (AWS IAM Policies)")))),Object(a.b)("p",null,"Each mechanism is powered by a decision engine implemented on top of the\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.openpolicyagent.org/"}),"Open Policy Agent")," and provides well-defined\nmanagement and authorization REST API endpoints."))}p.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);