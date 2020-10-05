(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{301:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(393)),l={id:"install",title:"Installation"},c={unversionedId:"install",id:"install",isDocsHomePage:!1,title:"Installation",description:"Installing ORY Hydra on any system is straight forward. We provide pre-built",source:"@site/docs/install.md",slug:"/install",permalink:"/hydra/docs/next/install",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/install.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601676726,sidebar:"docs",previous:{title:"5 Minute Tutorial",permalink:"/hydra/docs/next/5min-tutorial"},next:{title:"Do You Need OAuth2?",permalink:"/hydra/docs/next/concepts/before-oauth2"}},i=[{value:"Docker",id:"docker",children:[]},{value:"macOS",id:"macos",children:[]},{value:"Linux",id:"linux",children:[]},{value:"Windows",id:"windows",children:[]},{value:"Kubernetes",id:"kubernetes",children:[]},{value:"Download Binaries",id:"download-binaries",children:[]},{value:"Building from Source",id:"building-from-source",children:[]}],s={rightToc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Installing ORY Hydra on any system is straight forward. We provide pre-built\nbinaries, Docker Images and support various package managers."),Object(o.b)("h2",{id:"docker"},"Docker"),Object(o.b)("p",null,"We recommend using Docker to run ORY Hydra:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ docker pull oryd/hydra:v1.8.0-pre.1\n$ docker run --rm -it oryd/hydra:v1.8.0-pre.1 help\n")),Object(o.b)("h2",{id:"macos"},"macOS"),Object(o.b)("p",null,"You can install ORY Hydra using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://brew.sh/"}),"homebrew")," on macOS:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ brew tap ory/hydra\n$ brew install ory/hydra/hydra\n$ hydra help\n")),Object(o.b)("h2",{id:"linux"},"Linux"),Object(o.b)("p",null,"On linux, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"bash <(curl ...)")," to fetch the latest stable binary\nusing:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ bash <(curl https://raw.githubusercontent.com/ory/hydra/master/install.sh) -b . 1.4.8\n$ ./hydra help\n")),Object(o.b)("p",null,"You may want to move ORY Hydra to your ",Object(o.b)("inlineCode",{parentName:"p"},"$PATH"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ sudo mv ./hydra /usr/local/bin/\n$ hydra help\n")),Object(o.b)("h2",{id:"windows"},"Windows"),Object(o.b)("p",null,"You can install ORY Hydra using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://scoop.sh"}),"scoop")," on Windows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"> scoop bucket add ory-hydra https://github.com/ory/scoop-hydra.git\n> scoop install hydra\n> hydra help\n")),Object(o.b)("h2",{id:"kubernetes"},"Kubernetes"),Object(o.b)("p",null,"Please head over to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"guides/kubernetes-helm-chart"}),"Kubernetes Helm Chart"),"\ndocumentation."),Object(o.b)("h2",{id:"download-binaries"},"Download Binaries"),Object(o.b)("p",null,"You can download the client and server binaries on our\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ory/hydra/releases"}),"Github releases")," page. There is\ncurrently no installer available. You have to add the Hydra binary to the PATH\nin your environment yourself, for example by putting it into ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/local/bin")," or\nsomething comparable."),Object(o.b)("p",null,"Once installed, you should be able to run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ hydra help\n")),Object(o.b)("h2",{id:"building-from-source"},"Building from Source"),Object(o.b)("p",null,"If you wish to compile ORY Hydra yourself, you need to install and set up\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://golang.org/"}),"Go 1.12+")," and add ",Object(o.b)("inlineCode",{parentName:"p"},"$GOPATH/bin")," to your ",Object(o.b)("inlineCode",{parentName:"p"},"$PATH"),"."),Object(o.b)("p",null,"The following commands will check out the latest release tag of ORY Hydra,\ncompile it, and set up flags so that ",Object(o.b)("inlineCode",{parentName:"p"},"hydra version")," works as expected. Please\nnote that this will only work in a Bash-like shell."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ go get -d -u github.com/ory/hydra\n$ go install github.com/gobuffalo/packr/v2/packr2\n$ cd $(go env GOPATH)/src/github.com/ory/hydra\n$ GO111MODULE=on make install-stable\n$ $(go env GOPATH)/bin/hydra help\n")))}u.isMDXComponent=!0},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,h=b["".concat(l,".").concat(p)]||b[p]||d[p]||o;return n?a.a.createElement(h,c(c({ref:t},s),{},{components:n})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);