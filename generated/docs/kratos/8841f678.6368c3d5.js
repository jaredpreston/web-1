(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{246:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),i=r(6),o=(r(0),r(422)),a={id:"selfservice-flow-completion",title:"Self-Service Flow Completion"},s={unversionedId:"concepts/selfservice-flow-completion",id:"version-v0.3/concepts/selfservice-flow-completion",isDocsHomePage:!1,title:"Self-Service Flow Completion",description:"Self-Service flows such as Login, Registration, Updating Settings support two",source:"@site/versioned_docs/version-v0.3/concepts/selfservice-flow-completion.md",slug:"/concepts/selfservice-flow-completion",permalink:"/kratos/docs/v0.3/concepts/selfservice-flow-completion",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.3/concepts/selfservice-flow-completion.md",version:"v0.3",lastUpdatedBy:"aeneasr",lastUpdatedAt:1589548840,sidebar:"version-v0.3/docs",previous:{title:"Social Sign In, OpenID Connect, and OAuth2",permalink:"/kratos/docs/v0.3/concepts/credentials/openid-connect-oidc-oauth2"},next:{title:"Out-of-band communication via E-Mail and SMS",permalink:"/kratos/docs/v0.3/concepts/email-sms"}},c=[{value:"Redirection",id:"redirection",children:[{value:"Post-Login Redirection",id:"post-login-redirection",children:[]},{value:"Post-Registration Redirection",id:"post-registration-redirection",children:[]},{value:"Post-Settings Redirection",id:"post-settings-redirection",children:[]}]},{value:"JSON",id:"json",children:[]}],l={rightToc:c};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Self-Service flows such as Login, Registration, Updating Settings support two\nsuccessful response modes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For browsers, the response will be a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#redirection"}),"redirection"),"."),Object(o.b)("li",{parentName:"ul"},"For API clients (this includes AJAX) the response will be in ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#json"}),"JSON"),".")),Object(o.b)("h2",{id:"redirection"},"Redirection"),Object(o.b)("p",null,"Browser requests, identified by the ",Object(o.b)("inlineCode",{parentName:"p"},"Accept: text/html")," header, complete with a\nredirection flow. If no redirection URL is set for the flow, the Default\nRedirect URL will be used for most flows (e.g. login, registration):"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'}),"urls:\n  default_redirect_to: https://always-end-up-here-per-default/\n")),Object(o.b)("p",null,"It is possible to specify a redirect URL per Self-Service Flow:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  login:\n    after:\n      default_redirect_to: https://end-up-here-after-login/\n  registration:\n    after:\n      default_redirect_to: https://end-up-here-after-registration/\n  # ...\n")),Object(o.b)("p",null,"You may also set redirect URLs per strategy (overrides\n",Object(o.b)("inlineCode",{parentName:"p"},"selfservice.<login|registration|...>.default_return_to"),"):"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  login:\n    after:\n      default_redirect_to: https://this-is-overridden-by-password/\n      password:\n        default_redirect_to: https://end-up-here-after-login-with-password/\n    # ...\n")),Object(o.b)("p",null,"It is also possible to redirect someone back to the original URL. For example,\nif a user requests ",Object(o.b)("inlineCode",{parentName:"p"},"https://www.myapp.com/blog/write")," but is not logged in, we\nwant the user to end up at that page after login. To achieve that, you append\n",Object(o.b)("inlineCode",{parentName:"p"},"?return_to=https://www.myapp.com/blog/write")," when initializing the Login /\nRegistration /Settings flow."),Object(o.b)("p",null,"Because ORY Kratos prevents Open Redirect Attacks, you need to whitelist the\ndomain in your ORY Kratos config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'}),"urls:\n  whitelisted_return_to_urls:\n    - https://www.myapp.com/\n")),Object(o.b)("h3",{id:"post-login-redirection"},"Post-Login Redirection"),Object(o.b)("p",null,"Post-login redirection considers the following configuration keys:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'}),"urls:\n  default_redirect_to: https://end-up-here-per-default/\n\nselfservice:\n  login:\n    after:\n      # overrides url.default_redirect_to\n      default_redirect_to: https://this-is-overridden-by-password/\n      password:\n        # overrides selfservice.login.after.default_redirect_to\n        default_redirect_to: https://end-up-here-after-login-with-password/\n")),Object(o.b)("h3",{id:"post-registration-redirection"},"Post-Registration Redirection"),Object(o.b)("p",null,"Post-login redirection considers the following configuration keys:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'}),"urls:\n  default_redirect_to: https://end-up-here-per-default/\n\nselfservice:\n  registration:\n    after:\n      # overrides url.default_redirect_to\n      default_redirect_to: https://this-is-overridden-by-password/\n      password:\n        # overrides selfservice.registration.after.default_redirect_to\n        default_redirect_to: https://end-up-here-after-registration-with-password/\n")),Object(o.b)("h3",{id:"post-settings-redirection"},"Post-Settings Redirection"),Object(o.b)("p",null,"Post-settings redirection ",Object(o.b)("strong",{parentName:"p"},"does not use")," the ",Object(o.b)("inlineCode",{parentName:"p"},"urls.default_redirect_to")," configuration key. Instead\nthe redirect ends at the same Settings UI with the same Settings Request ID and key ",Object(o.b)("inlineCode",{parentName:"p"},"update_successful"),"\nset to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),". If the listed keys are set, the redirection will end up at the specified values:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  settings:\n    after:\n      # overrides url.default_redirect_to\n      default_redirect_to: https://this-is-overridden-by-password/\n      password:\n        # overrides selfservice.settings.after.default_redirect_to\n        default_redirect_to: https://end-up-here-after-settings-with-password/\n")),Object(o.b)("h2",{id:"json"},"JSON"),Object(o.b)("p",null,"This feature is currently in prototype phase and will be documented at a later\nstage."))}p.isMDXComponent=!0},422:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,b=d["".concat(a,".").concat(f)]||d[f]||u[f]||o;return r?i.a.createElement(b,s(s({ref:t},l),{},{components:r})):i.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);