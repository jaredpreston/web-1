(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(9),o=(n(0),n(187)),i={id:"authz",title:"Authorizers"},c={id:"version-v0.38/pipeline/authz",title:"Authorizers",description:'An "authorizer" is responsible for properly permissioning a subject. ORY',source:"@site/versioned_docs/version-v0.38/pipeline/authz.md",permalink:"/oathkeeper/docs/pipeline/authz",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/versioned_docs/version-v0.38/pipeline/authz.md",version:"v0.38",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588844820,sidebar:"version-v0.38/docs",previous:{title:"Authenticators",permalink:"/oathkeeper/docs/pipeline/authn"},next:{title:"Mutators",permalink:"/oathkeeper/docs/pipeline/mutator"}},l=[{value:"Authorizer <code>allow</code>",id:"authorizer-allow",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Access Rule Example",id:"access-rule-example",children:[]}]},{value:"Authorizer<code>deny</code>",id:"authorizerdeny",children:[{value:"Configuration",id:"configuration-1",children:[]},{value:"Access Rule Example",id:"access-rule-example-1",children:[]}]},{value:"Authorizer <code>keto_engine_acp_ory</code>",id:"authorizer-keto_engine_acp_ory",children:[{value:"Configuration",id:"configuration-2",children:[]},{value:"Access Rule Example",id:"access-rule-example-2",children:[]}]},{value:"<code>remote</code>",id:"remote",children:[{value:"Configuration",id:"configuration-3",children:[]},{value:"Access Rule Example",id:"access-rule-example-3",children:[]}]},{value:"<code>remote_json</code>",id:"remote_json",children:[{value:"Configuration",id:"configuration-4",children:[]},{value:"Access Rule Example",id:"access-rule-example-4",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'An "authorizer" is responsible for properly permissioning a subject. ORY\nOathkeeper supports different kinds of authorizers. The list of authorizers\nincreases over time due to new features and requirements.'),Object(o.b)("p",null,'Authorizers assure that a subject, for instance a "user", has the permissions\nnecessary to access or perform a particular service. For example, an authorizer\ncan permit access to an endpoint or URL for specific subjects or "users" from a\nspecific group "admin". The authorizer permits the subjects the desired access\nto the endpoint.'),Object(o.b)("p",null,"Each authorizer has two keys:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"handler")," (string, required): Defines the handler, e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"noop"),", to be used."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"config")," (object, optional): Configures the handler. Configuration keys can\nvary for each handler.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "authorizer": {\n    "handler": "noop",\n    "config": {}\n  }\n}\n')),Object(o.b)("p",null,"There is a 1:1 mandatory relationship between an authoriser and an access rule.\nIt is not possible to configure more than one authorizer per Access Rule."),Object(o.b)("h2",{id:"authorizer-allow"},"Authorizer ",Object(o.b)("inlineCode",{parentName:"h2"},"allow")),Object(o.b)("p",null,"This authorizer permits every action allowed."),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"This handler is not configurable."),Object(o.b)("p",null,"To enable this handler, set as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Global configuration file oathkeeper.yml\nauthorizers:\n  allow:\n    # Set enabled to "true" to enable the authenticator, and "false" to disable the authenticator. Defaults to "false".\n    enabled: true\n')),Object(o.b)("h3",{id:"access-rule-example"},"Access Rule Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'$ cat ./rules.json\n\n[{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://my-app/some-route",\n    "methods": [\n      "GET"\n    ]\n  },\n  "authenticators": [{ "handler": "anonymous" }],\n  "authorizer": { "handler": "allow" },\n  "mutators": [{ "handler": "noop" }]\n}]\n\n$ curl -X GET http://my-app/some-route\n\nHTTP/1.0 200 Status OK\nThe request has been allowed!\n')),Object(o.b)("h2",{id:"authorizerdeny"},"Authorizer",Object(o.b)("inlineCode",{parentName:"h2"},"deny")),Object(o.b)("p",null,'This authorizer considers every action unauthorized therefore "forbidden" or\n"disallowed".'),Object(o.b)("h3",{id:"configuration-1"},"Configuration"),Object(o.b)("p",null,"This handler is not configurable."),Object(o.b)("p",null,"To enable this handler, set:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Global configuration file oathkeeper.yml\nauthorizers:\n  deny:\n    # Set enabled to "true" to enable the authenticator, and "false" to disable the authenticator. Defaults to "false".\n    enabled: true\n')),Object(o.b)("h3",{id:"access-rule-example-1"},"Access Rule Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'$ cat ./rules.json\n\n[{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://my-app/some-route",\n    "methods": [\n      "GET"\n    ]\n  },\n  "authenticators": [{ "handler": "anonymous" }],\n  "authorizer": { "handler": "deny" },\n  "mutators": [{ "handler": "noop" }]\n}]\n\n$ curl -X GET http://my-app/some-route\n\nHTTP/1.0 403 Forbidden\nThe request is forbidden!\n')),Object(o.b)("h2",{id:"authorizer-keto_engine_acp_ory"},"Authorizer ",Object(o.b)("inlineCode",{parentName:"h2"},"keto_engine_acp_ory")),Object(o.b)("p",null,'This authorizer uses the ORY Keto API to carry out access control using\n"ORY-flavored" Access Control Policies. The conventions used in the ORY Keto\nproject are located on ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/keto"}),"GitHub ORY Keto")," for\nconsultation prior to using this authorizer."),Object(o.b)("h3",{id:"configuration-2"},"Configuration"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"base_url")," (string, required) - The base URL of ORY Keto, typically something\nlike https://hostname:port/"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"required_action")," (string, required) - See section below."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"required_resource")," (string, required) - See section below."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"subject")," (string, optional) - See section below."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"flavor")," (string, optional) - See section below.")),Object(o.b)("h4",{id:"resource-action-subject"},"Resource, Action, Subject"),Object(o.b)("p",null,"This authorizer has four configuration options, ",Object(o.b)("inlineCode",{parentName:"p"},"required_action"),",\n",Object(o.b)("inlineCode",{parentName:"p"},"required_resource"),", ",Object(o.b)("inlineCode",{parentName:"p"},"subject"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"flavor"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "handler": "keto_engine_acp_ory",\n  "config": {\n    "required_action": "...",\n    "required_resource": "...",\n    "subject": "...",\n    "flavor": "..."\n  }\n}\n')),Object(o.b)("p",null,"All configuration options except ",Object(o.b)("inlineCode",{parentName:"p"},"flavor")," support Go\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://golang.org/pkg/text/template/"}),Object(o.b)("inlineCode",{parentName:"a"},"text/template")),". For example in the\nfollowing match configuration:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "match": {\n    "url": "http://my-app/api/users/<[0-9]+>/<[a-zA-Z]+>",\n    "methods": ["GET"]\n  }\n}\n')),Object(o.b)("p",null,"The following example shows how to reference the values matched by or resulting\nfrom the two regular expressions, ",Object(o.b)("inlineCode",{parentName:"p"},"<[0-9]+>")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<[a-zA-Z]+>"),". using the\n",Object(o.b)("inlineCode",{parentName:"p"},"AuthenticationSession")," struct:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "handler": "keto_engine_acp_ory",\n  "config": {\n    "required_action": "my:action:{{ printIndex .MatchContext.RegexpCaptureGroups 0 }}",\n    "required_resource": "my:resource:{{ printIndex .MatchContext.RegexpCaptureGroups 1 }}:foo:{{ printIndex .MatchContext.RegexpCaptureGroups 0 }}"\n  }\n}\n')),Object(o.b)("p",null,"Assuming a request to ",Object(o.b)("inlineCode",{parentName:"p"},"http://my-api/api/users/1234/foobar")," was made, the config\nfrom above would expand to:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "handler": "keto_engine_acp_ory",\n  "config": {\n    "required_action": "my:action:1234",\n    "required_resource": "my:resource:foobar:foo:1234"\n  }\n}\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"subject")," field configures the subject that passes to the ORY Keto endpoint.\nIf ",Object(o.b)("inlineCode",{parentName:"p"},"subject")," is not specified it will default to\n",Object(o.b)("inlineCode",{parentName:"p"},"AuthenticationSession.Subject"),"."),Object(o.b)("p",null,"For more details about supported Go template substitution, see.\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/oathkeeper/docs/pipeline/index#session"}),"How to use session variables")),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Global configuration file oathkeeper.yml\nauthorizers:\n  keto_engine_acp_ory:\n    # Set enabled to "true" to enable the authenticator, and "false" to disable the authenticator. Defaults to "false".\n    enabled: true\n\n    config:\n      base_url: http://my-keto/\n      required_action: ...\n      required_resource: ...\n      subject: ...\n      flavor: ...\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Some Access Rule: access-rule-1.yaml\nid: access-rule-1\n# match: ...\n# upstream: ...\nauthorizers:\n  - handler: keto_engine_acp_ory\n    config:\n      base_url: http://my-keto/\n      required_action: ...\n      required_resource: ...\n      subject: ...\n      flavor: ...\n")),Object(o.b)("h3",{id:"access-rule-example-2"},"Access Rule Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'$ cat ./rules.json\n\n[{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://my-app/api/users/<[0-9]+>/<[a-zA-Z]+>",\n    "methods": [\n      "GET"\n    ]\n  },\n  "authenticators": [\n    {\n      "handler": "anonymous"\n    }\n  ],\n  "authorizer": {\n    "handler": "keto_engine_acp_ory",\n    "config": {\n      "required_action": "my:action:$1",\n      "required_resource": "my:resource:$2:foo:$1"\n      "subject": "{{ .Extra.email }}",\n      "flavor": "exact"\n    }\n  }\n  "mutators": [\n    {\n      "handler": "noop"\n    }\n  ]\n}]\n')),Object(o.b)("h2",{id:"remote"},Object(o.b)("inlineCode",{parentName:"h2"},"remote")),Object(o.b)("p",null,'This authorizer performs authorization using a remote authorizer. The authorizer\nmakes a HTTP POST request to a remote endpoint with the original body request as\nbody. If the endpoint returns a "200 OK" response code, the access is allowed,\nif it returns a "403 Forbidden" response code, the access is denied.'),Object(o.b)("h3",{id:"configuration-3"},"Configuration"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"remote"),' (string, required) - The remote authorizer\'s URL. The remote\nauthorizer is expected to return either "200 OK" or "403 Forbidden" to\nallow/deny access.'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"headers")," (map of strings, optional) - The HTTP headers sent to the remote\nauthorizer. The values will be parsed by the Go\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://golang.org/pkg/text/template/"}),Object(o.b)("inlineCode",{parentName:"a"},"text/template"))," package and applied\nto an\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/blob/master/pipeline/authn/authenticator.go#L40"}),Object(o.b)("inlineCode",{parentName:"a"},"AuthenticationSession")),"\nobject. See ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oathkeeper/docs/pipeline/index#session"}),"Session")," for more details.")),Object(o.b)("h4",{id:"example-1"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Global configuration file oathkeeper.yml\nauthorizers:\n  remote:\n    # Set enabled to "true" to enable the authenticator, and "false" to disable the authenticator. Defaults to "false".\n    enabled: true\n\n    config:\n      remote: http://my-remote-authorizer/authorize\n      headers:\n        X-Subject: \'{{ print .Subject }}\'\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Some Access Rule: access-rule-1.yaml\nid: access-rule-1\n# match: ...\n# upstream: ...\nauthorizers:\n  - handler: remote\n    config:\n      remote: http://my-remote-authorizer/authorize\n      headers:\n        X-Subject: '{{ print .Subject }}'\n")),Object(o.b)("h3",{id:"access-rule-example-3"},"Access Rule Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://my-app/api/<.*>",\n    "methods": ["GET"]\n  },\n  "authenticators": [\n    {\n      "handler": "anonymous"\n    }\n  ],\n  "authorizer": {\n    "handler": "remote",\n    "config": {\n      "remote": "http://my-remote-authorizer/authorize",\n      "headers": {\n        "X-Subject": "{{ print .Subject }}"\n      }\n    }\n  }\n  "mutators": [\n    {\n      "handler": "noop"\n    }\n  ]\n}\n')),Object(o.b)("h2",{id:"remote_json"},Object(o.b)("inlineCode",{parentName:"h2"},"remote_json")),Object(o.b)("p",null,'This authorizer performs authorization using a remote authorizer. The authorizer\nmakes a HTTP POST request to a remote endpoint with a JSON body. If the endpoint\nreturns a "200 OK" response code, the access is allowed, if it returns a "403\nForbidden" response code, the access is denied.'),Object(o.b)("h3",{id:"configuration-4"},"Configuration"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"remote"),' (string, required) - The remote authorizer\'s URL. The remote\nauthorizer is expected to return either "200 OK" or "403 Forbidden" to\nallow/deny access.'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"payload")," (string, required) - The request's JSON payload sent to the remote\nauthorizer. The string will be parsed by the Go\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://golang.org/pkg/text/template/"}),Object(o.b)("inlineCode",{parentName:"a"},"text/template"))," package and applied\nto an\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper/blob/master/pipeline/authn/authenticator.go#L40"}),Object(o.b)("inlineCode",{parentName:"a"},"AuthenticationSession")),"\nobject. See ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oathkeeper/docs/pipeline/index#session"}),"Session")," for more details.")),Object(o.b)("h4",{id:"example-2"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Global configuration file oathkeeper.yml\nauthorizers:\n  remote_json:\n    # Set enabled to "true" to enable the authenticator, and "false" to disable the authenticator. Defaults to "false".\n    enabled: true\n\n    config:\n      remote: http://my-remote-authorizer/authorize\n      payload: |\n        {\n          "subject": "{{ print .Subject }}",\n          "resource": "{{ printIndex .MatchContext.RegexpCaptureGroups 0 }}"\n        }\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Some Access Rule: access-rule-1.yaml\nid: access-rule-1\n# match: ...\n# upstream: ...\nauthorizers:\n  - handler: remote_json\n    config:\n      remote: http://my-remote-authorizer/authorize\n      payload: |\n        {\n          "subject": "{{ print .Subject }}",\n          "resource": "{{ printIndex .MatchContext.RegexpCaptureGroups 0 }}"\n        }\n')),Object(o.b)("h3",{id:"access-rule-example-4"},"Access Rule Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://my-app/api/<.*>",\n    "methods": ["GET"]\n  },\n  "authenticators": [\n    {\n      "handler": "anonymous"\n    }\n  ],\n  "authorizer": {\n    "handler": "remote_json",\n    "config": {\n      "remote": "http://my-remote-authorizer/authorize",\n      "payload": "{\\"subject\\": \\"{{ print .Subject }}\\", \\"resource\\": \\"{{ printIndex .MatchContext.RegexpCaptureGroups 0 }}\\"}"\n    }\n  }\n  "mutators": [\n    {\n      "handler": "noop"\n    }\n  ]\n}\n')))}u.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(h,c(c({ref:t},s),{},{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);