function _defineProperties(l,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,t){return n&&_defineProperties(l.prototype,n),t&&_defineProperties(l,t),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{znmF:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J"),o=function l(){_classCallCheck(this,l)},u=t("pMnS"),i=t("MKJQ"),r=t("sZkV"),a=t("tvKB"),c=function(){function l(n,t,e,o,u,i){_classCallCheck(this,l),this.router=n,this.orderItemsService=t,this.platform=e,this.route=o,this.toastCtrl=u,this.modalCtrl=i,this.placedOrder=[]}return _createClass(l,[{key:"ngOnInit",value:function(){this.placedOrder=this.orderItemsService.placedOrder,console.log(this.placedOrder)}},{key:"ionViewDidEnter",value:function(){var l=this;this.subscription=this.platform.backButton.subscribe((function(){console.log("exit"),l.router.navigateByUrl("/home"),document.location.reload()}))}},{key:"ionViewWillLeave",value:function(){this.subscription&&this.subscription.unsubscribe()}},{key:"reorder",value:function(){this.router.navigateByUrl("/hotel/tabs/hotel-home")}},{key:"settleBillLater",value:function(){var l=this;this.toastCtrl.create({message:"As a safety measure to protect our guests from COVID-19 exposure, we won't be taking your signature on a physical bill and will present it during checkout only.",position:"middle",color:"warning",keyboardClose:!0,buttons:[{side:"end",text:"OKAY",role:"cancel",handler:function(){l.router.navigateByUrl("/hotel/tabs/hotel-home")}}]}).then((function(l){l.present()}))}}]),l}(),s=t("iInd"),b=e.nb({encapsulation:0,styles:[[".confirmation-msg[_ngcontent-%COMP%]{color:#fff;background-image:linear-gradient(to right bottom,#0f230a,#153112,#1d3f17,#254e1d,#2e5e22);padding:20px 0;text-align:center;box-shadow:0 5px 10px #9e9e9e}.bottom-buttons[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;z-index:1000000;text-align:right}.place-order-btn[_ngcontent-%COMP%]{background-color:#fff;padding:10px 16px;box-shadow:0 0 10px #c8c8c8}ion-item[_ngcontent-%COMP%]{--background:transparent;margin-top:-12px}"]],data:{}});function p(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,22,"ion-content",[],null,null,null,i.K,i.h)),e.ob(1,49152,null,0,r.u,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,8,"div",[["class","confirmation-msg ion-padding-horizontal"]],null,null,null,null,null)),(l()(),e.pb(3,0,null,null,1,"ion-icon",[["color","light"],["name","checkmark-done-outline"],["style","font-size: 80px;"]],null,null,null,i.N,i.k)),e.ob(4,49152,null,0,r.C,[e.h,e.k,e.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),e.pb(5,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["Thank You!"])),(l()(),e.pb(7,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["Your order has been placed."])),(l()(),e.pb(9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["You will get a confirmation call in a few minutes."])),(l()(),e.pb(11,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(12,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(13,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(14,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(15,0,null,0,6,"div",[["class","billing-buttons ion-padding-horizontal"]],null,null,null,null,null)),(l()(),e.pb(16,0,null,null,2,"ion-button",[["color","primary"],["href","https://paytm.me/c-VqyML"],["mode","md"],["size","small"],["target","_blank"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.reorder()&&e),e}),i.H,i.e)),e.ob(17,49152,null,0,r.k,[e.h,e.k,e.x],{color:[0,"color"],href:[1,"href"],mode:[2,"mode"],size:[3,"size"],target:[4,"target"]},null),(l()(),e.Gb(-1,0,["Settle Bill Now"])),(l()(),e.pb(19,0,null,null,2,"ion-button",[["color","dark"],["mode","md"],["size","small"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.settleBillLater()&&e),e}),i.H,i.e)),e.ob(20,49152,null,0,r.k,[e.h,e.k,e.x],{color:[0,"color"],mode:[1,"mode"],size:[2,"size"]},null),(l()(),e.Gb(-1,0,["Settle Bill Later"])),(l()(),e.pb(22,0,null,0,0,"br",[],null,null,null,null,null))],(function(l,n){l(n,4,0,"light","checkmark-done-outline"),l(n,17,0,"primary","https://paytm.me/c-VqyML","md","small","_blank"),l(n,20,0,"dark","md","small")}),null)}var d=e.lb("app-confirmation",c,(function(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-confirmation",[],null,null,null,p,b)),e.ob(1,114688,null,0,c,[s.m,a.a,r.Gb,s.a,r.Lb,r.Db],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),m=function(){function l(n,t){_classCallCheck(this,l),this.modalCtrl=n,this.router=t}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"messageOkay",value:function(){this.modalCtrl.dismiss(),this.router.navigateByUrl("hotel/tabs/hotel-home")}}]),l}(),h=e.nb({encapsulation:0,styles:[[".confirmation-msg[_ngcontent-%COMP%]{color:#fff;background-image:linear-gradient(to right bottom,#0f230a,#153112,#1d3f17,#254e1d,#2e5e22);padding:70px 0;text-align:center;box-shadow:0 5px 10px #9e9e9e;font-size:20px}.bottom-buttons[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;z-index:1000000;text-align:right}.place-order-btn[_ngcontent-%COMP%]{background-color:#fff;padding:10px 16px;box-shadow:0 0 10px #c8c8c8}ion-item[_ngcontent-%COMP%]{--background:transparent;margin-top:-12px}"]],data:{}});function f(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,13,"ion-content",[],null,null,null,i.K,i.h)),e.ob(1,49152,null,0,r.u,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,4,"div",[["class","bottom-buttons"]],null,null,null,null,null)),(l()(),e.pb(3,0,null,null,3,"div",[["class","place-order-btn ion-padding-horizontal"]],null,null,null,null,null)),(l()(),e.pb(4,0,null,null,2,"ion-button",[["color","success"],["expand","block"],["mode","md"],["style","text-transform: capitalize;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.messageOkay()&&e),e}),i.H,i.e)),e.ob(5,49152,null,0,r.k,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],mode:[2,"mode"]},null),(l()(),e.Gb(-1,0,[" OKAY "])),(l()(),e.pb(7,0,null,0,2,"div",[["class","confirmation-msg ion-padding-horizontal"]],null,null,null,null,null)),(l()(),e.pb(8,0,null,null,1,"p",[["class","ion-padding-horizontal"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["As a safety measure to protect our guests from COVID-19 exposure, we won't be taking your signature on a physical bill and will present it during checkout only."])),(l()(),e.pb(10,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(11,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(12,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(13,0,null,0,0,"br",[],null,null,null,null,null))],(function(l,n){l(n,5,0,"success","block","md")}),null)}var g=e.lb("app-settle-bill-covid",m,(function(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-settle-bill-covid",[],null,null,null,f,h)),e.ob(1,114688,null,0,m,[r.Db,s.m],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),k=t("SVse"),x=t("s7LF"),y=function l(){_classCallCheck(this,l)};t.d(n,"ConfirmationPageModuleNgFactory",(function(){return v}));var v=e.mb(o,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[u.a,d,g]],[3,e.j],e.v]),e.zb(4608,k.k,k.j,[e.s,[2,k.q]]),e.zb(4608,x.j,x.j,[]),e.zb(4608,r.b,r.b,[e.x,e.g]),e.zb(4608,r.Db,r.Db,[r.b,e.j,e.p]),e.zb(4608,r.Hb,r.Hb,[r.b,e.j,e.p]),e.zb(1073742336,k.b,k.b,[]),e.zb(1073742336,x.i,x.i,[]),e.zb(1073742336,x.a,x.a,[]),e.zb(1073742336,r.Bb,r.Bb,[]),e.zb(1073742336,s.o,s.o,[[2,s.t],[2,s.m]]),e.zb(1073742336,y,y,[]),e.zb(1073742336,o,o,[]),e.zb(1024,s.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);