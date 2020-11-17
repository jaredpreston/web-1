(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{431:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var i=a(0),n=a.n(i);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=i,u=p["".concat(r,".").concat(m)]||p[m]||b[m]||o;return a?n.a.createElement(u,c(c({ref:t},l),{},{components:a})):n.a.createElement(u,c({ref:t},l))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<o;l++)r[l]=a[l];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var i=a(2),n=a(6),o=(a(0),a(431)),r={id:"sign-in-with-github-google-facebook-linkedin",title:"Sign in with GitHub, GitLab, Google, Facebook, LinkedIn, Microsoft ..."},c={unversionedId:"guides/sign-in-with-github-google-facebook-linkedin",id:"guides/sign-in-with-github-google-facebook-linkedin",isDocsHomePage:!1,title:"Sign in with GitHub, GitLab, Google, Facebook, LinkedIn, Microsoft ...",description:'In this document we will take a look at setting up "Sign in with GitHub" using',source:"@site/docs/guides/sign-in-with-github-google-facebook-linkedin.mdx",slug:"/guides/sign-in-with-github-google-facebook-linkedin",permalink:"/kratos/docs/next/guides/sign-in-with-github-google-facebook-linkedin",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/guides/sign-in-with-github-google-facebook-linkedin.mdx",version:"current",lastUpdatedBy:"zepatrik",lastUpdatedAt:1605629700,sidebar:"docs",previous:{title:"Managing Users and Identities",permalink:"/kratos/docs/next/admin/managing-users-identities"},next:{title:"Configuring And Checking for Login Sessions",permalink:"/kratos/docs/next/guides/login-session"}},s=[{value:"Discord",id:"discord",children:[]},{value:"GitHub",id:"github",children:[]},{value:"GitLab",id:"gitlab",children:[]}],l={rightToc:s};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'In this document we will take a look at setting up "Sign in with GitHub" using\nORY Kratos.'),Object(o.b)("p",null,"Run the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/next/quickstart"}),"Quickstart")," with Docker Compose:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'# This assumes that you have ORY Kratos checked out locally and\n# that your current directory ("pwd") is the folder where ORY Kratos\n# is.\n\n$ make quickstart\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'It is very important to add the "session" hook to the after oidc registration\nhooks. Otherwise your users need to use the login flow again to be able to get a\nsession.'),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'}),"# $ kratos -c path/to/my/kratos/config.yml serve\nselfservice:\n  flows:\n    registration:\n      after:\n        oidc:\n          hooks:\n            - hook: session\n")))),Object(o.b)("h2",{id:"discord"},"Discord"),Object(o.b)("p",null,'To set up "Sign in with Discord" you must create a\n',Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://discord.com/developers/docs/topics/oauth2"}),"Discord OAuth2 Application"),"."),Object(o.b)("p",null,'Set the "Redirect URI" to:'),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"http://127.0.0.1:4433/self-service/methods/oidc/callback/discord\n")),Object(o.b)("p",null,"The pattern of this URL is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"http(s)://<domain-of-ory-kratos>:<public-port>/self-service/methods/oidc/callback/<provider-id>\n")),Object(o.b)("p",null,"The provider ID must point to the provider's ID set in the ORY Kratos\nconfiguration file (explained in further detail at\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/next/concepts/credentials/openid-connect-oidc-oauth2"}),"OpenID Connect and OAuth2 Credentials"),")."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Discord does not implement OpenID Connect. Therefore, ORY Kratos makes a request\nto\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://discord.com/developers/docs/resources/user#get-current-user"}),"Discord's User API"),"\nand adds that data to ",Object(o.b)("inlineCode",{parentName:"p"},"std.extVar('claims')"),". However, not all fields are\nsupported. Check the list of supported fields\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ory/kratos/blob/v0.5.1-alpha.1/selfservice/strategy/oidc/provider_discord.go#L81-L91"}),"in Kratos' source code"),"."),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"identify")," scope will add following fields:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text"}),"iss                 # always https://discord.com/api/v6/oauth2/\nsub                 # numeric discord user id\nname                # username + # + discriminator\nnickname            # username\npreferred_username  # username\npicture             # avatar url\nlocale              # user locale\n")),Object(o.b)("p",{parentName:"div"},"Additionally, the ",Object(o.b)("inlineCode",{parentName:"p"},"email")," scope will add:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text"}),"email               # user email\nemail_verified      # whether email is verified\n")))),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:'title="contrib/quickstart/kratos/email-password/oidc.discord.jsonnet"',title:'"contrib/quickstart/kratos/email-password/oidc.discord.jsonnet"'}),'local claims = {\n  email_verified: false\n} + std.extVar(\'claims\');\n\n{\n  identity: {\n    traits: {\n      // Allowing unverified email addresses enables account\n      // enumeration attacks, especially if the value is used for\n      // e.g. verification or as a password login identifier.\n      //\n      // Therefore we only return the email if it (a) exists and (b) is marked verified\n      // by Discord.\n      [if "email" in claims && claims.email_verified then "email" else null]: claims.email,\n    },\n  },\n}\n')),Object(o.b)("p",null,"Now, enable the Discord provider in the ORY Kratos config located at\n",Object(o.b)("inlineCode",{parentName:"p"},"<kratos-directory>/contrib/quickstart/kratos/email-password/.kratos.yml"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/kratos/email-password/.kratos.yml"',title:'"contrib/quickstart/kratos/email-password/.kratos.yml"'}),"# $ kratos -c path/to/my/kratos/config.yml serve\nselfservice:\n  methods:\n    oidc:\n      enabled: true\n      config:\n        providers:\n          - id: discord # this is `<provider-id>` in the Authorization callback URL. DO NOT CHANGE IT ONCE SET!\n            provider: discord\n            client_id: .... # Replace this with the OAuth2 Client ID provided by Discord\n            client_secret: .... # Replace this with the OAuth2 Client Secret provided by Discord\n            mapper_url: file:///etc/config/kratos/oidc.discord.jsonnet\n            scope:\n              - identify\n              - email\n")),Object(o.b)("p",null,"Discord is now an option to log in via Kratos."),Object(o.b)("h2",{id:"github"},"GitHub"),Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Hz_dP5c_qvc",frameborder:"0",allowfullscreen:!0}),Object(o.b)("p",null,'To set up "Sign in with GitHub" you must create a\n',Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/"}),"GitHub OAuth2 Client"),"."),Object(o.b)("p",null,'Set the "Authorization callback URL" to:'),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"http://127.0.0.1:4433/self-service/methods/oidc/callback/github\n")),Object(o.b)("p",null,"The pattern of this URL is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"http(s)://<domain-of-ory-kratos>:<public-port>//self-service/methods/oidc/callback/<provider-id>\n")),Object(o.b)("p",null,"The provider ID must point to the provider's ID set in the ORY Kratos\nconfiguration file (explained in further detail at\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/next/concepts/credentials/openid-connect-oidc-oauth2"}),"OpenID Connect and OAuth2 Credentials"),")."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"GitHub does not implement OpenID Connect. Therefore, ORY Kratos makes a request\nto\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.github.com/v3/users/#get-the-authenticated-user"}),"GitHub's User API"),"\nand adds that data to ",Object(o.b)("inlineCode",{parentName:"p"},"std.extVar('claims')"),". Check out what data is available\nat\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/"}),"GitHub's Scope Docs"),".\nNot all GitHub fields are supported however. Check the list of supported fields\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ory/kratos/blob/v0.2.1-alpha.1/selfservice/strategy/oidc/provider_github.go#L72-L98"}),"in Kratos' source code"),"."))),Object(o.b)("p",null,"As explained in\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/next/concepts/credentials/openid-connect-oidc-oauth2"}),"OpenID Connect and OAuth2 Credentials"),",\nyou must also create a Jsonnet code snippet for the provider. Save the code in\n",Object(o.b)("inlineCode",{parentName:"p"},"<kratos-directory>/contrib/quickstart/kratos/email-password/oidc.github.jsonnet"),".\nThe following JsonNet takes ",Object(o.b)("inlineCode",{parentName:"p"},"email_primary")," and maps it to ",Object(o.b)("inlineCode",{parentName:"p"},"traits.email"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:'title="contrib/quickstart/kratos/email-password/oidc.github.jsonnet"',title:'"contrib/quickstart/kratos/email-password/oidc.github.jsonnet"'}),'local claims = {\n  email_verified: false\n} + std.extVar(\'claims\');\n\n{\n  identity: {\n    traits: {\n      // Allowing unverified email addresses enables account\n      // enumeration attacks, especially if the value is used for\n      // e.g. verification or as a password login identifier.\n      //\n      // Therefore we only return the email if it (a) exists and (b) is marked verified\n      // by GitHub.\n      [if "email" in claims && claims.email_verified then "email" else null]: claims.email,\n    },\n  },\n}\n')),Object(o.b)("p",null,"Now, enable the GitHub provider in the ORY Kratos config located at\n",Object(o.b)("inlineCode",{parentName:"p"},"<kratos-directory>/contrib/quickstart/kratos/email-password/.kratos.yml"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/kratos/email-password/.kratos.yml"',title:'"contrib/quickstart/kratos/email-password/.kratos.yml"'}),"# $ kratos -c path/to/my/kratos/config.yml serve\nselfservice:\n  methods:\n    oidc:\n      enabled: true\n      config:\n        providers:\n          - id: github # this is `<provider-id>` in the Authorization callback URL. DO NOT CHANGE IT ONCE SET!\n            provider: github\n            client_id: .... # Replace this with the OAuth2 Client ID provided by GitHub\n            client_secret: .... # Replace this with the OAuth2 Client Secret provided by GitHub\n            mapper_url: file:///etc/config/kratos/oidc.github.jsonnet\n            scope:\n              - user:email\n")),Object(o.b)("p",null,"Next, open the login endpoint of the SecureApp and you should see the GitHub\nLogin option!"),Object(o.b)("h2",{id:"gitlab"},"GitLab"),Object(o.b)("p",null,'To set up "Sign in with GitLab" you must create a\n',Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.gitlab.com/ee/integration/oauth_provider.html#adding-an-application-through-the-profile"}),"GitLab OAuth2 Application"),"."),Object(o.b)("p",null,'Set the "Redirect URI" to:'),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"http://127.0.0.1:4433/self-service/methods/oidc/callback/gitlab\n")),Object(o.b)("p",null,"The pattern of this URL is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"http(s)://<domain-of-ory-kratos>:<public-port>/self-service/methods/oidc/callback/<provider-id>\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"While you can use")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.gitlab.com/ee/integration/openid_connect_provider.html"}),"GitLab as an OIDC identity provider"),",\nGitLab only returns the sub and sub_legacy claims in the ID token. Therefore,\nORY Kratos makes a request to\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://gitlab.com/oauth/userinfo"}),"GitLab's /oauth/userinfo API")," and adds the\nuser info to ",Object(o.b)("inlineCode",{parentName:"p"},"std.extVar('claims')"),". :::"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:'title="contrib/quickstart/kratos/email-password/oidc.gitlab.jsonnet"',title:'"contrib/quickstart/kratos/email-password/oidc.gitlab.jsonnet"'}),'local claims = {\n  email_verified: false\n} + std.extVar(\'claims\');\n\n{\n  identity: {\n    traits: {\n      // Allowing unverified email addresses enables account\n      // enumeration attacks, especially if the value is used for\n      // e.g. verification or as a password login identifier.\n      //\n      // Therefore we only return the email if it (a) exists and (b) is marked verified\n      // by GitLab.\n      [if "email" in claims && claims.email_verified then "email" else null]: claims.email,\n    },\n  },\n}\n')),Object(o.b)("p",{parentName:"div"},"Now, enable the GitLab provider in the ORY Kratos config located at\n",Object(o.b)("inlineCode",{parentName:"p"},"<kratos-directory>/contrib/quickstart/kratos/email-password/.kratos.yml"),"."),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/kratos/email-password/.kratos.yml"',title:'"contrib/quickstart/kratos/email-password/.kratos.yml"'}),"# $ kratos -c path/to/my/kratos/config.yml serve\nselfservice:\n  methods:\n    oidc:\n      enabled: true\n      config:\n        providers:\n          - id: gitlab # this is `<provider-id>` in the Authorization callback URL. DO NOT CHANGE IT ONCE SET!\n            provider: gitlab\n            client_id: .... # Replace this with the OAuth2 Client ID provided by GitLab\n            client_secret: .... # Replace this with the OAuth2 Client Secret provided by GitLab\n            mapper_url: file:///etc/config/kratos/oidc.gitlab.jsonnet\n            scope:\n              - read_user\n              - openid\n              - profile\n              - email\n")),Object(o.b)("p",{parentName:"div"},"GitLab is now an option to log in via Kratos."),Object(o.b)("h2",Object(i.a)({parentName:"div"},{id:"microsoft"}),"Microsoft"),Object(o.b)("p",{parentName:"div"},"This will enable you to log in using any Azure AD directory - Multitenant and\npersonal Microsoft accounts (e.g. Skype, Xbox) depending on the settings made\nwhen creating the application in Azure AD."),Object(o.b)("h4",Object(i.a)({parentName:"div"},{id:"creating-an-application-in-azure-ad"}),"Creating an Application in Azure AD"),Object(o.b)("p",{parentName:"div"},'To set up "Sign in with Microsoft" you must first\n',Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app"}),"register an application with the Microsoft identity platform"),"."),Object(o.b)("p",{parentName:"div"},'Select "Web" as the "Redirect URI" type, and set the URI to:'),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"http(s)://<domain-of-ory-kratos>:<public-port>//self-service/methods/oidc/callback/<provider-id>\n")),Object(o.b)("p",{parentName:"div"},'After the "App Registration" is created, make note of the ',Object(o.b)("inlineCode",{parentName:"p"},"Application ID")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"Directory ID"),' on top of the Overview page. To create the client secret,\nnavigate to "Certificates & secrets" and click "+ New client secret". Remember\nto copy the secret value as it will only be shown once.'),Object(o.b)("h4",Object(i.a)({parentName:"div"},{id:"configuring-kratos"}),"Configuring Kratos"),Object(o.b)("p",{parentName:"div"},"Create a Jsonnet claims mapper as described in\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/next/concepts/credentials/openid-connect-oidc-oauth2"}),"OpenID Connect and OAuth2 Credentials"),".\nSave the code in\n",Object(o.b)("inlineCode",{parentName:"p"},"<kratos-directory>/contrib/quickstart/kratos/email-password/oidc.microsoft.jsonnet"),"."),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:'title="contrib/quickstart/kratos/email-password/oidc.microsoft.jsonnet"',title:'"contrib/quickstart/kratos/email-password/oidc.microsoft.jsonnet"'}),'local claims = std.extVar(\'claims\');\n{\n  identity: {\n    traits: {\n      // Allowing unverified email addresses enables account\n      // enumeration attacks, especially if the value is used for\n      // e.g. verification or as a password login identifier.\n      //\n      // If connecting only to your organization (one tenant), claims.email is safe to use if you have not actively disabled e-mail verification during signup.\n      //\n      // The email might be empty if the account is not linked to an email address.\n      // For a human readable identifier, consider using the "preferred_username" claim.\n      [if "email" in claims then "email" else null]: claims.email,\n    },\n  },\n}\n')),Object(o.b)("p",{parentName:"div"},"Enable the Microsoft provider in the ORY Kratos config located at\n",Object(o.b)("inlineCode",{parentName:"p"},"<kratos-directory>/contrib/quickstart/kratos/email-password/.kratos.yml"),"."),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/kratos/email-password/.kratos.yml"',title:'"contrib/quickstart/kratos/email-password/.kratos.yml"'}),"selfservice:\n  methods:\n    oidc:\n      enabled: true\n      config:\n        providers:\n          - id: microsoft # this is `<provider-id>` in the Authorization callback URL. DO NOT CHANGE IT ONCE SET!\n            provider: microsoft\n            client_id: .... # Replace this with the Application ID from the App Registration\n            client_secret: .... # Replace this with the generated Secret value from the App Registration\n            tenant: .... # Replace this with the Tenant of your choice (see below)\n            mapper_url: file:///etc/config/kratos/oidc.microsoft.jsonnet\n            scope:\n              - profile\n              - email\n")),Object(o.b)("p",{parentName:"div"},"Azure AD is now an option to log in to kratos."),Object(o.b)("h5",Object(i.a)({parentName:"div"},{id:"choosing-tenant"}),"Choosing Tenant"),Object(o.b)("p",{parentName:"div"},"There are two ways to use the ",Object(o.b)("inlineCode",{parentName:"p"},"microsoft")," provider for authentication:"),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},"For authenticating users in a single Azure AD Directory (organisation), set\nthe ",Object(o.b)("inlineCode",{parentName:"li"},"tenant")," value to either the ",Object(o.b)("inlineCode",{parentName:"li"},"Directory ID"),' from the "App Registration"\npage, or the organisation domain. E.g. ',Object(o.b)("inlineCode",{parentName:"li"},"8eaef023-2b34-4da1-9baa-8bc8c9d6a490"),"\nor ",Object(o.b)("inlineCode",{parentName:"li"},"contoso.onmicrosoft.com"),"."),Object(o.b)("li",{parentName:"ol"},"For authenticating any user in the Microsoft identity platform, set the\n",Object(o.b)("inlineCode",{parentName:"li"},"tenant")," value to either:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"organizations")," to allow users with work or school accounts, or"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"consumers")," to allow users with personal accounts, or"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"common")," to allow both kind of accounts.")))),Object(o.b)("h2",Object(i.a)({parentName:"div"},{id:"twitch"}),"Twitch"),Object(o.b)("p",{parentName:"div"},'To set up "Sign in with Twitch" you must create a\n',Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://dev.twitch.tv/docs/authentication#registration"}),"Twitch OAuth2 Application"),"."),Object(o.b)("p",{parentName:"div"},'Set the "Redirect URI" to:'),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"http://127.0.0.1:4433/self-service/methods/oidc/callback/twitch\n")),Object(o.b)("p",{parentName:"div"},"The pattern of this URL is:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"http(s)://<domain-of-ory-kratos>:<public-port>/self-service/methods/oidc/callback/<provider-id>\n")),Object(o.b)("p",{parentName:"div"},"The provider ID must point to the provider's ID set in the ORY Kratos\nconfiguration file (explained in further detail at\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/next/concepts/credentials/openid-connect-oidc-oauth2"}),"OpenID Connect and OAuth2 Credentials"),")."),Object(o.b)("p",{parentName:"div"},"As explained in\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/next/concepts/credentials/openid-connect-oidc-oauth2"}),"OpenID Connect and OAuth2 Credentials"),",\nyou must also create a Jsonnet code snippet for the provider. Save the code in\n",Object(o.b)("inlineCode",{parentName:"p"},"<kratos-directory>/contrib/quickstart/kratos/email-password/oidc.twitch.jsonnet"),"."),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:'title="contrib/quickstart/kratos/email-password/oidc.twitch.jsonnet"',title:'"contrib/quickstart/kratos/email-password/oidc.twitch.jsonnet"'}),'local claims = {\n  email_verified: false\n} + std.extVar(\'claims\');\n\n{\n  identity: {\n    traits: {\n      // Allowing unverified email addresses enables account\n      // enumeration attacks, especially if the value is used for\n      // e.g. verification or as a password login identifier.\n      //\n      // Therefore we only return the email if it (a) exists and (b) is marked verified\n      // by Twitch.\n      [if "email" in claims && claims.email_verified then "email" else null]: claims.email,\n    },\n  },\n}\n')),Object(o.b)("p",{parentName:"div"},"Now, enable the Twitch provider in the ORY Kratos config located at\n",Object(o.b)("inlineCode",{parentName:"p"},"<kratos-directory>/contrib/quickstart/kratos/email-password/.kratos.yml"),"."),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/kratos/email-password/.kratos.yml"',title:'"contrib/quickstart/kratos/email-password/.kratos.yml"'}),"# $ kratos -c path/to/my/kratos/config.yml serve\nselfservice:\n  methods:\n    oidc:\n      enabled: true\n      config:\n        providers:\n          - id: twitch # this is `<provider-id>` in the Authorization callback URL. DO NOT CHANGE IT ONCE SET!\n            provider: generic\n            client_id: .... # Replace this with the OAuth2 Client ID provided by Twitch\n            client_secret: .... # Replace this with the OAuth2 Client Secret provided by Twitch\n            issuer_url: https://id.twitch.tv/oauth2\n            mapper_url: file:///etc/config/kratos/oidc.twitch.jsonnet\n            scope:\n              - openid\n              - user:read:email # required for email and email_verified claims in the near future\n            requested_claims: # explicitly request email and email_verified claims because twitch doesn't add them by default\n              id_token:\n                email:\n                  essential: true\n                email_verified:\n                  essential: true\n")),Object(o.b)("p",{parentName:"div"},"Next, open the login endpoint of the SecureApp and you should see the Twitch\nLogin option!"),Object(o.b)("h2",Object(i.a)({parentName:"div"},{id:"google-linkedin-facebook"}),"Google, LinkedIn, Facebook"),Object(o.b)("p",{parentName:"div"},"Connecting with other Social Sign In providers will be very similar to the\nGitHub flow. If you've managed to do it, add to this document by writing it down\nand making a PR! :)"))))}d.isMDXComponent=!0}}]);