(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[14],{621:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),c=n.n(a),r=n(1),s=n(18),i=n(7),o=n(56);function l(e){var t=e.btnText,n=e.className,a=e.disabled,l=e.click,p=e.afterClick,b=e.checkApprove,u=e.wallet,d=e.spec,j=e.lang,A=Object(i.useState)(a?"disabled":"enabled"),f=Object(s.a)(A,2),O=f[0],x=f[1],m=Object(i.useState)(!0),h=Object(s.a)(m,2),v=h[0],y=h[1],w=Object(i.useState)(!1),k=Object(s.a)(w,2),g=k[0],S=k[1],N=Object(i.useRef)(null),I=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===O){e.next=2;break}return e.abrupt("return");case 2:return T(),e.next=5,l();case 5:e.sent&&p&&p(),V();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){x("disabled"),S(!0),N.current&&(N.current.style.display="inline-block")},V=function(){N.current&&(N.current.style.display="none"),x("enabled"),S(!1)},C=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(b&&u&&u.detail.account)){e.next=5;break}return e.next=3,u.isApproved(d.pool,d.bTokenId);case 3:t=e.sent,y(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(),e.next=3,u.approve(d.pool,d.bTokenId);case 3:e.sent.success?y(!0):(y(!1),alert(j["approve-failed"])),V();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return C(),function(){}}),[u,d,b]),Object(o.jsxs)("button",{className:n,onClick:function(){v?I():Y()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:N,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),g?j.pending:v?t:j.approve]})}},622:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(27),c=n(175),r=n(18),s=n(7),i=n(623),o=n(56);function l(e){var t=Object(s.useState)("--"),n=Object(r.a)(t,2),l=n[0],p=n[1];return Object(s.useEffect)((function(){var t=e.allowZero,n=Object(c.a)(e,["allowZero"]);return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&p(Object(o.jsx)(i.a,Object(a.a)(Object(a.a)({},n),{},{displayType:"text"}))),function(){}}),[e.value]),l}},646:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),c=n.n(a),r=n(1),s=n(18),i=n(7),o=n(23),l=n(174),p=n(41),b=o.DeriEnv.get(),u=l[b].chainInfo;function d(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),a=n[0],l=n[1],d=Object(i.useState)([]),j=Object(s.a)(d,2),A=j[0],f=j[1],O=Object(i.useState)([]),x=Object(s.a)(O,2),m=x[0],h=x[1],v=Object(i.useState)([]),y=Object(s.a)(v,2),w=y[0],k=y[1];return Object(i.useEffect)((function(){var t=function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getPoolLiquidity)(t.chainId,t.pool,t.bTokenId);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(o.getPoolInfoApy)(t.chainId,t.pool,t.bTokenId);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:return a=e.t1,r=t.pool||"",e.abrupt("return",Object.assign(t,{network:u[t.chainId].name,liquidity:n.liquidity,apy:(100*+a.apy).toFixed(2),pool:Object(p.c)(r),address:r,type:"perpetual",buttonText:"STAKING"}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=Object(o.getContractAddressConfig)(b,e.current),a=Object(o.getContractAddressConfig)(b,"v1");n=n.reduce((function(e,t){var n=e.findIndex((function(e){return e.bTokenSymbol===t.bTokenSymbol}));return n>-1&&-1===e[n].symbol.indexOf(t.symbol)?e[n].symbol+=",".concat(t.symbol):e.push(t),e}),[]),n=e.isV2?n.map(t):a.map(t);var s=Object(o.getLpContractAddressConfig)(b).map(function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a,r,s,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getPoolLiquidity)(t.chainId,t.pool);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(o.getPoolInfoApy)(t.chainId,t.pool);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:if(a=e.t1,r=t.pool||"",!Object(p.h)(t.pool)){e.next=18;break}return e.next=16,Object(o.getLpPoolInfoApy)(t.chainId,t.pool);case 16:l=e.sent,s=(100*+l.apy2).toFixed(2);case 18:return Object(p.i)(t.pool)&&(i="SUSHI-APY"),Object(p.g)(t.pool)&&(i="CAKE-APY"),e.abrupt("return",Object.assign(t,{network:u[t.chainId].name,liquidity:n.liquidity,apy:(100*+a.apy).toFixed(2),pool:Object(p.c)(r),lpApy:s,address:r,type:"lp",label:i,buttonText:"STAKING"}));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),i=n.concat(s);return Promise.all(i).then((function(e){var t=e.filter((function(e){return"v1"===e.version||!e.version})),n=e.filter((function(e){return"v2"===e.version}));k(n),h(t),f(e),l(!0)})),function(){return A.length=0}}),[e.current]),[a,A,m,w]}},655:function(e,t,n){"use strict";var a=n(0),c=n.n(a),r=n(1),s=n(18),i=n(7),o=n(31),l=n(174),p=n(23),b=n(622),u=n(95),d=n(621),j=n(41),A=n(56),f=l[p.DeriEnv.get()].chainInfo;t.a=Object(u.b)("wallet","version")(Object(u.c)((function(e){var t=e.wallet,n=e.version,a=e.pool,l=e.lang,u=Object(i.useState)(""),O=Object(s.a)(u,2),x=O[0],m=O[1],h="logo ".concat(a.bTokenSymbol),v=Object(o.useHistory)(),y=function(){t.connect()},w=function(){var e=Object(r.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.getUserInfoAllForAirDrop)(t.detail.account);case 2:if((n=e.sent).valid){e.next=6;break}return alert(l["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(j.b)(t.detail.chainId,n.chainId)){e.next=9;break}return alert(l["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(p.mintAirdrop)(n.chainId,t.detail.account);case 11:e.sent.success||alert(l["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){if(a&&a.airdrop)t.isConnected()?m(Object(A.jsx)(d.a,{btnText:l.claim,click:w,lang:l})):m(Object(A.jsx)(d.a,{btnText:l["connect-wallet"],click:y,lang:l}));else{var e="/mining/".concat(a.version||"v1","/").concat(a.chainId,"/").concat(a.type,"/").concat(a.symbol,"/").concat(a.bTokenSymbol,"/").concat(a.address);a.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(a.bTokenId)),a.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(a.symbolId):"".concat(e,"?symbolId=").concat(a.symbolId)),m(Object(A.jsx)("button",{onClick:function(){return function(e){v.push(e)}(e)},children:l.staking}))}return function(){}}),[a]),Object(A.jsxs)("div",{className:"pool",children:[Object(A.jsxs)("div",{className:"pool-header",children:[Object(A.jsx)("div",{className:"network",children:a.network&&a.network.toUpperCase()}),Object(A.jsxs)("div",{className:"pool-label",children:[n.isV2&&"v1"===a.version&&Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACpUlEQVRIicVWT2jTYBx9k4ZlLYhQb3aXFdZO8NCAG7RSVukOOmUwkLmDCN4UPSxF0PZeCqMZHmoOwi6evEgr4k2PTpeTUDrbyURaL8UU7GT1DzTyyS/lW0zabFZ98BGatvm99773+30ZMQwD/wspWfYCCAAYB1D3/AseKVlmxfxU1E9rkr6uAegwMkNzhlN5nCtmFtZp1flrXlF0/hmDyLyg61mLyjEAIbPYbCKRiEajM51O58OaoqxTMbb28opSo78mAeQA3ACwaVfMloyp8m46nfP5fKdKxeIzTdM+kfJ9KuPx+Pfz8/NZQRB+ALgC4KPlcScAZABMA2jzwqzwpGSZqYtylprKG9Vq9YskSYhEIm1N0x5xKnk8JKfWLESS3GrTPVtHTHjI7jFS+9Kyl0zNyVA47HcgkgYwBeAxLRNXAcwA2AKwQJ8X+5FhprgJ8G+5ISwSmS3ann4ose16t719WVXVI+S+1xLyp25a+y05NM0pYzm4SfbfsVHZa+VYLHY6OTcnNZvNjqqqt6mVzdw9p51g+YMbMq+JyBRHJmcYxrH3OzvrhUIhDEByaOXaZCg0Kori50AgcC+vKA/6FRpIplKptILBoFdvtZbyq6sjS8vLC8GJiTPlcrn2pFQapczVrSo5nAPwFcCbQbV+ZcZhYJn39HQmc0kQhG+vNjbU2UTierfb3RRF8ZoLV48CKALYpSD3JyOvrFwEcIEfyzYD6z43J3YpsO0BzwYXctZpWVfOuABrzVv0M8cJaoM0EcryrZ+SZdP5cW6u1f7aqU3DlD8c+UOywZznOotN98Yfk3FQyZ/IZmdVWQxsAt6DKzKW9w6ryl4bk1pWrJFXlL2DCttHxsV7h255BXBUeRiwbopSNw1V5WHAhh7by/qwVR4YAH4C104ah/PdWdoAAAAASUVORK5CYII=",alt:"v1"}),n.isV2&&"v2"===a.version&&Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACuUlEQVRIicVWS2gTURQ9hcTEBAtpstOsGtoaKZhAKswiJkUIWkUtSOmiCO78LTrpIqYLd6VQEgkSBReRkpUbm/hbVVdCtQNuAqMZpC7S7hKRGBNKICNP7pRnkmlGbe2Bx4Nh5t577j3nvelTVRUHhago2gAcA+AGUDL9jzqiosiSHQYwDMBJS3umAGiwYvasMxxLFyUbAqA9q9Aq8XsimazwMXoV84b28d1YhsLhsCAIp37UalupVOoRSxaJREyBQOCsY2DAz8VbB/AewHK3ZLrFREVx6E48vmi320fzudwrSZLKxLJBzNhqBIPBb+cmJhbMZnMTwAyALQCTAOIAPgJYoJ1hEcAZAPe7FWSKiiJjJxBbNzfLzWKxWPP7/fD5fFVJkp4kkkmlS91Zev8eFcJwC0AVwE3aNcQA5AFc7VoMl5wxft42yzEA3uGREadOIYz9cQBPaWkYp4TVLt8c0ZmEzYiAO3RD4Ecx0ysIQ7PZTKiqGlEU5eXjTOYtiVxz1wsj1v5EHRojATIc5UYR68LSzdnX6fV6vadDoUsOh8Mhy/JqbmVF09BrmgTTX083gdp9u010WVVVT3zZ2Mik0+kPnJU1ljtWjs7NXXa5XKNQVfmQxXKXE3MHenZGluWvHo/HWq5UphJLS31T09MXPYODQqFQ+Pwsn7cAOEnOYizrnLYmqXv9AJb07MzjV2d6HVjx+fkrZrN5+93a2sNQOHy91WqtW63Wazox+8nC2lhjOkLuLEacnb0A4DyzctspWeZYPqDgLOh3Eqxegiw5bJlGaxhGrwNNNww3OCHv9p4eVqOimKHO8+easm+3Nh2mO47idl7gijYFNpl/LqbdxpzmwCXjL8eSXixDxbT9d9h0bMwS1ynpZiKZrP8psd+K2UuWfwPmJoHc5DT637FfYIdesc3GBwMAPwHwfCc5wAJXPgAAAABJRU5ErkJggg==",alt:"v2"})]})]}),Object(A.jsx)("div",{className:"pool-info",children:Object(A.jsxs)("div",{className:"info-center",children:[Object(A.jsxs)("div",{className:"top-info",children:[Object(A.jsx)("div",{className:h}),Object(A.jsxs)("div",{className:"pool-detail",children:[Object(A.jsx)("div",{className:"base-token",children:a.bTokenSymbol}),Object(A.jsxs)("div",{children:[Object(A.jsx)("span",{className:"title",children:a.airdrop?l.total:l["pool-liq"]}),Object(A.jsx)(b.a,{value:a.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:a.lpApy?7:0})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("span",{children:l.symbol}),a.symbol]}),Object(A.jsxs)("div",{className:"apy",children:[Object(A.jsx)("span",{children:l.apy}),Object(A.jsxs)("span",{children:[Object(A.jsx)("span",{className:a.lpApy?"sushi-apy-underline":"",title:a.lpApy&&l["deri-apy"],children:a.apy?Object(A.jsx)(b.a,{value:a.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),a.lpApy&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("span",{children:" + "}),Object(A.jsxs)("span",{className:a.lpApy?"sushi-apy-underline":"",title:a.lpApy&&a.label,children:[" ",Object(A.jsx)(b.a,{value:a.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]}),Object(A.jsxs)("div",{className:"pool-address",children:[Object(A.jsx)("span",{children:l.address}),a.airdrop?"--":Object(A.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(f[a.chainId].viewUrl,"/address/").concat(a.address||a.pool),children:a.pool})]})]})]}),Object(A.jsx)("div",{className:"bottom-btn",children:x})]})})]})})))},697:function(e,t,n){},698:function(e,t,n){},727:function(e,t,n){"use strict";n.r(t);var a=n(655),c=n(646),r=(n(697),n(698),n(95)),s=n(56);t.default=Object(r.b)("version")(Object(r.c)((function({version:e,lang:t}){const[n,r,i,o]=Object(c.a)(e);return Object(s.jsxs)("div",{className:"mining-info",children:[Object(s.jsxs)("div",{className:"pools",children:[o.map(((e,n)=>Object(s.jsx)(a.a,{pool:e,lang:t},n))),!n&&Object(s.jsx)("div",{className:"loading",children:Object(s.jsx)("span",{className:"spinner spinner-border spinner-border-sm"})})]}),Object(s.jsx)("div",{className:"pools",children:i.map(((e,n)=>Object(s.jsx)(a.a,{pool:e,lang:t},n)))})]})})))}}]);
//# sourceMappingURL=14.e860308c.chunk.js.map