(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{338:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),i=(a(0),a(422)),s={id:"security",title:"Threat Models and Security Profiles"},o={unversionedId:"concepts/security",id:"version-v0.4/concepts/security",isDocsHomePage:!1,title:"Threat Models and Security Profiles",description:"Running any software that stores personal information exposes the",source:"@site/versioned_docs/version-v0.4/concepts/security.mdx",slug:"/concepts/security",permalink:"/kratos/docs/v0.4/concepts/security",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/concepts/security.mdx",version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594643414,sidebar:"version-v0.4/docs",previous:{title:"Federation",permalink:"/kratos/docs/v0.4/concepts/federation"},next:{title:"Self-Service Flows",permalink:"/kratos/docs/v0.4/self-service"}},c=[{value:"Understanding Threats",id:"understanding-threats",children:[{value:"Account Enumeration Attacks",id:"account-enumeration-attacks",children:[]},{value:"Bruteforce Attacks",id:"bruteforce-attacks",children:[]},{value:"Phishing Attacks",id:"phishing-attacks",children:[]},{value:"Social Engineering Attacks",id:"social-engineering-attacks",children:[]},{value:"SMS Spoofing Attacks",id:"sms-spoofing-attacks",children:[]}]},{value:"Choosing the right Security Profile and Configuration",id:"choosing-the-right-security-profile-and-configuration",children:[{value:"Argon2",id:"argon2",children:[]}]},{value:"Digital Identity Guidelines",id:"digital-identity-guidelines",children:[{value:"Password Policy",id:"password-policy",children:[]}]}],l={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Running any software that stores personal information exposes the\ndeveloper/company to risks. Analyzing which threat agents pose a risk,\nunderstanding the possible motivations for an attack, or why an agent is a\nthreat, knowing the attack surface, the likelihood, and the impact are important\nall aspects of a threat model."),Object(i.b)("p",null,"This documentation can not substitute a thorough and serious threat model, yet\nit will provide some guidelines to help configure ORY Kratos in a way that makes\nit best suited for any risk assessment."),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Please be aware that this chapter is still work in progress. Not all mitigation\nstrategies have been implemented yet in ORY Kratos!"))),Object(i.b)("h2",{id:"understanding-threats"},"Understanding Threats"),Object(i.b)("p",null,"This section examines several threat vectors in systems that manage identities."),Object(i.b)("h3",{id:"account-enumeration-attacks"},"Account Enumeration Attacks"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'"Often, web applications reveal when a username exists on system, either as a\nconsequence of a misconfiguration or as a design decision. For example,\nsometimes, when we submit wrong credentials, we receive a message that states\nthat either the username is present on the system or the provided password is\nwrong. The information obtained can be used by an attacker to gain a list of\nusers on system. This information can be used to attack the web application,\nfor example, through a brute force or default username/password attack.\nDescription of the Issue"'),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://wiki.owasp.org/index.php/Testing_for_User_Enumeration_and_Guessable_User_Account_(OWASP-AT-002)"}),"Source"))),Object(i.b)("h4",{id:"scenarios"},"Scenarios"),Object(i.b)("p",null,"Considering the above, an example would be for example an adult website. A\nthreat agent wants to blackmail a well known politician by checking if someone\ncan sign up at that website using the ",Object(i.b)("inlineCode",{parentName:"p"},"well-known-politician@email.com")," email."),Object(i.b)("p",null,"If the service responds with\n",Object(i.b)("inlineCode",{parentName:"p"},"Sorry, that email is already signed up here. Did you try to log in instead?"),",\nthe agent is able to proceed with some type of blackmail scheme."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://wiki.owasp.org/index.php/Testing_for_User_Enumeration_and_Guessable_User_Account_(OWASP-AT-002)#Black_Box_testing_and_example"}),"OWASP defines several Black-Box tests"),"\nthat cover Account Enumeration Scenarios."),Object(i.b)("h4",{id:"mitigation"},"Mitigation"),Object(i.b)("p",null,"ORY Kratos can be configured to send an out-of-band message to the email used\nfor login, registration, account recovery, etc.:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'If an application or user tries to sign in using an unknown email address, an\nemail will be sent to that address reading "You tried to sign in at X but you\ndo not have an account yet, did you mean to sign up instead?"'),Object(i.b)("li",{parentName:"ul"},"...")),Object(i.b)("h3",{id:"bruteforce-attacks"},"Bruteforce Attacks"),Object(i.b)("p",null,"Will be addressed in a future release."),Object(i.b)("h3",{id:"phishing-attacks"},"Phishing Attacks"),Object(i.b)("p",null,"Will be addressed in a future release."),Object(i.b)("h3",{id:"social-engineering-attacks"},"Social Engineering Attacks"),Object(i.b)("p",null,"Will be addressed in a future release."),Object(i.b)("h3",{id:"sms-spoofing-attacks"},"SMS Spoofing Attacks"),Object(i.b)("p",null,"Will be addressed in a future release."),Object(i.b)("h2",{id:"choosing-the-right-security-profile-and-configuration"},"Choosing the right Security Profile and Configuration"),Object(i.b)("p",null,"Will be addressed in a future release."),Object(i.b)("h3",{id:"argon2"},"Argon2"),Object(i.b)("p",null,"ORY Kratos uses Argon2 for password hashing. Argon2 is the official winner of\nthe PHC 2017. You can tweak the Argon2 configuration in your ORY Kratos\nconfiguration file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"hashers:\n  argon2:\n    memory: 1048576\n    iterations: 2\n    parallelism: 4\n    salt_length: 16\n    key_length: 32\n")),Object(i.b)("h2",{id:"digital-identity-guidelines"},"Digital Identity Guidelines"),Object(i.b)("p",null,"There is no one standard to digital identity. ORY Kratos closely follows\nemerging frameworks and guidelines such as:\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://pages.nist.gov/800-63-3/"}),"Digital Identity Guidelines established by the National Institute of Standards and Technology (NIST)"),"\n(and a follow-up ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://pages.nist.gov/800-63-3/"}),"FAQ"),") ."),Object(i.b)("p",null,"As ORY Kratos grows, this document will continue to expand and add sections\ncovering individual security recommendations established by NIST."),Object(i.b)("h3",{id:"password-policy"},"Password Policy"),Object(i.b)("p",null,"Almost every service with a login offers some type of registration using a\npassword. Therefore, there are many strategies floating around, with many of\nthem implementing terrible and insecure patterns such as:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Not allowing special characters in passwords."),Object(i.b)("li",{parentName:"ul"},'Not allowing the use of password managers by disabling the "paste"\nfunctionality in password fields.'),Object(i.b)("li",{parentName:"ul"},"Requiring you to rotate your password every month (passwords expire)."),Object(i.b)("li",{parentName:"ul"},"...")),Object(i.b)("p",null,"Troy Hunt has written an\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.troyhunt.com/passwords-evolved-authentication-guidance-for-the-modern-era/"}),"excellent piece on password policies"),"\nand why they recently changed and how."),Object(i.b)("p",null,"ORY Kratos implements a password policy that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Checks if a password has previously been leaked using the\n",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://haveibeenpwned.com/API/v2"}),"HIBP API"),","),Object(i.b)("li",{parentName:"ul"},"Checks if a password is too similar to one of the identifiers (in a future\nrelease ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/kratos/issues/184"}),"kratos#184"),"),"),Object(i.b)("li",{parentName:"ul"},"Makes passwords not expire.")),Object(i.b)("p",null,"This is a rundown of all the practices ORY Kratos implements and why. ",Object(i.b)("strong",{parentName:"p"},"Some\nthings need to be implemented by yourself")," as they must be implemented in the\nUser Interface that interfaces with ORY Kratos. You can find these in section\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#user-interface-guidelines"}),"User Interface Guidelines"),"."),Object(i.b)("h4",{id:"password-complexity"},"Password Complexity"),Object(i.b)("p",null,"This outline and quotes are defined in the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://pages.nist.gov/800-63-3/sp800-63b.html"}),"NIST Digital Identity Guidelines - 5.1.1.2 Memorized Secret Verifiers"),".\nORY Kratos, unless explicitly advertised, implements these guidelines and best\npractices."),Object(i.b)("p",null,"Passwords must have a minimum length of 8 characters and all characters\n(unicode, ASCII) must be allowed:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Verifiers SHALL require subscriber-chosen memorized secrets to be at least 8\ncharacters in length. Verifiers SHOULD permit subscriber-chosen memorized\nsecrets at least 64 characters in length. All printing ASCII ","[RFC 20]","\ncharacters as well as the space character SHOULD be acceptable in memorized\nsecrets. Unicode ","[ISO/ISC 10646]"," characters SHOULD be accepted as well. To\nmake allowances for likely mistyping, verifiers MAY replace multiple\nconsecutive space characters with a single space character prior to\nverification, provided that the result is at least 8 characters in length.\nTruncation of the secret SHALL NOT be performed. For purposes of the above\nlength requirements, each Unicode code point SHALL be counted as a single\ncharacter.")),Object(i.b)("p",null,"Passwords must be checked against a database of compromised secrets such as\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://haveibeenpwned.com"}),"Have I Been Pwnd"),":"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"When processing requests to establish and change memorized secrets, verifiers\nSHALL compare the prospective secrets against a list that contains values\nknown to be commonly-used, expected, or compromised. For example, the list MAY\ninclude, but is not limited to:"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"Passwords obtained from previous breach corpuses."),Object(i.b)("li",{parentName:"ul"},"Dictionary words."),Object(i.b)("li",{parentName:"ul"},"Repetitive or sequential characters (e.g. \u2018aaaaaa\u2019, \u20181234abcd\u2019)."),Object(i.b)("li",{parentName:"ul"},"Context-specific words, such as the name of the service, the username, and\nderivatives thereof.")),Object(i.b)("p",{parentName:"blockquote"},"If the chosen secret is found in the list, the CSP or verifier SHALL advise\nthe subscriber that they need to select a different secret, SHALL provide the\nreason for rejection, and SHALL require the subscriber to choose a different\nvalue.")),Object(i.b)("p",null,"Show the user a password-strength meter (to be implemented, see\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/kratos/issues/136"}),"#136"),"):"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Verifiers SHOULD offer guidance to the subscriber, such as a password-strength\nmeter ","[Meters]",", to assist the user in choosing a strong memorized secret. This\nis particularly important following the rejection of a memorized secret on the\nabove list as it discourages trivial modification of listed (and likely very\nweak) memorized secrets")),Object(i.b)("p",null,"Do not require mixtures of characters types or prohibiting repeated characters:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Verifiers SHOULD NOT impose other composition rules (e.g., requiring mixtures\nof different character types or prohibiting consecutively repeated characters)\nfor memorized secrets. Verifiers SHOULD NOT require memorized secrets to be\nchanged arbitrarily (e.g., periodically). However, verifiers SHALL force a\nchange if there is evidence of compromise of the authenticator.")),Object(i.b)("h4",{id:"user-interface-guidelines"},"User Interface Guidelines"),Object(i.b)("p",null,"These best practices need to be implemented in your User Interface and can not\nbe handled by ORY Kratos. All ORY-built reference and demo applications\nimplement these best practices:"),Object(i.b)("p",null,"Allow pasting of passwords:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Verifiers SHOULD permit claimants to use \u201cpaste\u201d functionality when entering a\nmemorized secret. This facilitates the use of password managers, which are\nwidely used and in many cases increase the likelihood that users will choose\nstronger memorized secrets.")),Object(i.b)("p",null,"Allow the user to show the secret in the UI:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"In order to assist the claimant in successfully entering a memorized secret,\nthe verifier SHOULD offer an option to display the secret \u2014 rather than a\nseries of dots or asterisks \u2014 until it is entered. This allows the claimant to\nverify their entry if they are in a location where their screen is unlikely to\nbe observed. The verifier MAY also permit the user\u2019s device to display\nindividual entered characters for a short time after each character is typed\nto verify correct entry. This is particularly applicable on mobile devices.")),Object(i.b)("h4",{id:"password-hints"},"Password Hints"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Memorized secret verifiers SHALL NOT permit the subscriber to store a \u201chint\u201d\nthat is accessible to an unauthenticated claimant."),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://pages.nist.gov/800-63-3/sp800-63b.html"}),"NIST Digital Identity Guidelines - 5.1.1.2 Memorized Secret Verifiers"))),Object(i.b)("h4",{id:"password-expiry"},"Password Expiry"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Forcing password expiry carries no real benefits because:"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"the user is likely to choose new passwords that are only minor variations of\nthe old"),Object(i.b)("li",{parentName:"ul"},"stolen passwords are generally exploited immediately"),Object(i.b)("li",{parentName:"ul"},"resetting the password gives you no information about whether a compromise\nhas occurred"),Object(i.b)("li",{parentName:"ul"},"an attacker with access to the account will probably also receive the\nrequest to reset the password"),Object(i.b)("li",{parentName:"ul"},"if compromised via insecure storage, the attacker will be able to find the\nnew password in the same place")),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ncsc.gov.uk/collection/passwords/updating-your-approach"}),"NSCS Password administration for system owners"))))}b.isMDXComponent=!0},422:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(a),u=n,h=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return a?r.a.createElement(h,o(o({ref:t},l),{},{components:a})):r.a.createElement(h,o({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);