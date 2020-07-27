(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{267:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(9),o=(r(0),r(394)),s={id:"self-service",title:"Self-Service Flows",sidebar_label:"Before you start reading"},i={id:"version-v0.4/self-service",isDocsHomePage:!1,title:"Self-Service Flows",description:"ORY Kratos implements flows that users perform themselves as opposed to",source:"@site/versioned_docs/version-v0.4/self-service.mdx",permalink:"/kratos/docs/self-service",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/self-service.mdx",version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594198226,sidebar_label:"Before you start reading",sidebar:"version-v0.4/docs",previous:{title:"Threat Models and Security Profiles",permalink:"/kratos/docs/concepts/security"},next:{title:"User Login And Registration",permalink:"/kratos/docs/self-service/flows/user-login-user-registration"}},l=[{value:"Network Flows for Browsers",id:"network-flows-for-browsers",children:[]}],c={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"ORY Kratos implements flows that users perform themselves as opposed to\nadministrative intervention. Facebook and Google both provide self-service\nregistration and profile management features as you are able to make changes to\nyour profile and sign up yourself."),Object(o.b)("p",null,"Most believe that user management systems are easy to implement because picking\nthe right password hashing algorithm and sending an account verification code is\na solvable challenge. The real complexity however hides in the details and\nattack vectors of self-service flows. Most data leaks happen because someone is\nable to exploit"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"registration: with attack vectors such as account enumeration (), ...;"),Object(o.b)("li",{parentName:"ul"},"login: phishing, account enumeration, leaked password databases, brute-force,\n...;"),Object(o.b)("li",{parentName:"ul"},"user settings: account enumeration, account takeover, ...;"),Object(o.b)("li",{parentName:"ul"},"account recovery: social engineering attacks, account takeover, spoofing, and\nso on.")),Object(o.b)("p",null,"ORY Kratos applies best practices established by experts (National Institute of\nSciences NIST, Internet Engineering Task Force IETF, Microsoft Research, Google\nResearch, Troy Hunt, ...) and implements the following flows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/kratos/docs/self-service/flows/user-login-user-registration"}),"Login and Registration")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/kratos/docs/self-service/flows/user-logout"}),"Logout")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/kratos/docs/self-service/flows/user-settings"}),"User Settings")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/kratos/docs/self-service/flows/account-recovery"}),"Account Recovery")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/kratos/docs/self-service/flows/verify-email-account-activation"}),"Address Verification")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/kratos/docs/self-service/flows/user-facing-errors"}),"User-Facing Error")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/kratos/docs/self-service/flows/2fa-mfa-multi-factor-authentication"}),"2FA / MFA"))),Object(o.b)("p",null,"Some flows break down into strategies which implement some of the flow's\nbusiness logic:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"password")," strategy implement the\n",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/kratos/docs/self-service/flows/user-login-user-registration/username-email-password"}),"login and registration flow (with email/username and password)"),',\naccount recovery flow ("reset your password"), and\n',Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/kratos/docs/self-service/flows/user-settings/change-password"}),'user settings flow ("change your password")'),"."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"oidc")," (OpenID Connect, OAuth2, Social Sign In) strategy implements\n",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/kratos/docs/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2"}),'login and registration flow ("Sign in with ...")'),",\nand\n",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/kratos/docs/self-service/flows/user-settings/link-unlink-openid-connect-oauth2"}),'user settings flow ("un/link another social account")'),"."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"profile")," strategy implements the\n",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/kratos/docs/self-service/flows/user-settings/user-profile-management"}),'settings flow ("update your profile", "change your first/last name, ...")'),".")),Object(o.b)("p",null,"Some flows additionally implement the ability\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/self-service/hooks/index"}),"to run hooks")," which allow users to be immediately\nsigned in after registration, notify another system on successful registration\n(e.g. Mailchimp), and so on."),Object(o.b)("h2",{id:"network-flows-for-browsers"},"Network Flows for Browsers"),Object(o.b)("p",null,"All Self-Service Flows such as\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/user-login-user-registration"}),"User Login"),",\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/user-login-user-registration"}),"User Registration"),",\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/user-settings"}),"Profile Management")," use the same\ntemplate:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The Browser makes an HTTP request to the flow's initialization endpoint (e.g.\n",Object(o.b)("inlineCode",{parentName:"li"},"/auth/browser/login"),");"),Object(o.b)("li",{parentName:"ol"},"The initialization endpoint processes data and associates it with a request\nID and redirects the browser to the flow's configured UI URL (e.g.\n",Object(o.b)("inlineCode",{parentName:"li"},"selfservice.flows.login.ui_url"),"), appending the request ID as the ",Object(o.b)("inlineCode",{parentName:"li"},"request"),"\nURL Query Parameter;"),Object(o.b)("li",{parentName:"ol"},"The endpoint responsible for the UI URL uses the ",Object(o.b)("inlineCode",{parentName:"li"},"request")," URL Query\nParameter (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"http://my-app/auth/login?request=abcde"),") to fetch the data\npreviously associated with the Request ID from either ORY Kratos's Public or\nAdmin API."),Object(o.b)("li",{parentName:"ol"},"The UI endpoint renders the fetched data in any way it sees it fit. The flow\nis typically completed by the browser making another request to one of ORY\nKratos' endpoints, which is usually described in the fetched request data.")))}u.isMDXComponent=!0},394:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(r),f=n,d=b["".concat(s,".").concat(f)]||b[f]||p[f]||o;return r?a.a.createElement(d,i(i({ref:t},c),{},{components:r})):a.a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);