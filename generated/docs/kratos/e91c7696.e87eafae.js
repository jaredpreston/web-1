(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{304:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(9),i=(n(0),n(324)),o=(n(326),{id:"zero-trust-iap-proxy-identity-access-proxy",title:"Zero Trust with IAP Proxy"}),c={id:"guides/zero-trust-iap-proxy-identity-access-proxy",title:"Zero Trust with IAP Proxy",description:"The Quickstart covers a basic set up that uses client-side",source:"@site/docs/guides/zero-trust-iap-proxy-identity-access-proxy.mdx",permalink:"/kratos/docs/next/guides/zero-trust-iap-proxy-identity-access-proxy",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/guides/zero-trust-iap-proxy-identity-access-proxy.mdx",version:"next",lastUpdatedBy:"Andrew Banchich",lastUpdatedAt:1590996541,sidebar:"docs",previous:{title:"Sign in with GitHub, Google, Facebook, LinkedIn, Microsoft ...",permalink:"/kratos/docs/next/guides/sign-in-with-github-google-facebook-linkedin"},next:{title:"Multitenancy",permalink:"/kratos/docs/next/guides/multi-tenancy-multitenant"}},s=[{value:"Running ORY Kratos and the ORY Oathkeeper Identity and Access Proxy",id:"running-ory-kratos-and-the-ory-oathkeeper-identity-and-access-proxy",children:[{value:"Network Architecture",id:"network-architecture",children:[]}]},{value:"Perform Registration, Login, and Logout",id:"perform-registration-login-and-logout",children:[]},{value:"Configuration",id:"configuration",children:[{value:"ORY Oathkeeper: Identity and Access Proxy",id:"ory-oathkeeper-identity-and-access-proxy",children:[]},{value:"ID Token Mutator",id:"id-token-mutator",children:[]},{value:"Error Handling",id:"error-handling",children:[]},{value:"Access Rules",id:"access-rules",children:[]}]},{value:"Cleaning up Docker",id:"cleaning-up-docker",children:[]}],l={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/quickstart"}),"Quickstart")," covers a basic set up that uses client-side\nrouting in ",Object(i.b)("inlineCode",{parentName:"p"},"SecureApp")," to forward requests to ORY Kratos."),Object(i.b)("p",null,"Systems that have more than a few components often use reverse proxies such as\nNginx, Envoy, or Kong to route and authorize traffic to applications. ORY Kratos\nworks very well in such environments. The purpose of this guide is\nto clarify how to use an IAP (Identity and Access Proxy) to authorize incoming\nrequests. In this tutorial, we will use ORY Oathkeeper to achieve this."),Object(i.b)("p",null,"This guide expects that you have familiarized yourself with ORY Kratos' concepts\nintroduced in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/quickstart"}),"Quickstart"),"."),Object(i.b)("p",null,"To ensure that no one can access the dashboard without prior authentication, we\nwill use a reverse proxy (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/oathkeeper"}),"ORY Oathkeeper"),") to\ndeny all unauthenticated traffic to ",Object(i.b)("inlineCode",{parentName:"p"},"http://secure-app/dashboard")," and redirect the user\nto the login page at ",Object(i.b)("inlineCode",{parentName:"p"},"http://secure-app/auth/login"),". Further, we will configure\naccess to ",Object(i.b)("inlineCode",{parentName:"p"},"http://secure-app/auth/login")," in such a way that access only works if\none is not yet authenticated."),Object(i.b)("h2",{id:"running-ory-kratos-and-the-ory-oathkeeper-identity-and-access-proxy"},"Running ORY Kratos and the ORY Oathkeeper Identity and Access Proxy"),Object(i.b)("p",null,"Clone the ORY Kratos repository and fetch the latest images:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"git clone https://github.com/ory/kratos.git\ncd kratos\ngit checkout v0.3.0-alpha.1\n\ndocker pull oryd/kratos:latest-sqlite\ndocker pull oryd/kratos-selfservice-ui-node:latest\n")),Object(i.b)("p",null,"Next, run the quickstart and add the ORY Oathkeeper config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"docker-compose \\\n  -f quickstart.yml \\\n  -f quickstart-oathkeeper.yml \\\n  up --build --force-recreate\n")),Object(i.b)("p",null,"This might take a minute or two. Once the output slows down and logs indicate a\nhealthy system you're ready to roll! A healthy system will show something along\nthe lines of (the order of messages might be reversed):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'kratos_1      | time="2020-01-20T14:52:13Z" level=info msg="Starting the admin httpd on: 0.0.0.0:4434"\nkratos_1      | time="2020-01-20T14:52:13Z" level=info msg="Starting the public httpd on: 0.0.0.0:4433"\noathkeeper_1  | {"level":"info","msg":"TLS has not been configured for api, skipping","time":"2020-01-20T09:22:09Z"}\noathkeeper_1  | {"level":"info","msg":"Listening on http://:4456","time":"2020-01-20T09:22:09Z"}\noathkeeper_1  | {"level":"info","msg":"TLS has not been configured for proxy, skipping","time":"2020-01-20T09:22:09Z"}\noathkeeper_1  | {"level":"info","msg":"Listening on http://:4455","time":"2020-01-20T09:22:09Z"}\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"There are two important factors to get a fully functional system:")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"You need to make sure that ports  ",Object(i.b)("inlineCode",{parentName:"li"},"4433"),", ",Object(i.b)("inlineCode",{parentName:"li"},"4434"),", ",Object(i.b)("inlineCode",{parentName:"li"},"4436"),", ",Object(i.b)("inlineCode",{parentName:"li"},"4455"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"4456"),"\xa0",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://serverfault.com/questions/309052/check-if-port-is-open-or-closed-on-a-linux-server"}),"are free"),"."),Object(i.b)("li",{parentName:"ul"},"Make sure to always use ",Object(i.b)("inlineCode",{parentName:"li"},"127.0.0.1")," as the hostname; never use ",Object(i.b)("inlineCode",{parentName:"li"},"localhost"),"!\nThis is important because browsers treat these two as separate domains and\nwill therefore have issues with setting and using the right cookies.")))),Object(i.b)("h3",{id:"network-architecture"},"Network Architecture"),Object(i.b)("p",null,"This demo makes use of several services:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ory/kratos"}),"ORY Kratos"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Public ("Browser") API (port 4433)'),Object(i.b)("li",{parentName:"ul"},"Admin API (port 4434) - This is made public only so we can test via the CLI.")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://github.com/ory/kratos-selfservice-ui-node"}),"SecureApp"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An example application written in NodeJS that implements the login, registration,\nlogout, dashboard, and other UIs. Because we are accessing this via a proxy, its port (4435) is not\npublicly exposed.")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper"}),"ORY Oathkeeper"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Reverse proxy (port 4455) - a reverse proxy to protect the ",Object(i.b)("strong",{parentName:"li"},"SecureApp"),"."),Object(i.b)("li",{parentName:"ul"},"API (port 4456) - Oathkeeper's API. This is made public only so we can test via the CLI.")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/mailhog/MailHog"}),"MailHog"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Public (port 4436) - a development SMTP server which ORY Kratos will use to send emails.")),Object(i.b)("p",null,"To better understand the application architecture, let's take a look at the network\nconfiguration. This assumes that you have at least some understanding of how\nDocker networks work:"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblxuc3ViZ3JhcGggaG5bSG9zdCBOZXR3b3JrXVxuICAgIEJbQnJvd3Nlcl1cbiAgICBCLS0-fENhbiBhY2Nlc3MgVVJMcyB2aWEgMTI3LjAuMC4xOjQ0NTV8T0tQSE5cbiAgICBCLS0-fENhbiBhY2Nlc3MgVUkgdmlhIDEyNy4wLjAuMTo0NDM2fFNNVFBVSVxuICAgIE9LUEhOKFtSZXZlcnNlIFByb3h5IGV4cG9zZWQgYXQgOjQ0NTVdKVxuICAgIFNNVFBVSShbTWFpbFNsdXJwZXIgVUkgZXhwb3NlZCBhdCA6NDQzNl0pXG5lbmRcblxuc3ViZ3JhcGggZG5bXCJJbnRlcm5hbCBEb2NrZXIgTmV0d29yayAoaW50cmFuZXQpXCJdXG4gICAgT0tQSE4tLT5PT1xuICAgIFNNVFBVSS0tPlNNVFBcbiAgICBPTy0tPnxQcm94aWVzIFVSTHNzIC8ub3J5L2tyYXRvcy9wdWJsaWMvKiB0b3xPS1xuICAgIE9PLS0-fFwiUHJveGllcyAvYXV0aC9sb2dpbiwgL2F1dGgvcmVnaXN0cmF0aW9uLCAvZGFzaGJvYXJkLCAuLi4gdG9cInxTQVxuICAgIFNBLS0-fFRhbGtzIHRvfE9LXG4gICAgT0stLT58U2VuZHMgbWFpbCB2aWF8U01UUFxuICAgIE9PLS0-fFZhbGlkYXRlcyBhdXRoIHNlc3Npb25zIHVzaW5nfE9LXG5cbiAgICBPS1tPUlkgS3JhdG9zXVxuICAgIE9PW1wiUmV2ZXJzZSBQcm94eSAoT1JZIE9hdGhrZWVwZXIpXCJdXG4gICAgU0FbXCJTZWN1cmVBcHAgKE9SWSBLcmF0b3MgU2VsZlNlcnZpY2UgVUkgTm9kZSBFeGFtcGxlKVwiXVxuICAgIFNNVFBbXCJTTVRQIFNlcnZlciAoTWFpbFNsdXJwZXIpXCJdXG5lbmRcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJuZXV0cmFsIiwiZmxvd2NoYXJ0Ijp7InJhbmtTcGFjaW5nIjo2NSwibm9kZVNwYWNpbmciOjMwLCJjdXJ2ZSI6ImJhc2lzIn19fQ"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblxuc3ViZ3JhcGggaG5bSG9zdCBOZXR3b3JrXVxuICAgIEJbQnJvd3Nlcl1cbiAgICBCLS0-fENhbiBhY2Nlc3MgVVJMcyB2aWEgMTI3LjAuMC4xOjQ0NTV8T0tQSE5cbiAgICBCLS0-fENhbiBhY2Nlc3MgVUkgdmlhIDEyNy4wLjAuMTo0NDM2fFNNVFBVSVxuICAgIE9LUEhOKFtSZXZlcnNlIFByb3h5IGV4cG9zZWQgYXQgOjQ0NTVdKVxuICAgIFNNVFBVSShbTWFpbFNsdXJwZXIgVUkgZXhwb3NlZCBhdCA6NDQzNl0pXG5lbmRcblxuc3ViZ3JhcGggZG5bXCJJbnRlcm5hbCBEb2NrZXIgTmV0d29yayAoaW50cmFuZXQpXCJdXG4gICAgT0tQSE4tLT5PT1xuICAgIFNNVFBVSS0tPlNNVFBcbiAgICBPTy0tPnxQcm94aWVzIFVSTHNzIC8ub3J5L2tyYXRvcy9wdWJsaWMvKiB0b3xPS1xuICAgIE9PLS0-fFwiUHJveGllcyAvYXV0aC9sb2dpbiwgL2F1dGgvcmVnaXN0cmF0aW9uLCAvZGFzaGJvYXJkLCAuLi4gdG9cInxTQVxuICAgIFNBLS0-fFRhbGtzIHRvfE9LXG4gICAgT0stLT58U2VuZHMgbWFpbCB2aWF8U01UUFxuICAgIE9PLS0-fFZhbGlkYXRlcyBhdXRoIHNlc3Npb25zIHVzaW5nfE9LXG5cbiAgICBPS1tPUlkgS3JhdG9zXVxuICAgIE9PW1wiUmV2ZXJzZSBQcm94eSAoT1JZIE9hdGhrZWVwZXIpXCJdXG4gICAgU0FbXCJTZWN1cmVBcHAgKE9SWSBLcmF0b3MgU2VsZlNlcnZpY2UgVUkgTm9kZSBFeGFtcGxlKVwiXVxuICAgIFNNVFBbXCJTTVRQIFNlcnZlciAoTWFpbFNsdXJwZXIpXCJdXG5lbmRcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJuZXV0cmFsIiwiZmxvd2NoYXJ0Ijp7InJhbmtTcGFjaW5nIjo2NSwibm9kZVNwYWNpbmciOjMwLCJjdXJ2ZSI6ImJhc2lzIn19fQ",alt:"User Login and Registration Network Topology"})))),Object(i.b)("p",null,"As you can see, all requests except for our demo mail server are proxied through ORY Oathkeeper."),Object(i.b)("p",null,"The next diagram shows how we've configured the routes in ORY Oathkeeper:"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblxuc3ViZ3JhcGggcGlbUHVibGljIEludGVybmV0XVxuICAgIEJbQnJvd3Nlcl1cbmVuZFxuXG5zdWJncmFwaCB2cGNbVlBDIC8gQ2xvdWQgLyBEb2NrZXIgTmV0d29ya11cbnN1YmdyYXBoIFwiRGVtaWxpdGFyaXplZCBab25lIC8gRE1aXCJcbiAgICBPS1tPUlkgT2F0aGtlZXBlciA6NDQ1NV1cbiAgICBCIC0tPiBPS1xuZW5kXG5cbiAgICBPSyAtLT58XCJGb3J3YXJkcyB7LywvZGFzaGJvYXJkfSB0b1wifCBTQURcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvYXV0aC9sb2dvdXQgdG9cInwgU0FMVVxuICAgIE9LIC0tPnxcIkZvcndhcmRzIC9hdXRoL2xvZ2luIHRvXCJ8IFNBTElcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvYXV0aC9yZWdpc3RyYXRpb24gdG9cInwgU0FSXG4gICAgT0sgLS0-fFwiRm9yd2FyZHMgL2F1dGgvKiB0b1wifCBTQUFcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvLm9yeS9rcmF0b3MvcHVibGljLyogdG9cInwgS1BcblxuICAgIHN1YmdyYXBoIFwiUHJpdmF0ZSBTdWJuZXQgLyBJbnRyYW5ldFwiXG4gICAgS1sgT1JZIEtyYXRvcyBdXG5cbiAgICBLUChbIE9SWSBLcmF0b3MgUHVibGljIEFQSSBdKVxuICAgIEtBKFsgT1JZIEtyYXRvcyBBZG1pbiBBUEkgXSlcbiAgICBTQSAtLT4gS0FcbiAgICBLQSAtLmJlbG9uZ3MgdG8uLT4gS1xuICAgIEtQIC0uYmVsb25ncyB0by4tPiBLXG5cbiAgICBzdWJncmFwaCBzYVtcIlNlY3VyZUFwcCAvIGtyYXRvcy1zZXJsZnNlcnZpY2UtdWktbm9kZSBFeGFtcGxlXCJdXG5cbiAgICAgICAgU0FbU2VjdXJlQXBwXVxuICAgICAgICBTQUQgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBTFUgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBTEkgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBUiAtLmJlbG9uZ3MgdG8uLT4gU0FcbiAgICAgICAgU0FBIC0uYmVsb25ncyB0by4tPiBTQVxuXG4gICAgICAgIHN1YmdyYXBoIFwiSGFzIGFjdGl2ZSBsb2dpbiBzZXNzaW9uXCJcbiAgICAgICAgICAgIFNBRChbUm91dGUgL2Rhc2hib2FyZF0pXG4gICAgICAgICAgICBTQUxVKFtSb3V0ZSAvYXV0aC9sb2dvdXRdKVxuICAgICAgICBlbmRcblxuICAgICAgICBzdWJncmFwaCBcIk5vIGFjdGl2ZSBsb2dpbiBzZXNzaW9uXCJcbiAgICAgICAgICAgIFNBTEkoW1JvdXRlIC9hdXRoL2xvZ2luXSkgXG4gICAgICAgICAgICBTQVIoW1JvdXRlIC9hdXRoL3JlZ2lzdHJhdGlvbl0pIFxuICAgICAgICAgICAgU0FBKFtSb3V0ZSAvYXV0aC8uLi5dKVxuICAgICAgICBlbmRcbiAgICBlbmRcbiAgICBlbmRcblxuZW5kXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoibmV1dHJhbCIsImZsb3djaGFydCI6eyJyYW5rU3BhY2luZyI6NzAsIm5vZGVTcGFjaW5nIjozMCwiY3VydmUiOiJiYXNpcyJ9fX0"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblxuc3ViZ3JhcGggcGlbUHVibGljIEludGVybmV0XVxuICAgIEJbQnJvd3Nlcl1cbmVuZFxuXG5zdWJncmFwaCB2cGNbVlBDIC8gQ2xvdWQgLyBEb2NrZXIgTmV0d29ya11cbnN1YmdyYXBoIFwiRGVtaWxpdGFyaXplZCBab25lIC8gRE1aXCJcbiAgICBPS1tPUlkgT2F0aGtlZXBlciA6NDQ1NV1cbiAgICBCIC0tPiBPS1xuZW5kXG5cbiAgICBPSyAtLT58XCJGb3J3YXJkcyB7LywvZGFzaGJvYXJkfSB0b1wifCBTQURcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvYXV0aC9sb2dvdXQgdG9cInwgU0FMVVxuICAgIE9LIC0tPnxcIkZvcndhcmRzIC9hdXRoL2xvZ2luIHRvXCJ8IFNBTElcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvYXV0aC9yZWdpc3RyYXRpb24gdG9cInwgU0FSXG4gICAgT0sgLS0-fFwiRm9yd2FyZHMgL2F1dGgvKiB0b1wifCBTQUFcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvLm9yeS9rcmF0b3MvcHVibGljLyogdG9cInwgS1BcblxuICAgIHN1YmdyYXBoIFwiUHJpdmF0ZSBTdWJuZXQgLyBJbnRyYW5ldFwiXG4gICAgS1sgT1JZIEtyYXRvcyBdXG5cbiAgICBLUChbIE9SWSBLcmF0b3MgUHVibGljIEFQSSBdKVxuICAgIEtBKFsgT1JZIEtyYXRvcyBBZG1pbiBBUEkgXSlcbiAgICBTQSAtLT4gS0FcbiAgICBLQSAtLmJlbG9uZ3MgdG8uLT4gS1xuICAgIEtQIC0uYmVsb25ncyB0by4tPiBLXG5cbiAgICBzdWJncmFwaCBzYVtcIlNlY3VyZUFwcCAvIGtyYXRvcy1zZXJsZnNlcnZpY2UtdWktbm9kZSBFeGFtcGxlXCJdXG5cbiAgICAgICAgU0FbU2VjdXJlQXBwXVxuICAgICAgICBTQUQgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBTFUgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBTEkgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBUiAtLmJlbG9uZ3MgdG8uLT4gU0FcbiAgICAgICAgU0FBIC0uYmVsb25ncyB0by4tPiBTQVxuXG4gICAgICAgIHN1YmdyYXBoIFwiSGFzIGFjdGl2ZSBsb2dpbiBzZXNzaW9uXCJcbiAgICAgICAgICAgIFNBRChbUm91dGUgL2Rhc2hib2FyZF0pXG4gICAgICAgICAgICBTQUxVKFtSb3V0ZSAvYXV0aC9sb2dvdXRdKVxuICAgICAgICBlbmRcblxuICAgICAgICBzdWJncmFwaCBcIk5vIGFjdGl2ZSBsb2dpbiBzZXNzaW9uXCJcbiAgICAgICAgICAgIFNBTEkoW1JvdXRlIC9hdXRoL2xvZ2luXSkgXG4gICAgICAgICAgICBTQVIoW1JvdXRlIC9hdXRoL3JlZ2lzdHJhdGlvbl0pIFxuICAgICAgICAgICAgU0FBKFtSb3V0ZSAvYXV0aC8uLi5dKVxuICAgICAgICBlbmRcbiAgICBlbmRcbiAgICBlbmRcblxuZW5kXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoibmV1dHJhbCIsImZsb3djaGFydCI6eyJyYW5rU3BhY2luZyI6NzAsIm5vZGVTcGFjaW5nIjozMCwiY3VydmUiOiJiYXNpcyJ9fX0",alt:"User Login and Registration Routes"})))),Object(i.b)("p",null,"In order to avoid common cross-domain issues with cookies, we're using\nORY Oathkeeper to proxy requests to ORY Kratos' Public API so that all requests\ncome from the same hostname."),Object(i.b)("h2",{id:"perform-registration-login-and-logout"},"Perform Registration, Login, and Logout"),Object(i.b)("p",null,"Enough theory! Let's start by trying to open\nthe dashboard: go to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://127.0.0.1:4455/dashboard"}),"127.0.0.1:4455/dashboard"),"."),Object(i.b)("p",null,"Check the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/quickstart"}),"Quickstart")," for the other flows!"),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"You can find all configuration files used for this quickstart guide in\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/kratos/tree/v0.3.0-alpha.1/contrib/quickstart/kratos/email-password"}),Object(i.b)("inlineCode",{parentName:"a"},"./contrib/quickstart/kratos")),"\n, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/kratos/blob/v0.3.0-alpha.1/quickstart.yml"}),Object(i.b)("inlineCode",{parentName:"a"},"./quickstart.yml")),",\nand ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/kratos/blob/v0.3.0-alpha.1/quickstart-oathkeeper.yml"}),Object(i.b)("inlineCode",{parentName:"a"},"./quickstart-oathkeeper.yml")),"."),Object(i.b)("h3",{id:"ory-oathkeeper-identity-and-access-proxy"},"ORY Oathkeeper: Identity and Access Proxy"),Object(i.b)("p",null,"All configuration for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/oathkeeper/"}),"ORY Oathkeeper")," resides in\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/kratos/blob/v0.3.0-alpha.1/contrib/quickstart/oathkeeper"}),Object(i.b)("inlineCode",{parentName:"a"},"./contrib/quickstart/oathkeeper")),"."),Object(i.b)("h4",{id:"configuration-1"},"Configuration"),Object(i.b)("p",null,"We define several configuration options for ORY Oathkeeper such as the port\nfor the proxy and where to load the access rules from."),Object(i.b)("h4",{id:"cookie-session-authenticator"},"Cookie Session Authenticator"),Object(i.b)("p",null,"The\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/docs/oathkeeper/pipeline/authn#cookie_session"}),"Cookie Session Authenticator"),"\nis enabled and points to\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../reference/api"}),"ORY Kratos' ",Object(i.b)("inlineCode",{parentName:"a"},"/sessions/whoami")," API"),". It uses the\n",Object(i.b)("inlineCode",{parentName:"p"},"ory_kratos_session")," cookie to identify if a request contains a session or not:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'}),'# ...\nauthenticators\n  cookie_session:\n    enabled: true\n    config:\n      check_session_url: http://kratos:4433/sessions/whoami\n      preserve_path: true\n      extra_from: "@this"\n      subject_from: "identity.id"\n      only:\n        - ory_kratos_session\n# ...\n')),Object(i.b)("p",null,"It's doing what the ",Object(i.b)("inlineCode",{parentName:"p"},"needsLogin")," function did in the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/quickstart"}),"Quickstart"),"."),Object(i.b)("h4",{id:"anonymous-authenticator"},"Anonymous Authenticator"),Object(i.b)("p",null,"The\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/docs/oathkeeper/pipeline/authn#anonymous"}),"Anonymous Authenticator"),"\nis useful for endpoints that do not need login, such as the registration screen:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'}),"# ...\nauthenticators\n  anonymous:\n    enabled: true\n    config:\n      subject: guest\n# ...\n")),Object(i.b)("h4",{id:"allowed-authorizer"},"Allowed Authorizer"),Object(i.b)("p",null,"The\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/docs/oathkeeper/pipeline/authz#allowed"}),"Allowed Authenticator"),"\nsimply allows all users to access the URL. Since we don't have RBAC or ACL in\nplace for this example, this will be enough."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'}),"# ...\nauthorizers\n  allowed:\n    enabled: true\n# ...\n")),Object(i.b)("h3",{id:"id-token-mutator"},"ID Token Mutator"),Object(i.b)("p",null,"The\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/docs/oathkeeper/pipeline/mutator#id_token"}),"ID Token Mutator"),"\ntakes all the available session information and puts it into a JSON Web Token\n(JWT). The protected ",Object(i.b)("inlineCode",{parentName:"p"},"SecureApp")," will now receive"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Authorization: bearer <jwt...>")),Object(i.b)("p",null,"in the HTTP Header instead of "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Cookie: ory_kratos_session=...")),Object(i.b)("p",null,"The JWT is\nsigned using a RS256 key. To verify the JWT we can use the public key provided\nby ORY Oathkeeper's JWKS API: "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4456/.well-known/jwks.json")),Object(i.b)("p",null,"You can generate the RS256 key yourself by running\n",Object(i.b)("inlineCode",{parentName:"p"},"oathkeeper credentials generate --alg RS256 > id_token.jwks.json"),"."),Object(i.b)("p",null,"We also enabled the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/docs/oathkeeper/pipeline/mutator#"}),"NoOp Mutator")," for the\nvarious other endpoints such as login and registration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'}),'mutators:\n  noop:\n    enabled: true\n\n  id_token:\n    enabled: true\n    config:\n      issuer_url: http://127.0.0.1:4455/\n      jwks_url: file:///etc/config/oathkeeper/id_token.jwks.json\n      claims: |\n        {\n          "session": {{ .Extra | toJson }}\n        }\n')),Object(i.b)("p",null,"You could obviously also use other mutators such as the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/docs/oathkeeper/pipeline/mutator#header"}),"Header Mutator")," and\nuse headers such as ",Object(i.b)("inlineCode",{parentName:"p"},"X-User-ID")," instead of the JWT."),Object(i.b)("h3",{id:"error-handling"},"Error Handling"),Object(i.b)("p",null,"We configure the error handling in such a way that a missing or invalid login\nsession (when accessed from a browser) redirects to ",Object(i.b)("inlineCode",{parentName:"p"},"/auth/login"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'}),"errors:\n  fallback:\n    - json\n\n  handlers:\n    redirect:\n      enabled: true\n      config:\n        to: http://127.0.0.1:4455/auth/login\n        when:\n          - error:\n              - unauthorized\n              - forbidden\n            request:\n              header:\n                accept:\n                  # We don't want this for application/json requests, only browser requests!\n                  - text/html\n    json:\n      enabled: true\n      config:\n        verbose: true\n")),Object(i.b)("h3",{id:"access-rules"},"Access Rules"),Object(i.b)("p",null,"We use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/gobwas/glob"}),"glob matching")," to match the HTTP\nrequests for our access rules:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'}),"access_rules:\n  matching_strategy: glob\n  repositories:\n    - file:///etc/config/oathkeeper/access-rules.yml\n")),Object(i.b)("p",null,"In ",Object(i.b)("inlineCode",{parentName:"p"},"access-rules.yml")," we define three rules. The first rule forwards all traffic\nmatching ",Object(i.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/.ory/kratos/public/")," to ORY Kratos' Public API:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/access-rules.yml"',title:'"contrib/quickstart/oathkeeper/access-rules.yml"'}),"- id: 'ory:kratos:public'\n  upstream:\n    preserve_host: true\n    url: 'http://kratos:4433'\n    strip_path: /.ory/kratos/public\n  match:\n    url: 'http://127.0.0.1:4455/.ory/kratos/public/<**>'\n    methods:\n      - GET\n      - POST\n      - PUT\n      - DELETE\n      - PATCH\n  authenticators:\n    - handler: noop\n  authorizer:\n    handler: allow\n  mutators:\n    - handler: noop\n")),Object(i.b)("p",null,"The second rule allows anonymous requests to the error page, website assets,\nlogin, registration, and the page for resending the verification email:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/access-rules.yml"',title:'"contrib/quickstart/oathkeeper/access-rules.yml"'}),"# ...\n- id: 'ory:kratos-selfservice-ui-node:anonymous'\n  upstream:\n    preserve_host: true\n    url: 'http://kratos-selfservice-ui-node:4435'\n  match:\n    url: 'http://127.0.0.1:4455/<{error,verify,auth/*,**.css,**.js}{/,}>'\n    methods:\n      - GET\n  authenticators:\n    - handler: anonymous\n  authorizer:\n    handler: allow\n  mutators:\n    - handler: noop\n")),Object(i.b)("p",null,"The final rule requires a valid session before allowing requests to the\ndashboard and user settings:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/access-rules.yml"',title:'"contrib/quickstart/oathkeeper/access-rules.yml"'}),"# ...\n- id: 'ory:kratos-selfservice-ui-node:protected'\n  upstream:\n    preserve_host: true\n    url: 'http://kratos-selfservice-ui-node:4435'\n  match:\n    url: 'http://127.0.0.1:4455/<{,debug,dashboard,settings}{/,}>'\n    methods:\n      - GET\n  authenticators:\n    - handler: cookie_session\n  authorizer:\n    handler: allow\n  mutators:\n    - handler: id_token\n  errors:\n    - handler: redirect\n      config:\n        to: http://127.0.0.1:4455/auth/login\n")),Object(i.b)("h2",{id:"cleaning-up-docker"},"Cleaning up Docker"),Object(i.b)("p",null,"To clean everything up, you need to bring down the Docker Compose environment\nand remove all mounted volumes."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"docker-compose -f quickstart.yml -f quickstart-oathkeeper.yml down -v\ndocker-compose -f quickstart.yml -f quickstart-oathkeeper.yml rm -f -s -v\n")))}b.isMDXComponent=!0},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),h=a,d=u["".concat(o,".").concat(h)]||u[h]||p[h]||i;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},325:function(e,t,n){"use strict";var a=n(0),r=n(51);t.a=function(){return Object(a.useContext)(r.a)}},326:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(327);var a=n(325);function r(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},327:function(e,t,n){"use strict";var a=n(17),r=n(36),i=n(328),o="".startsWith;a(a.P+a.F*n(329)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return o?o.call(t,a,n):t.slice(n,n+a.length)===a}})},328:function(e,t,n){var a=n(70),r=n(23);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},329:function(e,t,n){var a=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);