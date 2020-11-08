(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(422)),i={id:"contributing",title:"Contribution Guidelines"},l={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contribution Guidelines",description:"\x3c!--",source:"@site/docs/contributing.md",slug:"/contributing",permalink:"/kratos/docs/next/contributing",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/contributing.md",version:"current",lastUpdatedBy:"hackerman",lastUpdatedAt:1602752722},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Contributing Code",id:"contributing-code",children:[]},{value:"Disclosing vulnerabilities",id:"disclosing-vulnerabilities",children:[]},{value:"Code Style",id:"code-style",children:[]},{value:"Documentation",id:"documentation",children:[{value:"Develop",id:"develop",children:[]}]},{value:"Pull request procedure",id:"pull-request-procedure",children:[]},{value:"How We Organize Our Work",id:"how-we-organize-our-work",children:[]},{value:"Communication",id:"communication",children:[]},{value:"Conduct",id:"conduct",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"contributing-to-ory-project"},"Contributing to ORY {{Project}}"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#introduction"}),"Introduction")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#contributing-code"}),"Contributing Code")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#disclosing-vulnerabilities"}),"Disclosing vulnerabilities")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#code-style"}),"Code Style")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#documentation"}),"Documentation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#pull-request-procedure"}),"Pull request procedure")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#communication"}),"Communication")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#conduct"}),"Conduct"))),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"Please note: We take ORY {{Project}}'s security and our users' trust very\nseriously. If you believe you have found a security issue in ORY {{Project}},\nplease responsibly disclose by contacting us at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:office@ory.sh"}),"office@ory.sh"),"."),Object(o.b)("p",null,"First: if you're unsure or afraid of anything, just ask or submit the issue or\npull request anyways. You won't be yelled at for giving it your best effort. The\nworst that can happen is that you'll be politely asked to change something. We\nappreciate any sort of contributions, and don't want a wall of rules to get in\nthe way of that."),Object(o.b)("p",null,"That said, if you want to ensure that a pull request is likely to be merged,\ntalk to us! You can find out our thoughts and ensure that your contribution\nwon't clash or be obviated by ORY {{Project}}'s normal direction. A great way to\ndo this is via the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://community.ory.sh/"}),"ORY Community")," or join the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/chat"}),"ORY Chat"),"."),Object(o.b)("h2",{id:"contributing-code"},"Contributing Code"),Object(o.b)("p",null,"Unless you are fixing a known bug, we ",Object(o.b)("strong",{parentName:"p"},"strongly")," recommend discussing it with\nthe core team via a GitHub issue or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/chat"}),"in our chat"),"\nbefore getting started to ensure your work is consistent with ORY {{Project}}'s\nroadmap and architecture."),Object(o.b)("p",null,"All contributions are made via pull request. Note that ",Object(o.b)("strong",{parentName:"p"},"all patches from all\ncontributors get reviewed"),". After a pull request is made other contributors\nwill offer feedback, and if the patch passes review a maintainer will accept it\nwith a comment. When pull requests fail testing, authors are expected to update\ntheir pull requests to address the failures until the tests pass and the pull\nrequest merges successfully."),Object(o.b)("p",null,"At least one review from a maintainer is required for all patches (even patches\nfrom maintainers)."),Object(o.b)("p",null,'Reviewers should leave a "LGTM" comment once they are satisfied with the patch.\nIf the patch was submitted by a maintainer with write access, the pull request\nshould be merged by the submitter after review.'),Object(o.b)("h2",{id:"disclosing-vulnerabilities"},"Disclosing vulnerabilities"),Object(o.b)("p",null,"Please disclose vulnerabilities exclusively to\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:security@ory.sh"}),"security@ory.sh"),". Do not use GitHub issues."),Object(o.b)("h2",{id:"code-style"},"Code Style"),Object(o.b)("p",null,"Please follow these guidelines when formatting source code:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go code should match the output of ",Object(o.b)("inlineCode",{parentName:"li"},"gofmt -s")," and pass ",Object(o.b)("inlineCode",{parentName:"li"},"golangci-lint run"),"."),Object(o.b)("li",{parentName:"ul"},"NodeJS and JavaScript code should be prettified using ",Object(o.b)("inlineCode",{parentName:"li"},"npm run format")," where\nappropriate.")),Object(o.b)("h2",{id:"documentation"},"Documentation"),Object(o.b)("p",null,"Please provide documentation when changing, removing, or adding features.\nDocumentation resides in the project's ",Object(o.b)("inlineCode",{parentName:"p"},"docs")," folder."),Object(o.b)("p",null,"In cases where a project does not have a ",Object(o.b)("inlineCode",{parentName:"p"},"docs")," folder check the README for instructions."),Object(o.b)("p",null,"The commands listed below work exclusively for projects with a ",Object(o.b)("inlineCode",{parentName:"p"},"docs")," folder"),Object(o.b)("h3",{id:"develop"},"Develop"),Object(o.b)("p",null,"To change the documentation locally, you need NodeJS installed and the project\nchecked out locally. Next, ",Object(o.b)("inlineCode",{parentName:"p"},"cd")," into ",Object(o.b)("inlineCode",{parentName:"p"},"docs")," and install the dependencies:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ cd docs\n$ npm install\n")),Object(o.b)("h4",{id:"start"},"Start"),Object(o.b)("p",null,"To start a local development server with hot reloading, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ npm start\n")),Object(o.b)("p",null,"This command opens up a browser window. Please note that changes to the sidebar are not hot-reloaded\nand require a restart of the command."),Object(o.b)("h4",{id:"build"},"Build"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"npm build")," generates static content into the ",Object(o.b)("inlineCode",{parentName:"p"},"build")," directory and can be\nserved using any static contents hosting service."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ npm build\n")),Object(o.b)("h2",{id:"pull-request-procedure"},"Pull request procedure"),Object(o.b)("p",null,"To make a pull request, you will need a GitHub account; if you are unclear on\nthis process, see GitHub's documentation on\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.github.com/articles/fork-a-repo"}),"forking")," and\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.github.com/articles/using-pull-requests"}),"pull requests"),". Pull\nrequests should be targeted at the ",Object(o.b)("inlineCode",{parentName:"p"},"master")," branch. Before creating a pull\nrequest, go through this checklist:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a feature branch off of ",Object(o.b)("inlineCode",{parentName:"li"},"master")," so that changes do not get mixed up."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://git-scm.com/book/en/Git-Branching-Rebasing"}),"Rebase")," your local\nchanges against the ",Object(o.b)("inlineCode",{parentName:"li"},"master")," branch."),Object(o.b)("li",{parentName:"ol"},"Run the full project test suite with the ",Object(o.b)("inlineCode",{parentName:"li"},"go test ./...")," (or equivalent)\ncommand and confirm that it passes."),Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"gofmt -s")," (if the project is written in Go)."),Object(o.b)("li",{parentName:"ol"},"Ensure that each commit has a subsystem prefix (ex: ",Object(o.b)("inlineCode",{parentName:"li"},"controller:"),").")),Object(o.b)("p",null,'Pull requests will be treated as "review requests," and maintainers will give\nfeedback on the style and substance of the patch.'),Object(o.b)("p",null,"Normally, all pull requests must include tests that test your change.\nOccasionally, a change will be very difficult to test for. In those cases,\nplease include a note in your commit message explaining why."),Object(o.b)("h2",{id:"how-we-organize-our-work"},"How We Organize Our Work"),Object(o.b)("p",null,"All repositories in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory"}),"ORY organization")," have their issues and pull requests\nmonitored in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/orgs/ory/projects/9"}),"ORY Monitoring Board"),". This allows\nfor a transparent backlog of unanswered issues and pull requests across the ecosystem from those\nwho are allowed to merge pull requests to the main branch."),Object(o.b)("p",null,"The process is as follows:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("em",{parentName:"li"},"Cards")," represent open issues and pull requests and are automatically assigned to the ",Object(o.b)("strong",{parentName:"li"},"Triage")," column if\nthe author is not one of the maintainers and no maintainer has answered yet."),Object(o.b)("li",{parentName:"ol"},"A maintainer assigns the issue or pull request to someone or adds the label ",Object(o.b)("em",{parentName:"li"},"help wanted"),"\nwhich moves the card to ",Object(o.b)("strong",{parentName:"li"},"Requires Action"),"."),Object(o.b)("li",{parentName:"ol"},"If a maintainer leaves a comment or review, the card moves to ",Object(o.b)("strong",{parentName:"li"},"Pending Reply"),", implying that\nthe original author needs to do something (e.g. implement a change, explain something in more detail, ...)."),Object(o.b)("li",{parentName:"ol"},"If a non-maintainer pushes changes to the pull request or leaves a comment, the card moves\nback to ",Object(o.b)("strong",{parentName:"li"},"Requires Action"),"."),Object(o.b)("li",{parentName:"ol"},"If a card stays inactive for 60 days or more days, we assume that public interest in the issue\nor change has waned, ",Object(o.b)("strong",{parentName:"li"},"archiving")," the card."),Object(o.b)("li",{parentName:"ol"},"If the issue is closed or the pull request merged or closed, the card is ",Object(o.b)("strong",{parentName:"li"},"archived")," as well.")),Object(o.b)("p",null,"We try our best to answer all issues and review all pull requests and hope that this transparent way\nof keeping a backlog helps you better understand how heavy the workload is."),Object(o.b)("h2",{id:"communication"},"Communication"),Object(o.b)("p",null,"We use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/chat"}),"Slack"),". You are welcome to drop in and ask\nquestions, discuss bugs, etc."),Object(o.b)("h2",{id:"conduct"},"Conduct"),Object(o.b)("p",null,"Whether you are a regular contributor or a newcomer, we care about making this\ncommunity a safe place for you and we've got your back."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We are committed to providing a friendly, safe and welcoming environment for\nall, regardless of gender, sexual orientation, disability, ethnicity,\nreligion, or similar personal characteristic."),Object(o.b)("li",{parentName:"ul"},"Please avoid using nicknames that might detract from a friendly, safe and\nwelcoming environment for all."),Object(o.b)("li",{parentName:"ul"},"Be kind and courteous. There is no need to be mean or rude."),Object(o.b)("li",{parentName:"ul"},"We will exclude you from interaction if you insult, demean or harass anyone.\nIn particular, we do not tolerate behavior that excludes people in socially\nmarginalized groups."),Object(o.b)("li",{parentName:"ul"},"Private harassment is also unacceptable. No matter who you are, if you feel\nyou have been or are being harassed or made uncomfortable by a community\nmember, please contact one of the channel ops or a member of the ORY\n{{Project}} core team immediately."),Object(o.b)("li",{parentName:"ul"},"Likewise any spamming, trolling, flaming, baiting or other attention-stealing\nbehaviour is not welcome.")),Object(o.b)("p",null,"We welcome discussion about creating a welcoming, safe, and productive\nenvironment for the community. If you have any questions, feedback, or concerns\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/chat"}),"please let us know"),"."))}u.isMDXComponent=!0},422:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);