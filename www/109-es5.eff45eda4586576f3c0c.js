function _defineProperties(n,e){for(var l=0;l<e.length;l++){var t=e[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,e,l){return e&&_defineProperties(n.prototype,e),l&&_defineProperties(n,l),n}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{MH7c:function(n,e,l){"use strict";l.r(e);var t=l("8Y7J"),o=function n(){_classCallCheck(this,n)},r=l("pMnS"),u=l("MKJQ"),i=l("sZkV"),a=l("SVse"),c=l("tvKB"),s=l("yTNM"),p=function(){function n(e,l,t,o){_classCallCheck(this,n),this.router=e,this.route=l,this.orderItemService=t,this.api=o,this.showWelcomeImage=!1}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.route.paramMap.subscribe((function(e){if(e.has("hi")){var l=e.get("hi");localStorage.setItem("hi",e.get("hi")),localStorage.setItem("table",e.get("table")),localStorage.setItem("propertyType",e.get("type")),n.propertyType=+e.get("type"),console.log(n.propertyType),n.orderItemService.hotelId=l,console.log(l,n.orderItemService.hotelId),n.api.getRestaurentProperties(l).subscribe((function(e){console.log(e),n.hotelDetails=e.body.details,n.logo=e.body.data.logo,n.hotelDetails=e.body.assets,localStorage.setItem("hotelInfo",JSON.stringify(e.body.data))}),(function(n){console.log(n)}))}}))}},{key:"ionViewDidEnter",value:function(){var n=this;console.log(this.propertyType),setTimeout((function(){if(0===n.propertyType)return n.redirectToHome(),!1}),1e3),setTimeout((function(){if(1===n.propertyType)return n.router.navigateByUrl("/home"),!1}),1500)}},{key:"takeAway",value:function(){localStorage.removeItem("orderType"),localStorage.setItem("orderType","take-away"),this.router.navigateByUrl("/home")}},{key:"dineIn",value:function(){localStorage.removeItem("orderType"),localStorage.setItem("orderType","dine-in"),this.router.navigateByUrl("/home")}},{key:"redirectToHome",value:function(){this.router.navigateByUrl("/hotel/tabs/hotel-home")}}]),n}(),g=l("iInd"),b=t.nb({encapsulation:0,styles:[[".welcome-wrap[_ngcontent-%COMP%]{width:100%;height:100vh;background-image:url(welcome.76c806986dab008c581a.png);background-size:cover;background-position:top}.bottom-buttons[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;z-index:1000000;text-align:right}.place-order-btn[_ngcontent-%COMP%]{background-color:#fff;padding:10px 16px;box-shadow:0 0 10px #c8c8c8}.choose-action[_ngcontent-%COMP%]{width:100%;height:100vh;position:relative}.choose-action[_ngcontent-%COMP%]   .center-item[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);padding:0 30px;width:100%}.choose-action[_ngcontent-%COMP%]   .center-item[_ngcontent-%COMP%]   .welcome-msg[_ngcontent-%COMP%]{margin:30px 0;text-align:center}.hotel-logo[_ngcontent-%COMP%]{text-align:center}.hotel-logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:300;letter-spacing:2.2px;text-transform:uppercase}.hotel-logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;color:#555}.hotel-logo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#7a7a7a;font-size:14px;text-transform:uppercase;letter-spacing:1.1px;margin-top:0}.hotel-welcome-section[_ngcontent-%COMP%]{background-color:#747474;width:100%;height:100vh;text-align:center;position:relative}.hotel-welcome-section[_ngcontent-%COMP%]   .hotel-welcome-content[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);width:100%;color:#eee}"]],data:{}});function h(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,6,"ion-content",[],null,null,null,u.P,u.i)),t.ob(1,49152,null,0,i.u,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,4,"div",[["class","rest-wrap-color"]],null,null,null,null,null)),(n()(),t.pb(3,0,null,null,3,"div",[["class","choose-action"]],null,null,null,null,null)),(n()(),t.pb(4,0,null,null,2,"div",[["class","center-item"]],null,null,null,null,null)),(n()(),t.pb(5,0,null,null,1,"div",[["class","hotel-logo"]],null,null,null,null,null)),(n()(),t.pb(6,0,null,null,0,"img",[["alt",""],["srcset",""],["width","200px"]],[[8,"src",4]],null,null,null,null))],null,(function(n,e){n(e,6,0,t.tb(1,"https://master-vserve.s3.ap-south-1.amazonaws.com/restaurant-properties/",e.component.logo,""))}))}function m(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,6,"ion-content",[],null,null,null,u.P,u.i)),t.ob(1,49152,null,0,i.u,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,4,"div",[["class","hotel-welcome-section"]],null,null,null,null,null)),(n()(),t.pb(3,0,null,null,3,"div",[["class","hotel-welcome-content"]],null,null,null,null,null)),(n()(),t.pb(4,0,null,null,0,"img",[["alt",""],["src","../../assets/Logo_White.png"],["width","150px"]],null,null,null,null,null)),(n()(),t.pb(5,0,null,null,1,"h4",[["style","margin-top: 30px; text-align: center; font-size: 17px;"]],null,null,null,null,null)),(n()(),t.Gb(-1,null,["Contactless Service Experience"]))],null,null)}function f(n){return t.Hb(0,[(n()(),t.eb(16777216,null,null,1,null,h)),t.ob(1,16384,null,0,a.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,null,1,null,m)),t.ob(3,16384,null,0,a.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(n,e){var l=e.component;n(e,1,0,1===l.propertyType),n(e,3,0,0===l.propertyType)}),null)}var d=t.lb("app-welcome",p,(function(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,1,"app-welcome",[],null,null,null,f,b)),t.ob(1,114688,null,0,p,[g.m,g.a,c.a,s.a],null,null)],(function(n,e){n(e,1,0)}),null)}),{},{},[]),y=l("s7LF"),v=function n(){_classCallCheck(this,n)};l.d(e,"WelcomePageModuleNgFactory",(function(){return w}));var w=t.mb(o,[],(function(n){return t.yb([t.zb(512,t.j,t.X,[[8,[r.a,d]],[3,t.j],t.v]),t.zb(4608,a.k,a.j,[t.s,[2,a.q]]),t.zb(4608,y.j,y.j,[]),t.zb(4608,i.b,i.b,[t.x,t.g]),t.zb(4608,i.Db,i.Db,[i.b,t.j,t.p]),t.zb(4608,i.Hb,i.Hb,[i.b,t.j,t.p]),t.zb(1073742336,a.b,a.b,[]),t.zb(1073742336,y.i,y.i,[]),t.zb(1073742336,y.a,y.a,[]),t.zb(1073742336,i.Bb,i.Bb,[]),t.zb(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),t.zb(1073742336,v,v,[]),t.zb(1073742336,o,o,[]),t.zb(1024,g.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);