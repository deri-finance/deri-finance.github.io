(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[14],{135:function(e,t,n){"use strict";n.r(t);t.default=function(e,t){}},636:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(7),n(662);var r=n(60);function c(e){var t=e.lang;return Object(r.jsxs)("div",{className:"m-footer",children:[Object(r.jsxs)("div",{className:"footer-link",children:[Object(r.jsx)("a",{rel:"noreferrer",className:"iocn_a",children:Object(r.jsxs)("div",{className:"circle",children:[Object(r.jsx)("div",{className:"wechat",children:Object(r.jsx)("div",{className:"down_box"})}),Object(r.jsx)("div",{className:"fa fa-wechat"})]})}),Object(r.jsx)("a",{rel:"noreferrer",className:"iocn-a",href:"mailto: service@deri.finance",children:Object(r.jsx)("div",{className:"circle",children:Object(r.jsx)("div",{className:"fa fa-envelope"})})}),Object(r.jsx)("a",{className:"iocn-a",rel:"noreferrer",href:"https://deri-protocol.medium.com",children:Object(r.jsx)("div",{className:"circle",children:Object(r.jsx)("div",{className:"fa fa-medium"})})}),Object(r.jsx)("a",{className:"iocn-a",rel:"noreferrer",href:"https://twitter.com/DeriProtocol",children:Object(r.jsx)("div",{className:"circle",children:Object(r.jsx)("div",{className:"fa fa-twitter"})})}),Object(r.jsx)("a",{className:"iocn-a",rel:"noreferrer",href:"https://github.com/deri-finance",children:Object(r.jsx)("div",{className:"circle",children:Object(r.jsx)("div",{className:"fa fa-github"})})}),Object(r.jsx)("a",{rel:"noreferrer",className:"iocn-a",href:"https://t.me/DeriProtocol",children:Object(r.jsx)("div",{className:"circle",children:Object(r.jsx)("div",{className:"fa fa-paper-plane"})})})]}),Object(r.jsxs)("div",{className:"banquan",children:["\xa9 2021 ",t["deri-protocol"]]})]})}},662:function(e,t,n){},684:function(e,t,n){},685:function(e,t,n){},686:function(e,t,n){},687:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var c=n(31),i=r(n(7)),a=n(59);n(81),n(135);var s=r(n(52));function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}function u(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],0<=t.indexOf(n)||(c[n]=e[n]);return c}var j=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))||this).history=a.createBrowserHistory(t.props),t}return l(t,e),t.prototype.render=function(){return i.createElement(c.Router,{history:this.history,children:this.props.children})},t}(i.Component),b=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))||this).history=a.createHashHistory(t.props),t}return l(t,e),t.prototype.render=function(){return i.createElement(c.Router,{history:this.history,children:this.props.children})},t}(i.Component),f=function(e,t){return"function"==typeof e?e(t):e},d=function(e,t){return"string"==typeof e?a.createLocation(e,null,null,t):e},h=function(e){return e},O=i.forwardRef;void 0===O&&(O=h);var p=O((function(e,t){var n=e.innerRef,r=e.navigate,c=e.onClick,a=u(e,["innerRef","navigate","onClick"]),s=a.target,l=o({},a,{onClick:function(t){try{c&&c(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)||(t.preventDefault(),r())}});return l.ref=h!==O&&t||n,i.createElement("a",l)})),m=O((function(e,t){var n=e.component,r=void 0===n?p:n,a=e.replace,l=e.to,j=e.innerRef,b=u(e,["component","replace","to","innerRef"]);return i.createElement(c.__RouterContext.Consumer,null,(function(e){e||s(!1);var n=e.history,c=d(f(l,e.location),e.location),u=c?n.createHref(c):"",p=o({},b,{href:u,navigate:function(){var t=f(l,e.location);(a?n.replace:n.push)(t)}});return h!==O?p.ref=t||j:p.innerRef=j,i.createElement(r,p)}))})),A=function(e){return e},x=i.forwardRef;void 0===x&&(x=A);var g=x((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,a=e.activeClassName,l=void 0===a?"active":a,j=e.activeStyle,b=e.className,h=e.exact,O=e.isActive,p=e.location,g=e.sensitive,v=e.strict,N=e.style,R=e.to,y=e.innerRef,w=u(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.createElement(c.__RouterContext.Consumer,null,(function(e){e||s(!1);var n=p||e.location,a=d(f(R,n),n),u=a.pathname,E=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),P=E?c.matchPath(n.pathname,{path:E,exact:h,sensitive:g,strict:v}):null,k=!!(O?O(P,n):P),C=k?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(b,l):b,q=k?o({},N,{},j):N,B=o({"aria-current":k&&r||null,className:C,style:q,to:a},w);return A!==x?B.ref=t||y:B.innerRef=y,i.createElement(m,B)}))}));Object.defineProperty(t,"MemoryRouter",{enumerable:!0,get:function(){return c.MemoryRouter}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return c.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return c.Redirect}}),Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return c.Route}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return c.Router}}),Object.defineProperty(t,"StaticRouter",{enumerable:!0,get:function(){return c.StaticRouter}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return c.Switch}}),Object.defineProperty(t,"generatePath",{enumerable:!0,get:function(){return c.generatePath}}),Object.defineProperty(t,"matchPath",{enumerable:!0,get:function(){return c.matchPath}}),Object.defineProperty(t,"useHistory",{enumerable:!0,get:function(){return c.useHistory}}),Object.defineProperty(t,"useLocation",{enumerable:!0,get:function(){return c.useLocation}}),Object.defineProperty(t,"useParams",{enumerable:!0,get:function(){return c.useParams}}),Object.defineProperty(t,"useRouteMatch",{enumerable:!0,get:function(){return c.useRouteMatch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return c.withRouter}}),t.BrowserRouter=j,t.HashRouter=b,t.Link=m,t.NavLink=g},757:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W}));var r=n(7),c=n.n(r),i=n(17),a="data:image/png;base64,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",s=n(31),o=n(176),l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAJCAYAAADpeqZqAAABXklEQVQoU2WRP0hVcRTHP9/fvT6ejzJpCIVaIkNzMZpaskGECB2ypxA+aFGxocmh0bm2COmlEIEI+ujPIBi4ODQ4BLqYoETgYHs9VPTe+40raGTf7Zzv+XC+nCMmJ0O5ZbhXIb3yuxTml4bbfnFG5er3C5IHwTsLu9eWNfBmuzPIXwQFw6f6vsaXnv4Fc8BKXgep33BIFt3Rw+ntu3K2LCkGH2K9dXPzRG3wUv3ey9Wmc40XXwg/BhVsJxB61Ff9WiqG83NC94EYOMjMK8V6TpY9k/UEKAIJ1qLrxUfK4z+ofmuNFc0idQOR0R6wDnQJl4DUeCXN0sqHsRs/j6FjcGrralTgnazb4AiU2Q4SKWjVpJXaSPuPfPYUyouh6a0Oo1lwFxCAzHgtQZWPI9c3Txb8A+XNgZmNm8ENC4LL+YntZKg22plHPdV/UO6UpzZvqRD3pkd8fj/etnb2b38ARWSBW029yFUAAAAASUVORK5CYII=",u=n(636),j=(n(662),n(60));function b(e){var t=e.closeMenu,n=e.lang,c=e.locale,i=!!Object(s.useRouteMatch)("/mining"),b=!!Object(s.useRouteMatch)("/lite");return Object(r.useEffect)((function(){return document.querySelectorAll(".menu li a").forEach((function(e){return e.addEventListener("click",t)})),function(){}}),[]),Object(j.jsxs)("div",{className:"menu",children:[Object(j.jsxs)("div",{className:"top",children:[Object(j.jsx)("a",{className:"logo",href:"https://deri.finance/?locale=".concat(c,"#index"),children:Object(j.jsx)("img",{src:a,alt:""})}),Object(j.jsx)("span",{className:"close-menu",click:"close",onClick:t})]}),Object(j.jsx)("div",{className:"ul",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:i?"selected":"",children:Object(j.jsx)("a",{rel:"noreferrer",href:"https://app.deri.finance/?locale=".concat(c,"#mining"),children:n.mining})}),Object(j.jsx)("li",{className:b?"selected":"",children:Object(j.jsxs)("a",{rel:"noreferrer",href:"https://app.deri.finance/?locale=".concat(c,"#lite"),children:[" ",n.trade," "]})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{rel:"noreferrer",href:"https://governance.deri.finance/?locale=".concat(c,"#governance"),children:n.governance})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{rel:"noreferrer",href:"https://bridge.deri.finance/?locale=".concat(c,"#bridge"),children:n.bridge})}),Object(j.jsxs)("li",{className:"ref",children:[n.docs," ",Object(j.jsx)("img",{src:l,alt:""}),Object(j.jsxs)("ul",{className:"ref-box",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://docs.deri.finance/whitepaper",children:n.whitepaper})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://docs.deri.finance/code-audits",children:n["code-audit"]})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"http://deri.finance/?locale=".concat(c,"#/team"),children:n.team})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://docs.deri.finance/faq",children:n.faq})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://docs.deri.finance/",children:n.guide})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://github.com/deri-finance/",children:n.github})})]})]}),Object(j.jsxs)("li",{className:"ref",children:[n.more," ",Object(j.jsx)("img",{src:l,alt:""}),Object(j.jsxs)("ul",{className:"ref-box",children:[Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/broker",children:n.broker})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/brokerbind",children:n["broker-bind"]})})]})]})]})}),Object(j.jsx)(u.a,{lang:n})]})}n(684);var f=n(658),d=n(673),h=n(96),O=n(630);var p,m=Object(h.b)("intl")(Object(h.c)((function(e){var t=e.intl,n=Object(r.useState)({}),c=Object(i.a)(n,2),s=c[0],o=c[1],l=Object(O.a)(t.dict,"header"),u=Object(O.a)(t.dict,"footer");return Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)("img",{className:"menu-icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAASCAYAAABFGc6jAAAARklEQVRIS2MMm3XzAgMjoz4DDcF/BobzjHSziIYeQTGacdQickNgGAYd3ZI33SwiN3JJ1TcMEwOpQUCu+mEYdHRL3vSyCAAv2BujNlrcrwAAAABJRU5ErkJggg==",onClick:function(){o({left:0})}}),Object(j.jsx)("div",{className:"menu-left",style:s,children:Object(j.jsx)(b,{closeMenu:function(){return o({left:"-110%"})},lang:Object.assign(l,u),locale:t.locale})}),Object(j.jsx)("a",{className:"logo",href:"https://deri.finance/",children:Object(j.jsx)("img",{src:a,alt:""})}),Object(j.jsxs)("div",{className:"nav-right",children:[Object(j.jsx)(d.a,{}),Object(j.jsx)("a",{href:"https://app.deri.finance/#lite",children:Object(j.jsx)("div",{className:"trade",children:l.trade})}),Object(j.jsx)(f.a,{})]})]})}))),A=n(4),x=n(6),g=n(11),v=n(10),N=n(137),R=n(660),y=n(661),w=Object(N.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(21)]).then(n.bind(null,745))})),E=Object(N.a)((function(){return Promise.all([n.e(8),n.e(36)]).then(n.bind(null,746))})),P=Object(N.a)((function(){return n.e(22).then(n.bind(null,747))})),k=Object(N.a)((function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,748))})),C=Object(N.a)((function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,749))})),q=Object(N.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(26)]).then(n.bind(null,750))})),B=Object(N.a)((function(){return Promise.all([n.e(7),n.e(34)]).then(n.bind(null,751))})),M=Object(N.a)((function(){return Promise.all([n.e(0),n.e(6),n.e(35)]).then(n.bind(null,752))})),X=Object(N.a)((function(){return n.e(24).then(n.bind(null,753))})),L=Object(N.a)((function(){return n.e(30).then(n.bind(null,754))})),U=Object(N.a)((function(){return n.e(28).then(n.bind(null,755))})),V=Object(s.withRouter)(p=Object(R.a)(p=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){var e=this.props.dict;return Object(j.jsx)("div",{className:"body",children:Object(j.jsxs)(s.Switch,{children:[Object(j.jsx)(s.Route,{exact:!0,path:"/index",component:function(){return Object(j.jsx)(E,{lang:e.home})}}),Object(j.jsx)(s.Route,{exact:!0,path:"/team",component:function(){return Object(j.jsx)(P,{lang:e.team})}}),Object(j.jsx)(s.Route,{exact:!0,path:"/bridge",component:function(){return Object(j.jsx)(B,{lang:e.bridge})}}),Object(j.jsx)(s.Route,{exact:!0,path:"/broker",component:function(){return Object(j.jsx)(M,{lang:e.broker})}}),Object(j.jsx)(s.Route,{exact:!0,path:"/brokerbind",component:function(){return Object(j.jsx)(X,{lang:e.broker})}}),Object(j.jsx)(s.Route,{exact:!0,path:"/governance",component:function(){return Object(j.jsx)(L,{lang:e.governance})}}),Object(j.jsx)(s.Route,{exact:!0,path:"/diphistory",component:function(){return Object(j.jsx)(U,{lang:e["dip-history"]})}}),Object(j.jsx)(s.Route,{exact:!0,path:"/",render:function(){return Object(j.jsx)(y.a,{})}}),Object(j.jsx)(s.Route,{exact:!0,path:"/lite",component:function(){return Object(j.jsx)(w,{lang:e.lite})}}),Object(j.jsx)(s.Route,{exact:!0,path:"/mining",component:function(){return Object(j.jsx)(k,{lang:e.mining})}}),Object(j.jsx)(s.Route,{exact:!0,path:"/oldpool",component:function(){return Object(j.jsx)(C,{lang:e.mining})}}),Object(j.jsx)(s.Route,{exact:!0,path:"/mining/:version/:chainId/:type/:symbol/:baseToken/:address",component:function(){return Object(j.jsx)(q,{lang:e.mining})}}),Object(j.jsx)(s.Route,{component:function(){return Object(j.jsx)(w,{lang:e.lite})}})]})})}}]),n}(c.a.Component))||p)||p,J=(n(685),n(659));var Q=Object(h.b)("intl")(Object(h.c)((function(e){var t=e.intl,n=Object(O.a)(t.dict,"footer"),r=Object(s.useRouteMatch)("/index"),c=Object(s.useRouteMatch)("/team"),i=!r&&!c;return Object(j.jsx)("div",{className:"wallet-panel",children:i&&Object(j.jsx)(J.a,{lang:n})})})));n(686);var T=n(687);function W(e){var t=e.locale,n=function(){var e=Object(r.useState)({width:void 0,height:void 0}),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){function e(){c({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),c=Object(T.useLocation)().pathname.substring(1);return Object(r.useEffect)((function(){return document.querySelector("html").setAttribute("style","font-size : ".concat(n.width/375*100,"px")),function(){}}),[n]),Object(j.jsxs)("div",{className:"mobile ".concat(c," ").concat(t),children:[Object(j.jsx)(m,{}),Object(j.jsx)(V,{}),Object(j.jsx)(Q,{})]})}}}]);
//# sourceMappingURL=14.a96101f4.chunk.js.map