(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{288:function(e,t,a){"use strict";var n=a(39);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d})),a.d(t,"c",(function(){return n.e})),a.d(t,"d",(function(){return n.f}))},294:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(300),o=a(287),l=a(276),i=a(277),s="",u="dark",d=function(){var e=Object(l.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,a=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=a[0],c=a[1],o=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[c]),i=Object(n.useCallback)((function(){c(s),o(s)}),[]),d=Object(n.useCallback)((function(){c(u),o(u)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(e)}catch(a){console.error(a)}}),[c]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?u:s)}))}),[]),{isDarkTheme:r===u,setLightTheme:i,setDarkTheme:d}},h=a(301);var m=function(e){var t=d(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(h.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},f=(a(78),a(278),function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}}),b=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});var v=function(e){var t=f(),a=t.tabGroupChoices,n=t.setTabGroupChoices;return r.a.createElement(b.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n}},e.children)},p=a(133),g=a.n(p);var k=function(){var e=Object(l.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=void 0===t?{}:t,c=a.id,o=a.content,i=a.backgroundColor,s=a.textColor,u=Object(n.useState)(!0),d=u[0],h=u[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("docusaurus.announcement.id"),t=c!==e;localStorage.setItem("docusaurus.announcement.id",c),t&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&h(!1)}),[]),!o||d?null:r.a.createElement("div",{className:g.a.announcementBar,style:{backgroundColor:i,color:s},role:"banner"},r.a.createElement("div",{className:g.a.announcementBarContent,dangerouslySetInnerHTML:{__html:o}}),r.a.createElement("button",{type:"button",className:g.a.announcementBarClose,onClick:function(){localStorage.setItem("docusaurus.announcement.dismiss",!0),h(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},E=a(1),_=a(9),O=a(281),j=a.n(O),y=a(283),C=(a(63),a(28),a(20),a(21),a(86),a(288)),w=(a(134),function(e){var t=Object(n.useState)(!1),c=t[0],o=t[1],i=Object(n.useRef)(null),s=Object(l.a)().siteConfig,u=(void 0===s?{}:s).themeConfig.algolia,d=Object(C.c)();var h=function(e){void 0===e&&(e=!0),c||Promise.all([a.e(136).then(a.t.bind(null,384,7)),a.e(90).then(a.t.bind(null,385,7))]).then((function(t){var a=t[0].default;o(!0),window.docsearch=a,function(e){window.docsearch({appId:u.appId,apiKey:u.apiKey,indexName:u.indexName,inputSelector:"#search_input_react",algoliaOptions:u.algoliaOptions,handleSelected:function(e,t,a){var n=document.createElement("a");n.href=a.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;d.push(r)}}),e&&i.current.focus()}(e)}))},m=Object(n.useCallback)((function(){h(),c&&i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),f=Object(n.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),b=Object(n.useCallback)((function(e){var t="mouseover"!==e.type;h(t)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:j()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:m,onKeyDown:m,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:j()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:b,onFocus:b,onBlur:f,ref:i}))}),N=a(319),S=a.n(N),T=a(135),x=a.n(T),B=function(){return r.a.createElement("span",{className:j()(x.a.toggle,x.a.moon)})},M=function(){return r.a.createElement("span",{className:j()(x.a.toggle,x.a.sun)})},D=function(e){var t=Object(l.a)().isClient;return r.a.createElement(S.a,Object(E.a)({disabled:!t,icons:{checked:r.a.createElement(B,null),unchecked:r.a.createElement(M,null)}},e))},L=a(295);var I=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},P=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useState)(!1),o=c[0],l=c[1],i=Object(n.useState)(0),s=i[0],u=i[1],d=Object(n.useState)(0),h=d[0],m=d[1],f=Object(n.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]),b=Object(C.d)(),v=I(b.hash),p=v[0],g=v[1],k=function(){var e=window.pageYOffset||document.documentElement.scrollTop;if(0===e&&r(!0),!(e<h)){if(o)return l(!1),r(!1),void u(e);var t=document.documentElement.scrollHeight-h,a=window.innerHeight;s&&e>=s?r(!1):e+a<t&&r(!0),u(e)}};return Object(n.useEffect)((function(){if(e)return window.addEventListener("scroll",k),function(){window.removeEventListener("scroll",k)}}),[s,h]),Object(n.useEffect)((function(){e&&(r(!0),g(b.hash))}),[b]),Object(n.useEffect)((function(){e&&p&&l(!0)}),[p]),{navbarRef:f,isNavbarVisible:a}},F=a(302),X=a(303),G=a(136),R=a.n(G);function A(e){var t=e.activeBasePath,a=e.to,n=e.href,c=e.label,o=(e.position,Object(_.a)(e,["activeBasePath","to","href","label","position"])),l=Object(i.a)(a),s=Object(i.a)(t);return r.a.createElement(y.a,Object(E.a)({},n?{target:"_blank",rel:"noopener noreferrer",href:n}:Object.assign({activeClassName:"navbar__link--active",to:l},t?{isActive:function(e,t){return t.pathname.startsWith(s)}}:null),o),c)}function H(e){var t=e.items,a=e.position,n=Object(_.a)(e,["items","position"]);return t?r.a.createElement("div",{className:j()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a})},r.a.createElement(A,Object(E.a)({className:"navbar__item navbar__link"},n),n.label),r.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(A,Object(E.a)({className:"navbar__item navbar__link"},e)))})))):r.a.createElement(A,Object(E.a)({className:"navbar__item navbar__link"},n))}function K(e){var t=e.items,a=Object(_.a)(e,["items"]);return t?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(A,Object(E.a)({className:"menu__link menu__link--sublist"},a),a.label),r.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(A,Object(E.a)({className:"menu__link"},e)))})))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(A,Object(E.a)({className:"menu__link"},a)))}var U=function(){var e,t,a=Object(l.a)(),c=a.siteConfig.themeConfig,o=c.navbar,i=(o=void 0===o?{}:o).title,s=o.links,u=void 0===s?[]:s,d=o.hideOnScroll,h=void 0!==d&&d,m=c.disableDarkMode,f=void 0!==m&&m,b=a.isClient,v=Object(n.useState)(!1),p=v[0],g=v[1],k=Object(n.useState)(!1),_=k[0],O=k[1],C=Object(L.a)(),N=C.isDarkTheme,S=C.setLightTheme,T=C.setDarkTheme,x=P(h),B=x.navbarRef,M=x.isNavbarVisible,I=Object(X.a)(),G=I.logoLink,A=I.logoLinkProps,U=I.logoImageUrl,V=I.logoAlt;Object(F.a)(p);var W=Object(n.useCallback)((function(){g(!0)}),[g]),Y=Object(n.useCallback)((function(){g(!1)}),[g]),J=Object(n.useCallback)((function(e){return e.target.checked?T():S()}),[S,T]);return r.a.createElement("nav",{ref:B,className:j()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":p},e[R.a.navbarHideable]=h,e[R.a.navbarHidden]=!M,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:W,onKeyDown:W},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(y.a,Object(E.a)({className:"navbar__brand",to:G},A),null!=U&&r.a.createElement("img",{key:b,className:"navbar__logo",src:U,alt:V}),null!=i&&r.a.createElement("strong",{className:j()("navbar__title",(t={},t[R.a.hideLogoText]=_,t))},i)),u.filter((function(e){return"left"===e.position})).map((function(e,t){return r.a.createElement(H,Object(E.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},u.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(H,Object(E.a)({},e,{key:t}))})),!f&&r.a.createElement(D,{className:R.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:N,onChange:J}),r.a.createElement(w,{handleSearchBarToggle:O,isSearchBarExpanded:_}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Y}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(y.a,Object(E.a)({className:"navbar__brand",onClick:Y,to:G},A),null!=U&&r.a.createElement("img",{key:b,className:"navbar__logo",src:U,alt:V}),null!=i&&r.a.createElement("strong",{className:"navbar__title"},i)),!f&&p&&r.a.createElement(D,{"aria-label":"Dark mode toggle in sidebar",checked:N,onChange:J})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},u.map((function(e,t){return r.a.createElement(K,Object(E.a)({},e,{onClick:Y,key:t}))})))))))},V=a(296);a(137);t.a=function(e){var t=Object(l.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,s=a.title,u=a.themeConfig.image,d=a.url,h=e.children,f=e.title,b=e.noFooter,p=e.description,g=e.image,E=e.keywords,_=e.permalink,O=e.version,j=f?f+" | "+s:s,y=g||u,C=d+Object(i.a)(y);Object(o.a)(y)||(C=y);var w=Object(i.a)(n);return r.a.createElement(m,null,r.a.createElement(v,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),j&&r.a.createElement("title",null,j),j&&r.a.createElement("meta",{property:"og:title",content:j}),n&&r.a.createElement("link",{rel:"shortcut icon",href:w}),p&&r.a.createElement("meta",{name:"description",content:p}),p&&r.a.createElement("meta",{property:"og:description",content:p}),O&&r.a.createElement("meta",{name:"docsearch:version",content:O}),E&&E.length&&r.a.createElement("meta",{name:"keywords",content:E.join(",")}),y&&r.a.createElement("meta",{property:"og:image",content:C}),y&&r.a.createElement("meta",{property:"twitter:image",content:C}),y&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+j}),_&&r.a.createElement("meta",{property:"og:url",content:d+_}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(k,null),r.a.createElement(U,null),r.a.createElement("div",{className:"main-wrapper"},h),!b&&r.a.createElement(V.a,null)))}},295:function(e,t,a){"use strict";var n=a(0),r=a(301);t.a=function(){return Object(n.useContext)(r.a)}},301:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=r},302:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},303:function(e,t,a){"use strict";var n=a(276),r=a(295),c=a(277),o=a(287);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=e.themeConfig.navbar,l=(a=void 0===a?{}:a).logo,i=void 0===l?{}:l,s=Object(r.a)().isDarkTheme,u=i.href||t,d={};i.target?d={target:i.target}:Object(o.a)(u)||(d={rel:"noopener noreferrer",target:"_blank"});var h=i.srcDark&&s?i.srcDark:i.src;return{logoLink:u,logoLinkProps:d,logoImageUrl:Object(c.a)(h),logoAlt:i.alt}}},319:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=h(c),l=h(a(281)),i=h(a(17)),s=h(a(320)),u=h(a(321)),d=a(322);function h(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},m.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},320:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},321:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},322:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);