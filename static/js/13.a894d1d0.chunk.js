(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[13],{590:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(0),a=n.n(c),r=n(2),s=n(25),i=n(5),o=n(51);function l(e){var t=e.btnText,n=e.className,c=e.disabled,l=e.click,p=e.afterClick,u=e.checkApprove,b=e.wallet,d=e.spec,j=e.lang,A=Object(i.useState)(c?"disabled":"enabled"),f=Object(s.a)(A,2),O=f[0],x=f[1],h=Object(i.useState)(!0),m=Object(s.a)(h,2),y=m[0],v=m[1],w=Object(i.useState)(!1),k=Object(s.a)(w,2),g=k[0],I=k[1],S=Object(i.useRef)(null),N=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===O){e.next=2;break}return e.abrupt("return");case 2:return T(),e.next=5,l();case 5:e.sent&&p&&p(),C();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){x("disabled"),I(!0),S.current&&(S.current.style.display="inline-block")},C=function(){S.current&&(S.current.style.display="none"),x("enabled"),I(!1)},V=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u&&b&&b.detail.account)){e.next=5;break}return e.next=3,b.isApproved(d.pool,d.bTokenId);case 3:t=e.sent,v(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(),e.next=3,b.approve(d.pool,d.bTokenId);case 3:e.sent.success?v(!0):(v(!1),alert(j["approve-failed"])),C();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return V(),function(){}}),[b,d,u]),Object(o.jsxs)("button",{className:n,onClick:function(){y?N():Y()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:S,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),g?j.pending:y?t:j.approve]})}},591:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(5),a=n(592),r=n(51);function s(e){const[t,n]=Object(c.useState)("--");return Object(c.useEffect)((()=>{const{allowZero:t,...c}=e;return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&n(Object(r.jsx)(a.a,{...c,displayType:"text"})),()=>{}}),[e.value]),t}},612:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(0),a=n.n(c),r=n(2),s=n(82),i=n(25),o=n(5),l=n(20),p=n(161),u=n(41),b=l.DeriEnv.get(),d=p[b].chainInfo;function j(e){var t=Object(o.useState)(!1),n=Object(i.a)(t,2),c=n[0],p=n[1],j=Object(o.useState)([]),A=Object(i.a)(j,2),f=A[0],O=A[1];return Object(o.useEffect)((function(){var t=Object(l.getContractAddressConfig)(b,e.current),n=t.filter((function(e){return"v2"===e.version})).map((function(e){return[e.pool,e.symbol]})).reduce((function(e,t){return e[t[0]]=e[t[0]]||[],e[t[0]].push(t[1]),e}),{}),c=t.filter((function(e){return"v2"===e.version})).filter((function(e,t,n){return n.map((function(e){return e.bTokenId})).indexOf(e.bTokenId)==t})).map((function(e){return e.symbol=Object(s.a)(new Set(n[e.pool])).join(","),e})),i=Object(l.getContractAddressConfig)(b,"v1"),o=c.concat(i).map(function(){var e=Object(r.a)(a.a.mark((function e(t){var n,c,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.getPoolLiquidity)(t.chainId,t.pool,t.bTokenId);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(l.getPoolInfoApy)(t.chainId,t.pool,t.bTokenId);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:return c=e.t1,r=t.pool||"",e.abrupt("return",Object.assign(t,{network:d[t.chainId].name,liquidity:n.liquidity,apy:(100*+c.apy).toFixed(2),pool:Object(u.c)(r),address:r,type:"perpetual",buttonText:"STAKING"}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j=Object(l.getLpContractAddressConfig)(b).map(function(){var e=Object(r.a)(a.a.mark((function e(t){var n,c,r,s,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.getPoolLiquidity)(t.chainId,t.pool);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(l.getPoolInfoApy)(t.chainId,t.pool);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:if(c=e.t1,r=t.pool||"",!Object(u.g)(t.pool)){e.next=18;break}return e.next=16,Object(l.getLpPoolInfoApy)(t.chainId,t.pool);case 16:o=e.sent,s=(100*+o.apy2).toFixed(2);case 18:return Object(u.h)(t.pool)&&(i="SUSHI-APY"),Object(u.f)(t.pool)&&(i="CAKE-APY"),e.abrupt("return",Object.assign(t,{network:d[t.chainId].name,liquidity:n.liquidity,apy:(100*+c.apy).toFixed(2),pool:Object(u.c)(r),lpApy:s,address:r,type:"lp",label:i,buttonText:"STAKING"}));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),A=o.concat(j);return Promise.all(A).then((function(e){e.push({network:"BSC",bTokenSymbol:"GIVEAWAY",liquidity:"4100",symbol:"--",airdrop:!0,buttonText:"CLAIM"}),O(e),p(!0)})),function(){return f.length=0}}),[e.current]),[c,f]}},619:function(e,t,n){"use strict";var c=n(0),a=n.n(c),r=n(2),s=n(25),i=n(5),o=n(30),l=n(161),p=n(20),u=n(591),b=n(86),d=n(590),j=n(41),A=n(51),f=l[p.DeriEnv.get()].chainInfo;t.a=Object(b.b)("wallet","version")(Object(b.c)((function(e){var t=e.wallet,n=e.version,c=e.pool,l=e.lang,b=Object(i.useState)(""),O=Object(s.a)(b,2),x=O[0],h=O[1],m="logo ".concat(c.bTokenSymbol),y=Object(o.useHistory)(),v=function(){t.connect()},w=function(){var e=Object(r.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.getUserInfoAllForAirDrop)(t.detail.account);case 2:if((n=e.sent).valid){e.next=6;break}return alert(l["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(j.b)(t.detail.chainId,n.chainId)){e.next=9;break}return alert(l["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(p.mintAirdrop)(n.chainId,t.detail.account);case 11:e.sent.success||alert(l["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){if(c&&c.airdrop)t.isConnected()?h(Object(A.jsx)(d.a,{btnText:l.claim,click:w,lang:l})):h(Object(A.jsx)(d.a,{btnText:l["connect-wallet"],click:v,lang:l}));else{var e="/mining/".concat(c.version||"v1","/").concat(c.chainId,"/").concat(c.type,"/").concat(c.symbol,"/").concat(c.bTokenSymbol,"/").concat(c.address);c.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(c.bTokenId)),c.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(c.symbolId):"".concat(e,"?symbolId=").concat(c.symbolId)),h(Object(A.jsx)("button",{onClick:function(){return function(e){y.push(e)}(e)},children:l.staking}))}return function(){}}),[c]),Object(A.jsxs)("div",{className:"pool",children:[Object(A.jsxs)("div",{className:"pool-header",children:[Object(A.jsx)("div",{className:"network",children:c.network&&c.network.toUpperCase()}),Object(A.jsxs)("div",{className:"pool-label",children:[n.isV2&&"v1"===c.version&&Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACpUlEQVRIicVWT2jTYBx9k4ZlLYhQb3aXFdZO8NCAG7RSVukOOmUwkLmDCN4UPSxF0PZeCqMZHmoOwi6evEgr4k2PTpeTUDrbyURaL8UU7GT1DzTyyS/lW0zabFZ98BGatvm99773+30ZMQwD/wspWfYCCAAYB1D3/AseKVlmxfxU1E9rkr6uAegwMkNzhlN5nCtmFtZp1flrXlF0/hmDyLyg61mLyjEAIbPYbCKRiEajM51O58OaoqxTMbb28opSo78mAeQA3ACwaVfMloyp8m46nfP5fKdKxeIzTdM+kfJ9KuPx+Pfz8/NZQRB+ALgC4KPlcScAZABMA2jzwqzwpGSZqYtylprKG9Vq9YskSYhEIm1N0x5xKnk8JKfWLESS3GrTPVtHTHjI7jFS+9Kyl0zNyVA47HcgkgYwBeAxLRNXAcwA2AKwQJ8X+5FhprgJ8G+5ISwSmS3ann4ose16t719WVXVI+S+1xLyp25a+y05NM0pYzm4SfbfsVHZa+VYLHY6OTcnNZvNjqqqt6mVzdw9p51g+YMbMq+JyBRHJmcYxrH3OzvrhUIhDEByaOXaZCg0Kori50AgcC+vKA/6FRpIplKptILBoFdvtZbyq6sjS8vLC8GJiTPlcrn2pFQapczVrSo5nAPwFcCbQbV+ZcZhYJn39HQmc0kQhG+vNjbU2UTierfb3RRF8ZoLV48CKALYpSD3JyOvrFwEcIEfyzYD6z43J3YpsO0BzwYXctZpWVfOuABrzVv0M8cJaoM0EcryrZ+SZdP5cW6u1f7aqU3DlD8c+UOywZznOotN98Yfk3FQyZ/IZmdVWQxsAt6DKzKW9w6ryl4bk1pWrJFXlL2DCttHxsV7h255BXBUeRiwbopSNw1V5WHAhh7by/qwVR4YAH4C104ah/PdWdoAAAAASUVORK5CYII=",alt:"v1"}),n.isV2&&"v2"===c.version&&Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACuUlEQVRIicVWS2gTURQ9hcTEBAtpstOsGtoaKZhAKswiJkUIWkUtSOmiCO78LTrpIqYLd6VQEgkSBReRkpUbm/hbVVdCtQNuAqMZpC7S7hKRGBNKICNP7pRnkmlGbe2Bx4Nh5t577j3nvelTVRUHhago2gAcA+AGUDL9jzqiosiSHQYwDMBJS3umAGiwYvasMxxLFyUbAqA9q9Aq8XsimazwMXoV84b28d1YhsLhsCAIp37UalupVOoRSxaJREyBQOCsY2DAz8VbB/AewHK3ZLrFREVx6E48vmi320fzudwrSZLKxLJBzNhqBIPBb+cmJhbMZnMTwAyALQCTAOIAPgJYoJ1hEcAZAPe7FWSKiiJjJxBbNzfLzWKxWPP7/fD5fFVJkp4kkkmlS91Zev8eFcJwC0AVwE3aNcQA5AFc7VoMl5wxft42yzEA3uGREadOIYz9cQBPaWkYp4TVLt8c0ZmEzYiAO3RD4Ecx0ysIQ7PZTKiqGlEU5eXjTOYtiVxz1wsj1v5EHRojATIc5UYR68LSzdnX6fV6vadDoUsOh8Mhy/JqbmVF09BrmgTTX083gdp9u010WVVVT3zZ2Mik0+kPnJU1ljtWjs7NXXa5XKNQVfmQxXKXE3MHenZGluWvHo/HWq5UphJLS31T09MXPYODQqFQ+Pwsn7cAOEnOYizrnLYmqXv9AJb07MzjV2d6HVjx+fkrZrN5+93a2sNQOHy91WqtW63Wazox+8nC2lhjOkLuLEacnb0A4DyzctspWeZYPqDgLOh3Eqxegiw5bJlGaxhGrwNNNww3OCHv9p4eVqOimKHO8+easm+3Nh2mO47idl7gijYFNpl/LqbdxpzmwCXjL8eSXixDxbT9d9h0bMwS1ynpZiKZrP8psd+K2UuWfwPmJoHc5DT637FfYIdesc3GBwMAPwHwfCc5wAJXPgAAAABJRU5ErkJggg==",alt:"v2"})]})]}),Object(A.jsx)("div",{className:"pool-info",children:Object(A.jsxs)("div",{className:"info-center",children:[Object(A.jsxs)("div",{className:"top-info",children:[Object(A.jsx)("div",{className:m}),Object(A.jsxs)("div",{className:"pool-detail",children:[Object(A.jsx)("div",{className:"base-token",children:c.bTokenSymbol}),Object(A.jsxs)("div",{children:[Object(A.jsx)("span",{className:"title",children:c.airdrop?l.total:l["pool-liq"]}),Object(A.jsx)(u.a,{value:c.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:c.lpApy?7:0})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("span",{children:l.symbol}),c.symbol]}),Object(A.jsxs)("div",{className:"apy",children:[Object(A.jsx)("span",{children:l.apy}),Object(A.jsxs)("span",{children:[Object(A.jsx)("span",{className:c.lpApy?"sushi-apy-underline":"",title:c.lpApy&&l["deri-apy"],children:c.apy?Object(A.jsx)(u.a,{value:c.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),c.lpApy&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("span",{children:" + "}),Object(A.jsxs)("span",{className:c.lpApy?"sushi-apy-underline":"",title:c.lpApy&&c.label,children:[" ",Object(A.jsx)(u.a,{value:c.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]}),Object(A.jsxs)("div",{className:"pool-address",children:[Object(A.jsx)("span",{children:l.address}),c.airdrop?"--":Object(A.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(f[c.chainId].viewUrl,"/address/").concat(c.address||c.pool),children:c.pool})]})]})]}),Object(A.jsx)("div",{className:"bottom-btn",children:x})]})})]})})))},661:function(e,t,n){},662:function(e,t,n){},687:function(e,t,n){"use strict";n.r(t);var c=n(25),a=n(619),r=n(612),s=(n(661),n(662),n(86)),i=n(51);t.default=Object(s.b)("version")(Object(s.c)((function(e){var t=e.version,n=e.lang,s=Object(r.a)(t),o=Object(c.a)(s,2),l=o[0],p=o[1];return Object(i.jsx)("div",{className:"mining-info",children:Object(i.jsxs)("div",{className:"pools",children:[p.map((function(e,t){return Object(i.jsx)(a.a,{pool:e,lang:n},t)})),!l&&Object(i.jsx)("div",{className:"loading",children:Object(i.jsx)("span",{className:"spinner spinner-border spinner-border-sm"})})]})})})))}}]);
//# sourceMappingURL=13.a894d1d0.chunk.js.map