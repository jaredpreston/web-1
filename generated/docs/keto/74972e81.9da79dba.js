(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{76:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(2),o=t(6),i=(t(0),t(97)),c={id:"acp-ory",title:"ORY Access Control Policies"},r={unversionedId:"engines/acp-ory",id:"engines/acp-ory",isDocsHomePage:!1,title:"ORY Access Control Policies",description:"At ORY, we use an Access Control Policy DSL modeled after AWS IAM Policies.",source:"@site/docs/engines/acp-ory.md",slug:"/engines/acp-ory",permalink:"/keto/docs/next/engines/acp-ory",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/engines/acp-ory.md",version:"current",lastUpdatedBy:"hackerman",lastUpdatedAt:1586170560,sidebar:"docs",previous:{title:"Role Based Access Control (RBAC)",permalink:"/keto/docs/next/engines/rbac"},next:{title:"AWS IAM Policies",permalink:"/keto/docs/next/engines/acp-aws"}},s=[{value:"Precedence",id:"precedence",children:[]},{value:"Pattern Matching Strategies",id:"pattern-matching-strategies",children:[{value:"Case Sensitive Equality",id:"case-sensitive-equality",children:[]},{value:"Glob Pattern Matching",id:"glob-pattern-matching",children:[]},{value:"Regular Expressions",id:"regular-expressions",children:[]},{value:"Computational Overhead",id:"computational-overhead",children:[]}]},{value:"Conditions",id:"conditions",children:[{value:"CIDR Condition",id:"cidr-condition",children:[]},{value:"String Match Condition",id:"string-match-condition",children:[]},{value:"Subject Condition",id:"subject-condition",children:[]},{value:"String Pairs Equal Condition",id:"string-pairs-equal-condition",children:[]}]},{value:"Roles",id:"roles",children:[]},{value:"Implementation Status",id:"implementation-status",children:[]},{value:"Best Practices",id:"best-practices",children:[{value:"URNs",id:"urns",children:[]},{value:"Scope the Organization Name",id:"scope-the-organization-name",children:[]},{value:"Scope Actions, Resources and Subjects",id:"scope-actions-resources-and-subjects",children:[]},{value:"Multi-Tenant Systems",id:"multi-tenant-systems",children:[]}]}],l={rightToc:s};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"At ORY, we use an Access Control Policy DSL modeled after AWS IAM Policies.\nThese policies define ",Object(i.b)("inlineCode",{parentName:"p"},"effects")," for ",Object(i.b)("inlineCode",{parentName:"p"},"subjects")," who perform ",Object(i.b)("inlineCode",{parentName:"p"},"actions")," on\n",Object(i.b)("inlineCode",{parentName:"p"},"resources"),". For example, ",Object(i.b)("inlineCode",{parentName:"p"},"Alice")," (subject aka identity aka user) is ",Object(i.b)("inlineCode",{parentName:"p"},"allowed"),"\n(effect) to ",Object(i.b)("inlineCode",{parentName:"p"},"delete")," (action) blog article with ID ",Object(i.b)("inlineCode",{parentName:"p"},"my-first-blog-post"),"\n(",Object(i.b)("inlineCode",{parentName:"p"},"resource"),"). This is comparable to how ACLs work:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subjects": ["alice"],\n  "resources": ["blog_posts:my-first-blog-post"],\n  "actions": ["delete"],\n  "effect": "allow"\n}\n')),Object(i.b)("p",null,"The policy above allows ",Object(i.b)("inlineCode",{parentName:"p"},"Alice")," to ",Object(i.b)("inlineCode",{parentName:"p"},"delete")," ",Object(i.b)("inlineCode",{parentName:"p"},"blog_posts:my-first-blog-post"),". We\ncould apply this policy to more subjects and also more actions or resources, if\nwe want to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subjects": ["alice", "bob"],\n  "resources": [\n    "blog_posts:my-first-blog-post",\n    "blog_posts:2",\n    "blog_posts:3"\n  ],\n  "actions": ["delete", "create", "read", "modify"],\n  "effect": "allow"\n}\n')),Object(i.b)("p",null,"Well, this looks like ACL in disguise so far. So what's different?"),Object(i.b)("h2",{id:"precedence"},"Precedence"),Object(i.b)("p",null,"The first difference is that we can explicitly deny access:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subjects": ["peter"],\n  "resources": [\n    "blog_posts:my-first-blog-post",\n    "blog_posts:2",\n    "blog_posts:3"\n  ],\n  "actions": ["delete", "create", "read", "modify"],\n  "effect": "deny"\n}\n')),Object(i.b)("p",null,"The policy decision point (the one checking if something is allowed or not)\napplies the following rule set when deciding if something is allowed or not:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"If a policy for a given subject, action, and resource matches, and the effect\nis ",Object(i.b)("inlineCode",{parentName:"li"},"deny"),", the request is always denied."),Object(i.b)("li",{parentName:"ol"},"If no policy with effect ",Object(i.b)("inlineCode",{parentName:"li"},"deny")," matches, and at least one policy with effect\n",Object(i.b)("inlineCode",{parentName:"li"},"allow"),", the request is allowed."),Object(i.b)("li",{parentName:"ol"},"If no policies match at all, the request is denied.")),Object(i.b)("h2",{id:"pattern-matching-strategies"},"Pattern Matching Strategies"),Object(i.b)("p",null,"ORY Keto has implements several ORY ACP pattern matching strategies."),Object(i.b)("h3",{id:"case-sensitive-equality"},"Case Sensitive Equality"),Object(i.b)("p",null,"The easiest pattern matching strategy is the case sensitive equality check. This\nstrategy simply checks if two strings are exactly the same. Assuming a policy\ndefines ",Object(i.b)("inlineCode",{parentName:"p"},'{"subjects": ["alice", "boB"] }'),", then it will match exactly subjects\n",Object(i.b)("inlineCode",{parentName:"p"},"alice")," and ",Object(i.b)("inlineCode",{parentName:"p"},"boB"),"."),Object(i.b)("h3",{id:"glob-pattern-matching"},"Glob Pattern Matching"),Object(i.b)("p",null,"ORY Keto supports matching URNs with glob pattern matching. Policy"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subjects": ["users:*"],\n  "actions": ["get", "create"],\n  "resources": ["resources:articles:*", "resources:{accounts,profiles}:*"],\n  "effect": "allow"\n}\n')),Object(i.b)("p",null,"for example will match the following inputs:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subject": "users:maria",\n  "action": "get",\n  "resource": "resources:profiles:foo"\n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},":")," is a delimiter in ORY Access Control Policies. Other supported syntax\nis:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"single symbol wildcard:")," ",Object(i.b)("inlineCode",{parentName:"li"},"?at")," matches ",Object(i.b)("inlineCode",{parentName:"li"},"cat")," and ",Object(i.b)("inlineCode",{parentName:"li"},"bat")," but not ",Object(i.b)("inlineCode",{parentName:"li"},"at")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"wildcard:")," ",Object(i.b)("inlineCode",{parentName:"li"},"foo:*:bar")," matches ",Object(i.b)("inlineCode",{parentName:"li"},"foo:baz:bar")," and ",Object(i.b)("inlineCode",{parentName:"li"},"foo:zab:bar")," but not\n",Object(i.b)("inlineCode",{parentName:"li"},"foo:bar")," nor ",Object(i.b)("inlineCode",{parentName:"li"},"foo:baz:baz:bar")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"super wildcard:")," ",Object(i.b)("inlineCode",{parentName:"li"},"foo:**:bar")," matches ",Object(i.b)("inlineCode",{parentName:"li"},"foo:baz:baz:bar"),", ",Object(i.b)("inlineCode",{parentName:"li"},"foo:baz:bar"),", and\n",Object(i.b)("inlineCode",{parentName:"li"},"foo:bar"),", but not ",Object(i.b)("inlineCode",{parentName:"li"},"foobar")," or ",Object(i.b)("inlineCode",{parentName:"li"},"foo:baz")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"character list:")," ",Object(i.b)("inlineCode",{parentName:"li"},"[cb]at")," matches ",Object(i.b)("inlineCode",{parentName:"li"},"cat")," and ",Object(i.b)("inlineCode",{parentName:"li"},"bat")," but not ",Object(i.b)("inlineCode",{parentName:"li"},"mat")," nor ",Object(i.b)("inlineCode",{parentName:"li"},"at"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"negated character list:")," ",Object(i.b)("inlineCode",{parentName:"li"},"[!cb]at")," matches ",Object(i.b)("inlineCode",{parentName:"li"},"tat")," and ",Object(i.b)("inlineCode",{parentName:"li"},"mat")," but not ",Object(i.b)("inlineCode",{parentName:"li"},"cat"),"\nnor ",Object(i.b)("inlineCode",{parentName:"li"},"bat"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"ranged character list:")," ",Object(i.b)("inlineCode",{parentName:"li"},"[a-c]at")," ",Object(i.b)("inlineCode",{parentName:"li"},"cat")," and ",Object(i.b)("inlineCode",{parentName:"li"},"bat")," but not ",Object(i.b)("inlineCode",{parentName:"li"},"mat")," nor ",Object(i.b)("inlineCode",{parentName:"li"},"at"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"negated ranged character list:")," ",Object(i.b)("inlineCode",{parentName:"li"},"[!a-c]at")," matches ",Object(i.b)("inlineCode",{parentName:"li"},"mat")," and ",Object(i.b)("inlineCode",{parentName:"li"},"tat")," but not\n",Object(i.b)("inlineCode",{parentName:"li"},"cat")," nor ",Object(i.b)("inlineCode",{parentName:"li"},"bat"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"alternatives list:")," ",Object(i.b)("inlineCode",{parentName:"li"},"{cat,bat,[mt]at}")," matches ",Object(i.b)("inlineCode",{parentName:"li"},"cat"),", ",Object(i.b)("inlineCode",{parentName:"li"},"bat"),", ",Object(i.b)("inlineCode",{parentName:"li"},"mat"),", ",Object(i.b)("inlineCode",{parentName:"li"},"tat"),"\nand nothing else."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"backslash:")," ",Object(i.b)("inlineCode",{parentName:"li"},"foo\\\\bar")," matches ",Object(i.b)("inlineCode",{parentName:"li"},"foo\\bar")," and nothing else. ",Object(i.b)("inlineCode",{parentName:"li"},"foo\\bar"),"\nmatches ",Object(i.b)("inlineCode",{parentName:"li"},"foobar")," and nothing else. ",Object(i.b)("inlineCode",{parentName:"li"},"foo\\*bar")," matches ",Object(i.b)("inlineCode",{parentName:"li"},"foo*bar")," and nothing\nelse. Please note that when using JSON you need to double escape backslashes:\n",Object(i.b)("inlineCode",{parentName:"li"},"foo\\\\bar")," becomes ",Object(i.b)("inlineCode",{parentName:"li"},'{"...": "foo\\\\\\\\bar"}'),".")),Object(i.b)("p",null,"The pattern syntax is:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"  pattern:\n      { term }\n\n  term:\n      `*`         matches any sequence of non-separator characters\n      `**`        matches any sequence of characters\n      `?`         matches any single non-separator character\n      `[` [ `!` ] { character-range } `]`\n                  character class (must be non-empty)\n      `{` pattern-list `}`\n                  pattern alternatives\n      c           matches character c (c != `*`, `**`, `?`, `\\`, `[`, `{`, `}`)\n      `\\` c       matches character c\n\n  character-range:\n      c           matches character c (c != `\\\\`, `-`, `]`)\n      `\\` c       matches character c\n      lo `-` hi   matches character c for lo <= c <= hi\n\n  pattern-list:\n      pattern { `,` pattern }\n                  comma-separated (without spaces) patterns\n")),Object(i.b)("h3",{id:"regular-expressions"},"Regular Expressions"),Object(i.b)("p",null,"ORY Keto also allows pattern matching with regular expressions. This depend on\nhow you name your subjects, resources, and actions. More on that topic in the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#best-practices"}),"Best Practices")," section."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subjects": ["users:<.*>"]\n}\n')),Object(i.b)("p",null,"In this example, the (incomplete) policy would match every subject that is\nprefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"users:"),", so for example ",Object(i.b)("inlineCode",{parentName:"p"},"users:alice"),", ",Object(i.b)("inlineCode",{parentName:"p"},"users:bob"),". ORY Ladon and\nORY Keto delimit regular expressions with ",Object(i.b)("inlineCode",{parentName:"p"},"<")," and ",Object(i.b)("inlineCode",{parentName:"p"},">"),". For example, ",Object(i.b)("inlineCode",{parentName:"p"},'"users:.*"'),"\nis not a valid regular expression, just a simple string."),Object(i.b)("p",null,"The next example will allow all subjects with prefix ",Object(i.b)("inlineCode",{parentName:"p"},"user:")," to read\n(",Object(i.b)("inlineCode",{parentName:"p"},"actions:read"),") all resources that match ",Object(i.b)("inlineCode",{parentName:"p"},"resources:blog_posts:<[0-9]+>")," (e.g.\n",Object(i.b)("inlineCode",{parentName:"p"},"resources:blog_posts:1234")," but not ",Object(i.b)("inlineCode",{parentName:"p"},"resources:blog_posts:abcde"),"):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subjects": ["users:<.*>"],\n  "resources": ["resources:blog_posts:<[0-9]+>"],\n  "actions": ["actions:read"],\n  "effect": "allow"\n}\n')),Object(i.b)("h3",{id:"computational-overhead"},"Computational Overhead"),Object(i.b)("p",null,"Some pattern matching strategies can introduce computational complexity.\nConsider the performance implications when choosing an approach:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Case sensitive equality: no computational overhead"),Object(i.b)("li",{parentName:"ul"},"Glob pattern matching: little computational overhead"),Object(i.b)("li",{parentName:"ul"},"Regex: considerable computational overhead")),Object(i.b)("h2",{id:"conditions"},"Conditions"),Object(i.b)("p",null,"So far, we covered that an ORY ACP applies to a list of ",Object(i.b)("inlineCode",{parentName:"p"},"subjects"),", ",Object(i.b)("inlineCode",{parentName:"p"},"resources"),",\nand ",Object(i.b)("inlineCode",{parentName:"p"},"actions"),". Conditions narrow down the use cases in which a certain ACP\napplies. A condition may, for example, mandate that the IP Address of the client\nmaking the request has to match ",Object(i.b)("inlineCode",{parentName:"p"},"192.168.0.0/16")," or that the subject is also the\nowner of the resource. Here is an example for the former condition:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "description": "One policy to rule them all",\n  "subjects": ["users:maria"],\n  "actions": ["delete", "create", "update"],\n  "effect": "allow",\n  "resources": ["resources:articles:<.*>"],\n  "conditions": {\n    "remoteIPAddress": {\n      "type": "CIDRCondition",\n      "options": {\n        "cidr": "192.168.0.0/16"\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,"Conditions are a part of policies. They determine if a policy can decide the\ncurrent access request in the current context. Context is the larger environment\nin which the access request happens. A condition has this JSON format:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subjects": ["..."],\n  "actions": ["..."],\n  "effect": "allow",\n  "resources": ["..."],\n  "conditions": {\n    "this-key-will-be-matched-with-the-context": {\n      "type": "SomeConditionType",\n      "options": {\n        "some": "configuration options set by the condition type"\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,"Conditions are functions returning true or false given a context. Because\nconditions implement logic, they must be programmed. ORY Keto provides the\nfollowing commonly used conditions out of the box. You can improve or extend\nthem."),Object(i.b)("h3",{id:"cidr-condition"},"CIDR Condition"),Object(i.b)("p",null,"The CIDR condition matches CIDR IP Ranges. A possible policy definition could\nlook like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "description": "One policy to rule them all.",\n  "subjects": ["users:maria"],\n  "actions": ["delete", "create", "update"],\n  "effect": "allow",\n  "resources": ["resources:articles:<.*>"],\n  "conditions": {\n    "remoteIPAddress": {\n      "type": "CIDRCondition",\n      "options": {\n        "cidr": "192.168.0.0/16"\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,"The following access request would be allowed."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subject": "users:maria",\n  "action": "delete",\n  "resource": "resources:articles:12345",\n  "context": {\n    "remoteIPAddress": "192.168.0.5"\n  }\n}\n')),Object(i.b)("p",null,"The next access request would be denied as the condition is not fulfilled and\nthus no policy matches."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subject": "users:maria",\n  "action": "delete",\n  "resource": "resources:articles:12345",\n  "context": {\n    "remoteIPAddress": "255.255.0.0"\n  }\n}\n')),Object(i.b)("p",null,"The next access request would also be denied as the context is not using the key\n",Object(i.b)("inlineCode",{parentName:"p"},"remoteIPAddress")," but instead ",Object(i.b)("inlineCode",{parentName:"p"},"someOtherKey"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subject": "users:maria",\n  "action": "delete",\n  "resource": "resources:articles:12345",\n  "context": {\n    "someOtherKey": "192.168.0.5"\n  }\n}\n')),Object(i.b)("h5",{id:"string-equal-condition"},"String Equal Condition"),Object(i.b)("p",null,"This condition matches if the value passed in the access request's context is\nidentical with the string defined in the condition."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "description": "One policy to rule them all.",\n  "subjects": ["users:maria"],\n  "actions": ["delete", "create", "update"],\n  "effect": "allow",\n  "resources": ["resources:articles:<.*>"],\n  "conditions": {\n    "myKey": {\n      "type": "StringEqualCondition",\n      "options": {\n        "equals": "expected-value"\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,"The following access request would be allowed."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subject": "users:maria",\n  "action": "delete",\n  "resource": "resources:articles:12345",\n  "context": {\n    "myKey": "expected-value"\n  }\n}\n')),Object(i.b)("p",null,"The following access request would be denied."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subject": "users:maria",\n  "action": "delete",\n  "resource": "resources:articles:12345",\n  "context": {\n    "meKey": "another-value"\n  }\n}\n')),Object(i.b)("h3",{id:"string-match-condition"},"String Match Condition"),Object(i.b)("p",null,"This condition applies when the value passed in the access request's context\nmatches the regular expression in the condition."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "description": "One policy to rule them all.",\n  "subjects": ["users:maria"],\n  "actions": ["delete", "create", "update"],\n  "effect": "allow",\n  "resources": ["resources:articles:<.*>"],\n  "conditions": {\n    "someKeyName": {\n      "type": "StringMatchCondition",\n      "options": {\n        "matches": "foo.+"\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,"The following access request would be allowed."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subject": "users:maria",\n  "action": "delete",\n  "resource": "resources:articles:12345",\n  "context": {\n    "someKeyName": "foo-bar"\n  }\n}\n')),Object(i.b)("p",null,"The following access request would be denied."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subject": "users:maria",\n  "action": "delete",\n  "resource": "resources:articles:12345",\n  "context": {\n    "someKeyName": "bar"\n  }\n}\n')),Object(i.b)("h3",{id:"subject-condition"},"Subject Condition"),Object(i.b)("p",null,"This condition matches when the access request's subject is identical with the\nstring specified in the condition."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "description": "One policy to rule them all.",\n  "subjects": ["users:maria"],\n  "actions": ["delete", "create", "update"],\n  "effect": "allow",\n  "resources": ["resources:articles:<.*>"],\n  "conditions": {\n    "owner": {\n      "type": "EqualsSubjectCondition",\n      "options": {}\n    }\n  }\n}\n')),Object(i.b)("p",null,"The following access request would be allowed."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subject": "users:maria",\n  "action": "delete",\n  "resource": "resources:articles:12345",\n  "context": {\n    "owner": "users:maria"\n  }\n}\n')),Object(i.b)("p",null,"The following access request would be denied."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subject": "users:maria",\n  "action": "delete",\n  "resource": "resources:articles:12345",\n  "context": {\n    "owner": "another-user"\n  }\n}\n')),Object(i.b)("p",null,"This condition makes sense together with access tokens, where the subject is\nextracted from the token."),Object(i.b)("h3",{id:"string-pairs-equal-condition"},"String Pairs Equal Condition"),Object(i.b)("p",null,"This condition matches when the value passed in the access request's context\ncontains two-element arrays and both elements in each pair are equal."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "description": "One policy to rule them all.",\n  "subjects": ["users:maria"],\n  "actions": ["delete", "create", "update"],\n  "effect": "allow",\n  "resources": ["resources:articles:<.*>"],\n  "conditions": {\n    "someKey": {\n      "type": "StringPairsEqualCondition",\n      "options": {}\n    }\n  }\n}\n')),Object(i.b)("p",null,"The following access request would be allowed."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subject": "users:maria",\n  "action": "delete",\n  "resource": "resources:articles:12345",\n  "context": {\n    "someKey": [\n      ["foo", "foo"],\n      ["bar", "bar"]\n    ]\n  }\n}\n')),Object(i.b)("p",null,"The following access request would be denied."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subject": "users:maria",\n  "action": "delete",\n  "resource": "resources:articles:12345",\n  "context": {\n    "someKey": [["foo", "bar"]]\n  }\n}\n')),Object(i.b)("h2",{id:"roles"},"Roles"),Object(i.b)("p",null,"Similar to RBAC, ORY ACPs support the concept of roles. This feature allows\ngrouping a number of subjects under the same role. Whenever making a request to\nthe Allowed API, it will check the roles of a subject (if there are any) and use\nthem when looking up the ",Object(i.b)("inlineCode",{parentName:"p"},"subjects")," field."),Object(i.b)("p",null,"Assuming the following policies:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subjects": ["bob"],\n  "resources": ["blog_posts:my-first-blog-post"],\n  "actions": ["create"],\n  "effect": "allow"\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subjects": ["admin"],\n  "resources": ["blog_posts:my-first-blog-post"],\n  "actions": ["delete"],\n  "effect": "allow"\n}\n')),Object(i.b)("p",null,"As you can see, ",Object(i.b)("inlineCode",{parentName:"p"},"bob")," is allowed to create resource\n",Object(i.b)("inlineCode",{parentName:"p"},"blog_posts:my-first-blog-post")," and ",Object(i.b)("inlineCode",{parentName:"p"},"admin")," is allowed to delete it. Making the\nfollowing request to the Allowed API"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "subject": "bob",\n  "action" : "delete",\n  "resource": "blog_posts:my-first-blog-post"\n}\n')),Object(i.b)("p",null,"will return ",Object(i.b)("inlineCode",{parentName:"p"},'{ "allowed": false }')," while this request"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "subject": "admin",\n  "action" : "delete",\n  "resource": "blog_posts:my-first-blog-post"\n}\n')),Object(i.b)("p",null,"will return ",Object(i.b)("inlineCode",{parentName:"p"},'{ "allowed": true }'),"."),Object(i.b)("h2",{id:"implementation-status"},"Implementation Status"),Object(i.b)("p",null,"ORY Access Control Policies (regex, glob, equality) are first-class citizens."),Object(i.b)("h2",{id:"best-practices"},"Best Practices"),Object(i.b)("p",null,"This sections gives an overview of best practices for access control policies we\ndeveloped over the years at ORY."),Object(i.b)("h3",{id:"urns"},"URNs"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u201cThere are only two hard things in Computer Science: cache invalidation,\nnaming things, and off-by-one errors.\u201d -- Phil Karlton")),Object(i.b)("p",null,"URN naming is as hard as naming API endpoints. Thankfully, doing the latter\ntypically provides a solution for the former as well."),Object(i.b)("h3",{id:"scope-the-organization-name"},"Scope the Organization Name"),Object(i.b)("p",null,"It is good security practice is to prefix resource names with a domain that\nrepresents the organization creating the software."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Do not:")," ",Object(i.b)("inlineCode",{parentName:"li"},"my-resource")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Do:")," ",Object(i.b)("inlineCode",{parentName:"li"},"myorg.com:my-resource"))),Object(i.b)("h3",{id:"scope-actions-resources-and-subjects"},"Scope Actions, Resources and Subjects"),Object(i.b)("p",null,"Provide a scope for actions, resources, and subjects to prevent name collisions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Do not:")," ",Object(i.b)("inlineCode",{parentName:"li"},"myorg.com:<subject-id>"),", ",Object(i.b)("inlineCode",{parentName:"li"},"myorg.com:<resource-id>"),",\n",Object(i.b)("inlineCode",{parentName:"li"},"myorg.com:<action-id>")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Do:")," ",Object(i.b)("inlineCode",{parentName:"li"},"myorg.com:subjects:<subject-id>"),",\n",Object(i.b)("inlineCode",{parentName:"li"},"myorg.com:resources:<resource-id>"),", ",Object(i.b)("inlineCode",{parentName:"li"},"myorg.com:actions:<action-id>")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Do:")," ",Object(i.b)("inlineCode",{parentName:"li"},"subjects:myorg.com:<subject-id>"),",\n",Object(i.b)("inlineCode",{parentName:"li"},"resources:myorg.com:<resource-id>"),", ",Object(i.b)("inlineCode",{parentName:"li"},"actions:myorg.com:<action-id>"))),Object(i.b)("h3",{id:"multi-tenant-systems"},"Multi-Tenant Systems"),Object(i.b)("p",null,"Multi-tenant systems typically have resources which should not be accessed by\nother tenants in the system. This can be achieved by adding the tenant id to the\nURN:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Do:")," ",Object(i.b)("inlineCode",{parentName:"li"},"resources:myorg.com:tenants:<tenant-id>:<resource-id>"))),Object(i.b)("p",null,"Some environments have organizations and projects belonging to those\norganizations. The following URN semantics can be used in these situations:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Do:"),Object(i.b)("inlineCode",{parentName:"li"},"resources:myorg.com:organizations:<organization-id>:projects:<project-id>:<resource-id>"))))}b.isMDXComponent=!0},97:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),b=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=b(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(t),d=a,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return t?o.a.createElement(m,r(r({ref:n},l),{},{components:t})):o.a.createElement(m,r({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var l=2;l<i;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);