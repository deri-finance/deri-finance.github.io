(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[6],{623:function(e,t,A){"use strict";A.d(t,"a",(function(){return d}));var r=A(0),a=A.n(r),n=A(1),c=A(16),s=A(7),i=A(60);function d(e){var t=e.btnText,A=e.className,r=e.disabled,d=e.click,l=e.afterClick,o=e.checkApprove,u=e.wallet,g=e.spec,j=e.lang,w=Object(s.useState)(r?"disabled":"enabled"),b=Object(c.a)(w,2),p=b[0],f=b[1],O=Object(s.useState)(!0),x=Object(c.a)(O,2),m=x[0],h=x[1],D=Object(s.useState)(!1),B=Object(c.a)(D,2),I=B[0],v=B[1],C=Object(s.useState)(t),Q=Object(c.a)(C,2),k=Q[0],M=Q[1],y=Object(s.useRef)(null),E=function(){var e=Object(n.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===p){e.next=2;break}return e.abrupt("return");case 2:return N(),e.next=5,d();case 5:e.sent&&l&&l(),S();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){f("disabled"),v(!0),y.current&&(y.current.style.display="inline-block")},S=function(){y.current&&(y.current.style.display="none"),f("enabled"),v(!1)},J=function(){var e=Object(n.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o&&u&&u.detail.account)){e.next=5;break}return e.next=3,u.isApproved(g.pool,g.bTokenId);case 3:t=e.sent,h(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(n.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(),e.next=3,u.approve(g.pool,g.bTokenId);case 3:e.sent.success?h(!0):(h(!1),alert(j["approve-failed"])),S();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){return J(),function(){}}),[u,g,o]),Object(s.useEffect)((function(){return t&&M(t),function(){}}),[t]),Object(i.jsxs)("button",{className:A,onClick:function(){m?E():Y()},children:[Object(i.jsx)("span",{className:"btn-loading-wrap",children:Object(i.jsx)("span",{ref:y,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),I?j.pending:m?k:j.approve]})}},624:function(e,t,A){"use strict";A.d(t,"a",(function(){return d}));var r=A(26),a=A(178),n=A(16),c=A(7),s=A(625),i=A(60);function d(e){var t=Object(c.useState)("--"),A=Object(n.a)(t,2),d=A[0],l=A[1];return Object(c.useEffect)((function(){var t=e.allowZero,A=Object(a.a)(e,["allowZero"]);return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&l(Object(i.jsx)(s.a,Object(r.a)(Object(r.a)({},A),{},{displayType:"text"}))),function(){}}),[e.value]),d}},631:function(e,t,A){"use strict";function r(e,t){for(var A=e.toString();A.length<t;)A="0"+A;return A}function a(e){return r(e,2)}function n(t,A){"string"!==typeof t&&(A=t,t=e.exports.ISO8601_FORMAT),A||(A=e.exports.now());var n=a(A.getDate()),c=a(A.getMonth()+1),s=a(A.getFullYear()),i=a(s.substring(2,4)),d=t.indexOf("yyyy")>-1?s:i,l=a(A.getHours()),o=a(A.getMinutes()),u=a(A.getSeconds()),g=r(A.getMilliseconds(),3),j=function(e){var t=Math.abs(e),A=String(Math.floor(t/60)),r=String(t%60);return 1===A.length&&(A="0"+A),1===r.length&&(r="0"+r),e<0?"+"+A+r:"-"+A+r}(A.getTimezoneOffset());return t.replace(/dd/g,n).replace(/MM/g,c).replace(/y{1,4}/g,d).replace(/hh/g,l).replace(/mm/g,o).replace(/ss/g,u).replace(/SSS/g,g).replace(/O/g,j)}function c(e,t,A,r){e["set"+(r?"":"UTC")+t](A)}e.exports=n,e.exports.asString=n,e.exports.parse=function(t,A,r){if(!t)throw new Error("pattern must be supplied");return function(t,A,r){var a=t.indexOf("O")<0,n=[{pattern:/y{1,4}/,regexp:"\\d{1,4}",fn:function(e,t){c(e,"FullYear",t,a)}},{pattern:/MM/,regexp:"\\d{1,2}",fn:function(e,t){c(e,"Month",t-1,a)}},{pattern:/dd/,regexp:"\\d{1,2}",fn:function(e,t){c(e,"Date",t,a)}},{pattern:/hh/,regexp:"\\d{1,2}",fn:function(e,t){c(e,"Hours",t,a)}},{pattern:/mm/,regexp:"\\d\\d",fn:function(e,t){c(e,"Minutes",t,a)}},{pattern:/ss/,regexp:"\\d\\d",fn:function(e,t){c(e,"Seconds",t,a)}},{pattern:/SSS/,regexp:"\\d\\d\\d",fn:function(e,t){c(e,"Milliseconds",t,a)}},{pattern:/O/,regexp:"[+-]\\d{3,4}|Z",fn:function(e,t){"Z"===t&&(t=0);var A=Math.abs(t),r=(t>0?-1:1)*(A%100+60*Math.floor(A/100));e.setUTCMinutes(e.getUTCMinutes()+r)}}],s=n.reduce((function(e,t){return t.pattern.test(e.regexp)?(t.index=e.regexp.match(t.pattern).index,e.regexp=e.regexp.replace(t.pattern,"("+t.regexp+")")):t.index=-1,e}),{regexp:t,index:[]}),i=n.filter((function(e){return e.index>-1}));i.sort((function(e,t){return e.index-t.index}));var d=new RegExp(s.regexp).exec(A);if(d){var l=r||e.exports.now();return i.forEach((function(e,t){e.fn(l,d[t+1])})),l}throw new Error("String '"+A+"' could not be parsed as '"+t+"'")}(t,A,r)},e.exports.now=function(){return new Date},e.exports.ISO8601_FORMAT="yyyy-MM-ddThh:mm:ss.SSS",e.exports.ISO8601_WITH_TZ_OFFSET_FORMAT="yyyy-MM-ddThh:mm:ss.SSSO",e.exports.DATETIME_FORMAT="dd MM yyyy hh:mm:ss.SSS",e.exports.ABSOLUTETIME_FORMAT="hh:mm:ss.SSS"},632:function(e,t,A){"use strict";t.a="data:image/png;base64,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"},646:function(e,t,A){"use strict";A.d(t,"a",(function(){return d}));var r=A(0),a=A.n(r),n=A(1),c=A(16),s=A(7),i=A(24);function d(e){var t=Object(s.useState)({}),A=Object(c.a)(t,2),r=A[0],d=A[1],l=null,o=function(){var t=Object(n.a)(a.a.mark((function t(){var A,r,n,c,s,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isConnected()){t.next=10;break}return t.next=3,Object(i.getUserInfoAll)(e.detail.account);case 3:A=t.sent,r=(+A.total).toFixed(2),n=A.valid?(+A.amount).toFixed(2):0,c=(+A.lp).toFixed(2),s=(+A.trade).toFixed(2),l=A.chainId,d({claimed:r,unclaimed:n,harvestDeriLp:c,harvestDeriTrade:s,chainId:l});case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){return l=window.setInterval(o,18e4),o(),function(){return clearInterval(l)}}),[e.detail.account]),[r,l]}},647:function(e,t,A){"use strict";A.d(t,"a",(function(){return n}));var r=A(177),a=A(24);function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"chainInfo";return r[a.DeriEnv.get()][t][e]||{}}},666:function(e,t,A){"use strict";var r=A(0),a=A.n(r),n=A(1),c=A(16),s=A(7),i=A(96),d=(A(632),A(631)),l=A.n(d),o=A(177),u=A(24),g=(A(622),A(646)),j=A(624),w=A(623),b=A(47),p=A(647),f=A(60);o[u.DeriEnv.get()].chainInfo;t.a=Object(i.b)("wallet")(Object(i.c)((function(e){var t=e.wallet,A=void 0===t?{}:t,r=e.lang,i=Object(g.a)(A),d=Object(c.a)(i,2),o=d[0],O=d[1],x=Object(p.a)(o.chainId),m=Object(s.useState)("--"),h=Object(c.a)(m,2),D=h[0],B=h[1],I=Object(s.useState)("--"),v=Object(c.a)(I,2),C=v[0],Q=v[1],k=Object(s.useState)("--"),M=Object(c.a)(k,2),y=M[0],E=M[1],N=Object(s.useState)("--"),S=Object(c.a)(N,2),J=S[0],Y=S[1],G=Object(s.useState)("--"),R=Object(c.a)(G,2),H=R[0],F=R[1],P=Object(s.useState)(1),T=Object(c.a)(P,2),Z=T[0],z=T[1],K=Object(s.useState)(1),U=Object(c.a)(K,2),L=U[0],W=U[1],_=Object(s.useState)([]),X=Object(c.a)(_,2),V=X[0],q=X[1],$=Object(s.useState)(!1),ee=Object(c.a)($,2),te=ee[0],Ae=ee[1],re=Object(s.useState)([]),ae=Object(c.a)(re,2),ne=ae[0],ce=ae[1],se=Object(s.useState)(""),ie=Object(c.a)(se,2),de=ie[0],le=ie[1],oe=function(){var e=Object(n.a)(a.a.mark((function e(){var t,r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/broker/".concat(A.detail.account,"/reward_list"),e.next=3,Object(u.fetchRestApi)(t);case 3:(r=e.sent).data&&(n=r.data.map((function(e){var t={};return t.address=e.trader_address,t.trader_volume=e.trader_volume,t.deri_reward=e.deri_reward,t.trader_invite_timestamp=1e3*e.trader_invite_timestamp,t.trader_address=e.trader_address.slice(0,6)+"..."+e.trader_address.slice(e.trader_address.length-4,e.trader_address.length),t})),q(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(n.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/broker/".concat(A.detail.account,"/get_harvest_deri"),e.next=3,Object(u.fetchRestApi)(t);case 3:(r=e.sent).data&&Y(r.data.deri_reward);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=Object(n.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/broker/top3_reward_list",e.next=3,Object(u.fetchRestApi)("/broker/top3_reward_list");case 3:(t=e.sent).data&&(t.data.length?t.data.map((function(e){1===e.rank?B(e.deri_reward):2===e.rank?Q(e.deri_reward):3===e.rank&&E(e.deri_reward)})):(B(0),Q(0),E(0)));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=Object(n.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/broker/".concat(A.detail.account,"/total_reward"),e.next=3,Object(u.fetchRestApi)(t);case 3:(r=e.sent).data&&(r.data.hasOwnProperty("deri_reward")?F(r.data.rank):F(">999"));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=function(){var e=Object(n.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==+o.unclaimed){e.next=3;break}return alert(r["no-deri-to-claim"]),e.abrupt("return");case 3:if(Object(b.c)(A.detail.chainId,o.chainId)){e.next=6;break}return alert("".concat(r["your-deri-is-on"]," ").concat(x.text,"  ").concat(r["connect-to"]," ").concat(x.text," ").concat(r["to-claim"],".")),e.abrupt("return");case 6:if(!(parseInt(Date.now()/1e3)%28800<1800)){e.next=10;break}return alert(r["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]),e.abrupt("return");case 10:return e.next=12,Object(u.mintDToken)(A.detail.chainId,A.detail.account);case 12:if(!e.sent.success){e.next=18;break}return clearInterval(O),e.abrupt("return",!0);case 18:return alert(r["claim-failed"]),e.abrupt("return",!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(n.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!A.isConnected()){e.next=5;break}return e.next=3,we();case 3:e.sent&&Ae(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){if(V.length){var e=V.length/10;e=Math.ceil(e);var t=V.slice(10*(L-1),10*L);z(e),ce(t)}}),[A.detail,V,L]),Object(s.useEffect)((function(){A&&A.detail&&A.detail.account&&(oe(),ge(),je())}),[A.detail]),Object(s.useEffect)((function(){var e;return e=window.setInterval(ue(),18e4),function(){e&&clearInterval(e)}}),[A.detail.account]),Object(s.useEffect)((function(){var e;return e=window.setInterval((function(){var e=28800,t=parseInt(Date.now()/1e3),A=parseInt(t/e)*e+e-t,a=parseInt(A/3600),n=parseInt(A%3600/60),c=parseInt(A%60);le("".concat(a," ").concat(r.h," ").concat(n," ").concat(r.m," ").concat(c," ").concat(r.s))}),1e3),function(){e&&clearInterval(e)}}),[A.detail.account]),Object(f.jsxs)("div",{className:"broker",children:[Object(f.jsxs)("div",{className:"title",children:[r["title-one"],Object(f.jsx)("br",{}),r["title-two"]]}),Object(f.jsxs)("div",{className:"rewards",children:[Object(f.jsxs)("div",{className:"reward-box",children:[Object(f.jsxs)("div",{className:"rewards-left",children:[Object(f.jsxs)("div",{className:"rewards-one",children:[Object(f.jsxs)("div",{className:"num",children:[Object(f.jsx)("span",{children:Object(f.jsx)(j.a,{value:D,displayType:"text",thousandSeparator:!0,decimalScale:"2"})})," DERI"]}),Object(f.jsxs)("div",{className:"one",children:["# 1 ",r.rewards]})]}),Object(f.jsxs)("div",{className:"rewards-three",children:[Object(f.jsxs)("div",{className:"num",children:[Object(f.jsx)("span",{children:Object(f.jsx)(j.a,{value:y,displayType:"text",thousandSeparator:!0,decimalScale:"2"})}),"  DERI"]}),Object(f.jsxs)("div",{className:"one",children:["# 3 ",r.rewards]})]})]}),Object(f.jsxs)("div",{className:"rewards-right",children:[Object(f.jsxs)("div",{className:"rewards-two",children:[Object(f.jsxs)("div",{className:"num",children:[Object(f.jsx)("span",{children:Object(f.jsx)(j.a,{value:C,displayType:"text",thousandSeparator:!0,decimalScale:"2"})})," DERI"]}),Object(f.jsxs)("div",{className:"one",children:["# 2 ",r.rewards]})]}),Object(f.jsxs)("div",{className:"rewards-frou",children:[Object(f.jsx)("div",{className:"num",children:Object(f.jsx)("span",{children:H})}),Object(f.jsx)("div",{className:"one",children:r["your-rewards"]})]})]})]}),Object(f.jsx)("div",{className:"bg-box"})]}),Object(f.jsxs)("div",{className:"process",children:[Object(f.jsx)("div",{className:"invite",children:r["invute-friends"]}),Object(f.jsx)("div",{className:"proce"}),Object(f.jsx)("div",{className:"bind",children:r["bind-address"]}),Object(f.jsx)("div",{className:"proce"}),Object(f.jsx)("div",{className:"earn",children:r["earn-deri"]})]}),Object(f.jsxs)("div",{className:"rules",children:[Object(f.jsx)("div",{}),Object(f.jsx)("div",{children:Object(f.jsxs)("a",{target:"_blank",href:"https://docs.deri.finance/guides/mining#mining-by-brokerage-mining-0-01deri-per-contract-or-distributed-per-volume-weight-if-breaching-the-hourly-upper-limit",children:[r["detailed-rules"]," >>"]})})]}),Object(f.jsxs)("div",{className:"my-harvest",children:[Object(f.jsx)("div",{className:"header",children:r["my-harvest"]}),Object(f.jsxs)("div",{className:"list",children:[Object(f.jsxs)("div",{className:"my-deri",children:[Object(f.jsx)("div",{className:"claim-deri",children:Object(f.jsxs)("div",{className:"claimed-deri",children:[Object(f.jsxs)("div",{className:"unclaimed-title",children:[Object(f.jsx)("span",{title:r["your-total-unclaimed-deri-title"],children:r["current-epoch-remaining-time"]}),Object(f.jsx)("span",{className:"deri-text",children:de})]}),Object(f.jsxs)("div",{className:"unclaimed-title",children:[Object(f.jsx)("span",{title:r["your-total-unclaimed-deri-title"],children:r["my-trading-volume-in-current-hour"]}),Object(f.jsxs)("span",{className:"deri-text",children:[Object(f.jsx)(j.a,{value:(+J).toFixed(2),displayType:"text",thousandSeparator:!0,decimalScale:"2"}),"  DERI"]})]}),Object(f.jsxs)("div",{className:"claimed-title",children:[Object(f.jsx)("span",{className:"hover-title",title:r["your-total-claimed-deri-title"],children:r["claimed-deri"]}),Object(f.jsx)("span",{className:"deri-text",children:te?(+o.claimed+ +o.unclaimed).toFixed(2):o.claimed})]}),Object(f.jsxs)("div",{className:"unclaimed-title",children:[Object(f.jsx)("span",{className:"hover-title",title:r["your-total-unclaimed-deri-title"],children:r["unclaimed-deri"]}),Object(f.jsx)("span",{className:"deri-text",children:te?0:(+o.unclaimed).toFixed(2)})]})]})}),Object(f.jsx)("div",{className:"button",children:Object(f.jsx)(w.a,{className:"btn",btnText:r.claim,lang:r,click:be})})]}),Object(f.jsxs)("div",{className:"address-list",children:[Object(f.jsxs)("div",{className:"list-title",children:[Object(f.jsx)("div",{className:"time-invited",children:r["time-invited"]}),Object(f.jsx)("div",{className:"friends-add",children:r["friends-add"]}),Object(f.jsx)("div",{className:"contract-vol",children:r["contract-vol"]}),Object(f.jsx)("div",{className:"deri-minted",children:r["deri-minted"]})]}),ne.map((function(e,t){return Object(f.jsxs)("div",{className:"list-box",children:[Object(f.jsx)("div",{className:"time",children:l.a.asString("yyyy-MM-dd hh:mm",new Date(parseInt(e.trader_invite_timestamp)))}),Object(f.jsx)("div",{className:"address",children:e.trader_address}),Object(f.jsx)("div",{className:"volume",children:e.trader_volume}),Object(f.jsx)("div",{className:"deri",children:Object(f.jsx)(j.a,{value:e.deri_reward,displayType:"text",thousandSeparator:!0,decimalScale:"2"})})]},t)}))]}),Object(f.jsxs)("div",{className:"page-of",children:[Object(f.jsx)("div",{onClick:function(){var e=L;1!=e&&(e-=1),W(e)},children:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"9.6",height:"8",viewBox:"0 0 9.6 8",children:Object(f.jsx)("path",{id:"\u8def\u5f84_3","data-name":"\u8def\u5f84 3",d:"M3186.224,481.353a.4.4,0,1,1,.552.58l-3.069,2.91h7.993a.4.4,0,1,1,0,.8h-7.98l3.056,2.91a.4.4,0,0,1-.552.58l-3.49-3.324a.8.8,0,0,1,.007-1.138Z",transform:"translate(-3182.5 -481.243)",fill:"#aaa"})})}),Object(f.jsxs)("div",{className:"page",children:[r.page," ",L," ",r.of," ",Z]}),Object(f.jsx)("div",{onClick:function(){var e=L;e<Z&&(e+=1),W(e)},children:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"9.6",height:"8",viewBox:"0 0 9.6 8",children:Object(f.jsx)("path",{id:"\u8def\u5f84_4","data-name":"\u8def\u5f84 4",d:"M3268.376,481.353a.4.4,0,0,0-.552.58l3.069,2.91H3262.9a.4.4,0,0,0,0,.8h7.98l-3.056,2.91a.4.4,0,0,0,.552.58l3.49-3.324a.8.8,0,0,0-.007-1.138Z",transform:"translate(-3262.5 -481.243)",fill:"#aaa"})})})]})]})]})]})})))}}]);
//# sourceMappingURL=6.8c95cd11.chunk.js.map