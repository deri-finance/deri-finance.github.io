webpackJsonp([4],{"2/AF":function(t,a,i){t.exports=i.p+"static/img/Richard.d662dec.png"},BjUX:function(t,a,i){t.exports=i.p+"static/img/0xAlpha.d2a81cf.png"},Bujh:function(t,a){},Jbt9:function(t,a){},M3Lz:function(t,a){},MkJQ:function(t,a,i){"use strict";var e=i("2opj"),n={name:"copyright",data:function(){return{bottom_note_link_data:{App:{name:"App",url:e.a.App,faclass:"fa-paper-plane",outurl:!0},Docs:{name:"Docs",url:e.a.Docs,faclass:"fa-github",outurl:!0},Team:{name:"Team",url:"/team",faclass:"fa-twitter",outurl:!1},FAQ:{name:"FAQ",url:e.a.FAQ,faclass:"fa-medium",outurl:!0}},bottom_sign_link_data:{Telegram:{name:"Telegram",url:e.a.Telegram,faclass:"fa-paper-plane",outurl:!0},Github:{name:"Github",url:e.a.Github,faclass:"fa-github",outurl:!0},Twitter:{name:"Twitter",url:e.a.Twitter,faclass:"fa-twitter",outurl:!0},Medium:{name:"Medium",url:e.a.Medium,faclass:"fa-medium",outurl:!0},Mail:{name:"Mail",url:e.a.Mail,faclass:"fa-envelope",outurl:!0}}}},methods:{to_url:function(t){t.outurl&&window.open(t.url)}}},s={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"copyright"}},[i("div",{attrs:{id:"copyright_center"}},[i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"copyright-L"},[i("div",[i("ul",{attrs:{id:"index"}},t._l(t.bottom_note_link_data,function(a,e){return i("li",{key:e,staticClass:"menu_li"},[a.outurl?i("a",{attrs:{href:a.url}},[t._v(t._s(a.name))]):i("router-link",{attrs:{to:a.url}},[t._v(t._s(a.name))])],1)}),0)]),t._v(" "),i("div",[t._v("\n        © 2021 Deri Protocol\n      ")])]),t._v(" "),i("div",{staticClass:"copyright-R"},[t._l(t.bottom_sign_link_data,function(a,e){return i("div",{key:e,staticClass:"circle",on:{click:function(i){return t.to_url(a)}}},[i("div",{staticClass:"link_in_bottom fa",class:a.faclass})])}),t._v(" "),t._m(0),t._v(" "),i("div",{attrs:{id:"Visit-us-on"}},[t._v("Visit us on")])],2)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"circle"},[a("div",{staticClass:"wechat"},[a("div",{staticClass:"down_box"})]),this._v(" "),a("div",{staticClass:"link_in_bottom fa fa-wechat"})])}]};var r=i("VU/8")(n,s,!1,function(t){i("M3Lz")},"data-v-16dbbc18",null);a.a=r.exports},QNOe:function(t,a){},VFXT:function(t,a,i){"use strict";var e=i("fZjL"),n=i.n(e),s=i("2opj"),r={name:"navigation",props:["currently"],data:function(){return{index_data:{Mining:{name:"Mining",url:s.a.Mining,outurl:!0},Trade:{name:"Trade",url:s.a.Trade,outurl:!0},Governance:{name:"Governance",url:s.a.Governance,outurl:!0},Bridge:{name:"Bridge",url:s.a.Bridge,outurl:!0},Docs:{name:"Docs",url:s.a.Docs,outurl:!1}},docs_index_data:{Whitepaper:{name:"Whitepaper",url:s.a.Whitepaper,outurl:!0},"Code Audit":{name:"Code Audit",url:s.a.CodeAudit,outurl:!0},Team:{name:"Team",url:"/team",outurl:!1},FAQ:{name:"FAQ",url:s.a.FAQ,outurl:!0},Guide:{name:"Guide",url:s.a.Guide,outurl:!0},Github:{name:"Github",url:s.a.Github,outurl:!0}},docs:!1,docs_active:!1}},methods:{to_index:function(){window.location.href="#/index"}},beforeMount:function(){this.docs_active=n()(this.docs_index_data).indexOf(this.currently)>=0}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"nav"}},[e("div",{attrs:{id:"nav_center"}},[e("img",{attrs:{id:"logo",src:i("tW4W"),alt:"DERI"},on:{click:t.to_index}}),t._v(" "),e("ul",{attrs:{id:"index"}},t._l(t.index_data,function(a,i){return e("li",{key:i,staticClass:"menu_li"},[t.currently===a.name?e("span",{staticClass:"light menu"},[t._v(t._s(a.name))]):"Docs"===a.name?e("div",{staticClass:"menu",attrs:{id:"docs"},on:{mouseover:function(a){t.docs=!0},mouseout:function(a){t.docs=!1}}},[e("a",{class:{dark:!t.docs_active,light:t.docs_active},attrs:{href:a.url}},[t._v("Docs")]),t._v(" "),e("svg",{staticClass:"Zi Zi--ArrowDown ContentItem-arrowIcon",attrs:{fill:"currentColor",viewBox:"0 0 24 24",width:"24",height:"24"}},[e("path",{attrs:{d:"M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z","fill-rule":"evenodd"}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.docs,expression:"docs"}],attrs:{id:"docs_index_outer"},on:{mouseover:function(a){t.docs=!0},mouseout:function(a){t.docs=!1}}},[e("ul",{attrs:{id:"docs_index"}},t._l(t.docs_index_data,function(a,i){return e("li",{key:i,staticClass:"docs_li"},[t.currently===a.name?e("span",{staticClass:"light"},[t._v(t._s(a.name))]):a.outurl?e("a",{staticClass:"dark",attrs:{href:a.url}},[t._v(t._s(a.name))]):e("router-link",{staticClass:"dark",attrs:{to:a.url}},[t._v(t._s(a.name))])],1)}),0)])]):a.outurl?e("a",{staticClass:"dark",attrs:{href:a.url}},[t._v(t._s(a.name))]):e("router-link",{staticClass:"dark menu",attrs:{to:a.url}},[t._v(t._s(a.name)+"\n          ")])],1)}),0),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{attrs:{href:"https://app.deri.finance/"}},[a("div",{attrs:{id:"USE-DERI"}},[this._v("USE DERI")])])}]};var c=i("VU/8")(r,o,!1,function(t){i("QNOe")},"data-v-f37c6c60",null);a.a=c.exports},m78H:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("VFXT"),n=i("MkJQ"),s={name:"Team",components:{navigation:e.a,copyright:n.a},data:function(){return{currently:"Team"}}},r={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"TEAM"}},[a("navigation",{attrs:{currently:this.currently}}),this._v(" "),this._m(0),this._v(" "),this._m(1),this._v(" "),a("copyright")],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"px1200",attrs:{id:"TEAM_part1"}},[i("div",{staticClass:"label H2"},[t._v("TEAM")]),t._v(" "),i("div",[t._v("Deri Protocol is designed and developed by Defi Factory, a team of experts of")]),t._v(" "),i("div",[t._v("finance, math and computer science. The core members have PhD degrees in science")]),t._v(" "),i("div",[t._v("and come from the derivative business of Wall Street. The team has in-depth experiences")]),t._v(" "),i("div",[t._v("of derivative pricing/trading/structuring. The team members have been in the crypto")]),t._v(" "),i("div",[t._v("trading and solidity programming for several years.")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"px1200",attrs:{id:"TEAM_part2"}},[e("div",{staticClass:"top_pater"},[e("div",{staticClass:"bottom_square"}),t._v(" "),e("div",{staticClass:"line_of_box"},[e("div",{staticClass:"box box_left"},[e("img",{staticClass:"person_image",attrs:{src:i("BjUX"),alt:"0xAlpha"}}),t._v(" "),e("div",{staticClass:"name"},[t._v("0xAlpha")]),t._v(" "),e("div",{staticClass:"person_information"},[e("ul",[e("li",[t._v("Co-founder and CEO")]),t._v(" "),e("li",[t._v("Physics BS from Peking University, Physics PhD from Rice University")]),t._v(" "),e("li",[t._v("Worked in Wall Street on derivative pricing/trading/structuring/risk management in Deutsche Bank,\n                HBK hedge fund , Goldman Sachs\n              ")]),t._v(" "),e("li",[t._v("Co-founded a quantitative hedge fund focused on tranditional and crypto derivatives")]),t._v(" "),e("li",[e("a",{staticClass:"link",attrs:{href:"https://twitter.com/0x_alpha"}},[t._v("Twitter: https://twitter.com/0x_alpha")])])])])]),t._v(" "),e("div",{staticClass:"box box_right"},[e("img",{staticClass:"person_image",attrs:{src:i("2/AF"),alt:"Richard"}}),t._v(" "),e("div",{staticClass:"name"},[t._v("Richard")]),t._v(" "),e("div",{staticClass:"person_information"},[e("ul",[e("li",[t._v("Co-founder and CTO")]),t._v(" "),e("li",[t._v("Physics BS from Peking University, Physics PhD from CUNY")]),t._v(" "),e("li",[t._v("Former Director of Strategy of quantitative trading, in charge of strategy development of\n                high-frequency trading, momentum trading, statistical arbitrage\n              ")]),t._v(" "),e("li",[t._v("Expert of financial system development in C++/Python")]),t._v(" "),e("li",[t._v("Expert of solidity/vyper programming and smart contract development")])])])])]),t._v(" "),e("div",{staticClass:"line_of_box"},[e("div",{staticClass:"box box_left"},[e("img",{staticClass:"person_image",attrs:{src:i("mg6U"),alt:"Jason"}}),t._v(" "),e("div",{staticClass:"name"},[t._v("Jason")]),t._v(" "),e("div",{staticClass:"person_information"},[e("ul",[e("li",[t._v("Computer Science BS from University of Washington")]),t._v(" "),e("li",[t._v("Former Software Engineer at Amazon, AMD\n              ")]),t._v(" "),e("li",[t._v(" Early crypto investor\n                Co-founder of a crypto marketing service agency\n              ")])])])]),t._v(" "),e("div",{staticClass:"box box_right"},[e("img",{staticClass:"person_image",attrs:{src:i("xV2y"),alt:"Janice"}}),t._v(" "),e("div",{staticClass:"name"},[t._v("Janice")]),t._v(" "),e("div",{staticClass:"person_information"},[e("ul",[e("li",[t._v("Bachelor of Management from Shanghai University of Finance and Economics")]),t._v(" "),e("li",[t._v("Master of Management from Shanghai University of Finance and Economics\n              ")]),t._v(" "),e("li",[t._v("Worked for PwC China as a senior manager in risk management for 11 years")]),t._v(" "),e("li",[t._v("Two and half year experiences at VeChain Operation")])])])])])])])}]};var o=i("VU/8")(s,r,!1,function(t){i("Bujh"),i("Jbt9")},"data-v-281eace2",null);a.default=o.exports},mg6U:function(t,a,i){t.exports=i.p+"static/img/Jason.aba1a0e.png"},xV2y:function(t,a,i){t.exports=i.p+"static/img/Janice.c62d69f.png"}});