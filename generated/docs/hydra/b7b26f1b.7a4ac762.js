(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{360:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n(3),o=n(7),c=(n(0),n(485)),s=n(489),r=n(490),i=n(556),d={id:"consent",title:"Implementing the Consent Endpoint & UI",sidebar_label:"Consent Endpoint"},l={unversionedId:"guides/consent",id:"guides/consent",isDocsHomePage:!1,title:"Implementing the Consent Endpoint & UI",description:"Please read the Consent Flow Documentation first!",source:"@site/docs/guides/consent.mdx",slug:"/guides/consent",permalink:"/hydra/docs/next/guides/consent",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/guides/consent.mdx",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1606918230,sidebar_label:"Consent Endpoint",sidebar:"docs",previous:{title:"Implementing the Login Endpoint",permalink:"/hydra/docs/next/guides/login"},next:{title:"Implementing the Logout Endpoint & UI",permalink:"/hydra/docs/next/guides/logout"}},u=[{value:"Implementing the Consent HTML Form",id:"implementing-the-consent-html-form",children:[]},{value:"Accepting the Consent Request",id:"accepting-the-consent-request",children:[]},{value:"Rejecting the Consent Request",id:"rejecting-the-consent-request",children:[]},{value:"Skipping Consent Screen",id:"skipping-consent-screen",children:[]},{value:"Complete Endpoint",id:"complete-endpoint",children:[]}],b={rightToc:u};function m(e){var t=e.components,d=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,d,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Please read the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/hydra/docs/next/concepts/consent"}),"Consent Flow Documentation")," first!"))),Object(c.b)("p",null,"In this document, you will learn how to implement the Consent Endpoint using our\nORY Hydra SDKs. The goal for this document is to have document this for multiple\nprogramming languages. If you are an expert in one of these languages, your help\nis highly appreciated in improving these docs!"),Object(c.b)("p",null,"Code shown here is taken out of the ORY Hydra Login & Consent Node Reference\napplication which you can find on GitHub."),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra-login-consent-node"}),Object(c.b)("img",Object(a.a)({parentName:"a"},{src:"https://gh-card.dev/repos/ory/hydra-login-consent-node.svg",alt:"ory/hydra-login-consent-node - GitHub"})))),Object(c.b)("h2",{id:"implementing-the-consent-html-form"},"Implementing the Consent HTML Form"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The Consent HTML Form cannot be a Single Page App (Client-side browser\napplication) or a Mobile App! It has to be a server-side application with access\nto ORY Hydra's Admin Endpoint!"))),Object(c.b)(s.a,{defaultValue:"ui",values:[{label:"UI",value:"ui"},{label:"NodeJS",value:"node"},{label:"HTML Example",value:"html"}],mdxType:"Tabs"},Object(c.b)(r.a,{value:"ui",mdxType:"TabItem"},Object(c.b)("p",null,Object(c.b)("img",{alt:"OAuth2 Consent UI Screen",src:n(656).default}))),Object(c.b)(r.a,{value:"node",mdxType:"TabItem"},Object(c.b)(i.a,{src:"https://github.com/ory/hydra-login-consent-node/blob/master/src/routes/consent.ts",mdxType:"CodeFromRemote"})),Object(c.b)(r.a,{value:"html",mdxType:"TabItem"},Object(c.b)(i.a,{src:"https://github.com/ory/hydra-login-consent-node/blob/master/views/consent.pug",mdxType:"CodeFromRemote"}))),Object(c.b)("h2",{id:"accepting-the-consent-request"},"Accepting the Consent Request"),Object(c.b)(s.a,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(c.b)(r.a,{value:"node",mdxType:"TabItem"},Object(c.b)(i.a,{startAt:"let grantScope = req.body.grant_scope",endAt:"// label:docs-accept-consent",src:"https://github.com/ory/hydra-login-consent-node/blob/master/src/routes/consent.ts",mdxType:"CodeFromRemote"}))),Object(c.b)("h2",{id:"rejecting-the-consent-request"},"Rejecting the Consent Request"),Object(c.b)(s.a,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(c.b)(r.a,{value:"node",mdxType:"TabItem"},Object(c.b)(i.a,{startAt:"if (req.body.submit === 'Deny access') {",endAt:"// label:consent-deny-end",src:"https://github.com/ory/hydra-login-consent-node/blob/master/src/routes/consent.ts",mdxType:"CodeFromRemote"}))),Object(c.b)("h2",{id:"skipping-consent-screen"},"Skipping Consent Screen"),Object(c.b)(s.a,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(c.b)(r.a,{value:"node",mdxType:"TabItem"},Object(c.b)(i.a,{startAt:"// This section processes consent requests and either shows the consent UI",endAt:"// The consent request has now either been accepted automatically",src:"https://github.com/ory/hydra-login-consent-node/blob/master/src/routes/consent.ts",mdxType:"CodeFromRemote"}))),Object(c.b)("h2",{id:"complete-endpoint"},"Complete Endpoint"),Object(c.b)(s.a,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(c.b)(r.a,{value:"node",mdxType:"TabItem"},Object(c.b)(i.a,{src:"https://github.com/ory/hydra-login-consent-node/blob/master/src/routes/consent.ts",mdxType:"CodeFromRemote"}))))}m.isMDXComponent=!0},489:function(e,t,n){"use strict";var a=n(0),o=n.n(a),c=n(496),s=n(488),r=n(55),i=n.n(r),d=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,u=e.values,b=e.groupId,m=e.className,p=Object(c.a)(),h=p.tabGroupChoices,g=p.setTabGroupChoices,v=Object(a.useState)(r),f=v[0],j=v[1],O=a.Children.toArray(e.children);if(null!=b){var y=h[b];null!=y&&y!==f&&u.some((function(e){return e.value===y}))&&j(y)}var x=function(e){j(e),null!=b&&g(b,e)},w=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(s.a)("tabs__item",i.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},n)}))),t?Object(a.cloneElement)(O.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},490:function(e,t,n){"use strict";var a=n(3),o=n(0),c=n.n(o);t.a=function(e){var t=e.children,n=e.hidden,o=e.className;return c.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:o}),t)}},496:function(e,t,n){"use strict";var a=n(0),o=n(497);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},497:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},556:function(e,t,n){"use strict";var a=n(0),o=n.n(a),c=n(557),s=n.n(c),r=n(582),i=n(57),d=n.n(i),l=function(e,t){if(!e)return 0;var n=t.findIndex((function(t){return t.indexOf(e)>-1}));return-1===n?0:n};t.a=function(e){var t=e.src,n=Object(a.useState)(""),c=n[0],i=n[1];Object(a.useEffect)((function(){var n,a,o;s()(t.replace("github.com","raw.githubusercontent.com").replace("/blob/","/")).then((function(e){return e.text()})).then((n=e,a=n.startAt,o=n.endAt,function(e){var t=e.split("\n"),n=l(a,t);n>0&&(t=["// ..."].concat(t.slice(n,-1)));var c=l(o,t);return c>0&&(t=[].concat(t.slice(0,c+1),["// ..."])),t.join("\n")})).then(i).catch(console.error)}),[]);var u="language-"+function(e){var t=e.split(".").pop();switch(t){case"jsx":return"jsx";case"tsx":return"tsx";case"ts":return"typescript";case"go":return"go";case"yaml":case"yml":return"yaml";case"js":return"javascript";case"html":return"html";case"pug":return"pug";default:return t}}(t),b='title="'+function(e){var t=e.match(new RegExp("https://github.com/[^/]+/[^/]+/blob/[^/]+/(.+)","i"))||[];return t.length>=2?t[1]:e}(t)+'"';return o.a.createElement("div",{className:d.a.container},o.a.createElement(r.a,{metastring:b,className:u,children:c}))}},557:function(e,t,n){"use strict";var a=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==a)return a;throw new Error("unable to locate global object")}();e.exports=t=a.fetch,a.fetch&&(t.default=a.fetch.bind(a)),t.Headers=a.Headers,t.Request=a.Request,t.Response=a.Response},656:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/consent-endpoint-31856a0555a6a8438d4603692bdab5d2.png"}}]);