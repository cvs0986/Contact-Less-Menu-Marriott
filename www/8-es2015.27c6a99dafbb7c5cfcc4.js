(window.webpackJsonp=window.webpackJsonp||[]).push([[8,102],{"6mRH":function(l,n,e){"use strict";e.d(n,"a",(function(){return o}));var t=e("IheW"),u=e("8Y7J");let o=(()=>{class l{constructor(l){this.http=l,this.url="https://vserve-api.valet2you.in/api/v1/ird/guest/",this.minibarUrl="https://vserve-api.valet2you.in/api/v1/ird/mini-bar/guest/",this.laundryUrl="https://vserve-api.valet2you.in/api/v1/wash/laundry/guest/",this.spaUrl="https://vserve-api.valet2you.in/api/v1/sanitarium/spa/guest/",this.requestServiceUrl="https://vserve-api.valet2you.in/api/v1/connect/guest/"}getMenus(l){const n=new t.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.url+"menu/"+l,{observe:"response",responseType:"json",headers:n})}getMinibarMenus(l){const n=new t.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.minibarUrl+"menu/"+l,{observe:"response",responseType:"json",headers:n})}getLaundryMenus(l){const n=new t.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.laundryUrl+"menu/"+l,{observe:"response",responseType:"json",headers:n})}getSpaMenus(l){const n=new t.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.spaUrl+"menu/"+l,{observe:"response",responseType:"json",headers:n})}getRequestServicesMenus(l){const n=new t.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.requestServiceUrl+"menu/"+l,{observe:"response",responseType:"json",headers:n})}placeOrder(l){const n=new t.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.post(this.url+"order/",l,{observe:"response",responseType:"json",headers:n})}placeSpaOrder(l){const n=new t.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.post(this.spaUrl+"order/",l,{observe:"response",responseType:"json",headers:n})}}return l.ngInjectableDef=u.Lb({factory:function(){return new l(u.Mb(t.c))},token:l,providedIn:"root"}),l})()},cxhs:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{}var o=e("pMnS"),i=e("MKJQ"),s=e("sZkV");class a{constructor(l){this.router=l}ngOnInit(){}spaNavigate(l){return"explore"===l?(this.router.navigateByUrl("/hotel/tabs/hotel-home/spa/spa-explore"),!1):"spa-menu"===l?(this.router.navigateByUrl("/hotel/tabs/hotel-home/spa/spa-menu"),!1):"etiq"===l?(this.router.navigateByUrl("/hotel/tabs/hotel-home/spa/spa-etiq"),!1):void 0}}var r=e("iInd"),p=t.nb({encapsulation:0,styles:[["ion-thumbnail[_ngcontent-%COMP%]{width:100%;height:144px}.row-padding[_ngcontent-%COMP%]{padding:0 13px}.row-padding[_ngcontent-%COMP%]   .journey-tiles[_ngcontent-%COMP%]{padding:20px 12px;border-radius:8px;box-shadow:0 3px 6px #ebebeb;color:#747474;margin-bottom:10px}"]],data:{}});function b(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,10,"ion-toolbar",[],null,null,null,i.nb,i.G)),t.ob(1,49152,null,0,s.zb,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,2,"ion-title",[],null,null,null,i.lb,i.E)),t.ob(3,49152,null,0,s.xb,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,0,"img",[["alt",""],["src","../../../../assets/Logo_Grey.png"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,i.M,i.f)),t.ob(6,49152,null,0,s.l,[t.h,t.k,t.x],null,null),(l()(),t.pb(7,0,null,0,3,"ion-button",[],null,null,null,i.L,i.e)),t.ob(8,49152,null,0,s.k,[t.h,t.k,t.x],null,null),(l()(),t.pb(9,0,null,0,1,"ion-icon",[["name","person-circle-outline"],["slot","icon-only"]],null,null,null,i.S,i.l)),t.ob(10,49152,null,0,s.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.pb(11,0,null,null,31,"ion-content",[],null,null,null,i.P,i.i)),t.ob(12,49152,null,0,s.u,[t.h,t.k,t.x],null,null),(l()(),t.pb(13,0,null,0,6,"ion-row",[["style","margin-bottom: 10px; padding: 0px 8px;"]],null,null,null,i.bb,i.u)),t.ob(14,49152,null,0,s.gb,[t.h,t.k,t.x],null,null),(l()(),t.pb(15,0,null,0,4,"ion-col",[["size","12"]],null,null,null,i.O,i.h)),t.ob(16,49152,null,0,s.t,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(17,0,null,0,2,"ion-thumbnail",[],null,null,null,i.kb,i.D)),t.ob(18,49152,null,0,s.wb,[t.h,t.k,t.x],null,null),(l()(),t.pb(19,0,null,0,0,"img",[["alt",""],["src","../../../../assets/spa-banner.png"],["style","border-radius: 8px; box-shadow: 0px 0px 3px #ccc;"]],null,null,null,null,null)),(l()(),t.pb(20,0,null,0,22,"ion-row",[["class","row-padding"]],null,null,null,i.bb,i.u)),t.ob(21,49152,null,0,s.gb,[t.h,t.k,t.x],null,null),(l()(),t.pb(22,0,null,0,6,"ion-col",[["class","journey-tiles"],["size","12"],["style","background-color: #BDBDBF;"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.spaNavigate("explore")&&t),t}),i.O,i.h)),t.ob(23,49152,null,0,s.t,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(24,0,null,0,1,"span",[["class","header-txt"],["style","font-size: 15px; font-weight: 500; text-transform: uppercase;"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Explore"])),(l()(),t.pb(26,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.pb(27,0,null,0,1,"span",[["style","font-size: 13px;"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Our treatments provide a transformative experience that restores through the tranquility and purity of water."])),(l()(),t.pb(29,0,null,0,6,"ion-col",[["class","journey-tiles"],["size","12"],["style","background-color: #F3DBC7;"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.spaNavigate("spa-menu")&&t),t}),i.O,i.h)),t.ob(30,49152,null,0,s.t,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(31,0,null,0,1,"span",[["class","header-txt"],["style","font-size: 15px; font-weight: 500; text-transform: uppercase;"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Spa Menu"])),(l()(),t.pb(33,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.pb(34,0,null,0,1,"span",[["style","font-size: 13px;"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Quan Spa at JW Marriott New Delhi caters to hotel guests, spa members and day spa guests."])),(l()(),t.pb(36,0,null,0,6,"ion-col",[["class","journey-tiles"],["size","12"],["style","background-color: #B7DDED;"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.spaNavigate("etiq")&&t),t}),i.O,i.h)),t.ob(37,49152,null,0,s.t,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(38,0,null,0,1,"span",[["class","header-txt"],["style","font-size: 15px; font-weight: 500; text-transform: uppercase;"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Spa ETIQUETTE"])),(l()(),t.pb(40,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.pb(41,0,null,0,1,"span",[["style","font-size: 13px;"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["The Quan Spa team is delighted to recommend you the best treatments smiled for your body and skin condition."]))],(function(l,n){l(n,10,0,"person-circle-outline"),l(n,16,0,"12"),l(n,23,0,"12"),l(n,30,0,"12"),l(n,37,0,"12")}),null)}function c(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-spa",[],null,null,null,b,p)),t.ob(1,114688,null,0,a,[r.m],null,null)],(function(l,n){l(n,1,0)}),null)}var d=t.lb("app-spa",a,c,{},{},[]),g=e("s7LF"),h=e("sk6g"),m=e("6mRH"),x=t.nb({encapsulation:0,styles:[[".bottom-buttons[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;z-index:1000000;text-align:right}.place-order-btn[_ngcontent-%COMP%]{background-color:#fff;padding:10px 16px;box-shadow:0 0 10px #c8c8c8}.item[_ngcontent-%COMP%]   .sc-ion-label-ios-h[_ngcontent-%COMP%], .item.sc-ion-label-ios-h[_ngcontent-%COMP%]{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family,inherit);font-size:inherit;text-overflow:ellipsis;white-space:pre-wrap!important;overflow:hidden;box-sizing:border-box}ion-item[_ngcontent-%COMP%]{--background:transparent}.foodType[_ngcontent-%COMP%]{margin-right:15px}.guestInfoSec[_ngcontent-%COMP%]{background:#f6fff4;padding:5px 0 26px}.foodInput[_ngcontent-%COMP%]{padding:0 10px!important;border:1px solid #e1e1e1;margin-top:15px;border-radius:5px;background-color:#f5f5f5}ion-label[_ngcontent-%COMP%]{display:flex!important;flex-direction:row;justify-content:space-between}.details[_ngcontent-%COMP%]{width:78%}.add-section[_ngcontent-%COMP%]{width:22%}.add-item-button[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;border-width:2px;border-style:solid;border-color:#d8d8d8 #d1d1d1 #bababa;-o-border-image:initial;border-image:initial;border-radius:5px;align-items:center;height:2.2em;font-size:13px;width:73px}.add-item-button-left[_ngcontent-%COMP%]{background-color:#a9a9a9;padding:7px;margin-left:-8px;border-top-left-radius:5px;border-bottom-left-radius:5px;color:#fff}.add-item-button-right[_ngcontent-%COMP%]{background-color:#a9a9a9;padding:7px;margin-right:-8px;border-top-right-radius:5px;border-bottom-right-radius:5px;color:#fff}.details-text[_ngcontent-%COMP%]{padding:0 16px;margin-top:-16px;font-size:14px}.price[_ngcontent-%COMP%]{font-weight:500;letter-spacing:.9px}.spa-divider[_ngcontent-%COMP%]{height:3px;background-color:#f5f5f5}"]],data:{}});function f(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,10,"ion-toolbar",[],null,null,null,i.nb,i.G)),t.ob(1,49152,null,0,s.zb,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,2,"ion-title",[],null,null,null,i.lb,i.E)),t.ob(3,49152,null,0,s.xb,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,0,"img",[["alt",""],["src","../../../../../assets/Logo_Grey.png"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,i.M,i.f)),t.ob(6,49152,null,0,s.l,[t.h,t.k,t.x],null,null),(l()(),t.pb(7,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.dismissCart()&&t),t}),i.L,i.e)),t.ob(8,49152,null,0,s.k,[t.h,t.k,t.x],null,null),(l()(),t.pb(9,0,null,0,1,"ion-icon",[["name","close-outline"],["slot","icon-only"]],null,null,null,i.S,i.l)),t.ob(10,49152,null,0,s.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.pb(11,0,null,null,72,"ion-content",[],null,null,null,i.P,i.i)),t.ob(12,49152,null,0,s.u,[t.h,t.k,t.x],null,null),(l()(),t.pb(13,0,null,0,4,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,i.R,i.k)),t.ob(14,49152,null,0,s.w,[t.h,t.k,t.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t.pb(15,0,null,0,2,"ion-button",[["shape","round"],["size","small"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.placedOrder()&&t),t}),i.L,i.e)),t.ob(16,49152,null,0,s.k,[t.h,t.k,t.x],{shape:[0,"shape"],size:[1,"size"]},null),(l()(),t.Gb(-1,0,["Continue"])),(l()(),t.pb(18,0,null,0,1,"h3",[["class","ion-padding-horizontal"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Package Selected"])),(l()(),t.pb(20,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.pb(21,0,null,0,5,"div",[["class","package-info ion-padding-horizontal"]],null,null,null,null,null)),(l()(),t.pb(22,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Gb(23,null,["",""])),(l()(),t.pb(24,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(25,0,null,null,1,"span",[["style","font-weight: 500;"]],null,null,null,null,null)),(l()(),t.Gb(26,null,["\u20b9",".00"])),(l()(),t.pb(27,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.pb(28,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.pb(29,0,null,0,54,"div",[["class","guest-details"]],null,null,null,null,null)),(l()(),t.pb(30,0,null,null,0,"div",[["class","spa-divider"]],null,null,null,null,null)),(l()(),t.pb(31,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(32,0,null,null,11,"ion-item",[["lines","none"]],null,null,null,i.U,i.n)),t.ob(33,49152,null,0,s.H,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(34,0,null,0,2,"ion-label",[],null,null,null,i.V,i.o)),t.ob(35,49152,null,0,s.N,[t.h,t.k,t.x],null,null),(l()(),t.Gb(-1,0,["Room Number"])),(l()(),t.pb(37,0,null,0,6,"ion-input",[["clearInput","true"],["style","border-bottom: 1px solid #cecbcb; margin-left: 120px; text-align: right;"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==t.Bb(l,38)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Bb(l,38)._handleIonChange(e.target)&&u),"ngModelChange"===n&&(u=!1!==(o.room=e)&&u),u}),i.T,i.m)),t.ob(38,16384,null,0,s.Fb,[t.k],null,null),t.Db(1024,null,g.d,(function(l){return[l]}),[s.Fb]),t.ob(40,671744,null,0,g.g,[[8,null],[8,null],[8,null],[6,g.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Db(2048,null,g.e,null,[g.g]),t.ob(42,16384,null,0,g.f,[[4,g.e]],null,null),t.ob(43,49152,null,0,s.G,[t.h,t.k,t.x],{clearInput:[0,"clearInput"],type:[1,"type"]},null),(l()(),t.pb(44,0,null,null,11,"ion-item",[["lines","none"]],null,null,null,i.U,i.n)),t.ob(45,49152,null,0,s.H,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(46,0,null,0,2,"ion-label",[],null,null,null,i.V,i.o)),t.ob(47,49152,null,0,s.N,[t.h,t.k,t.x],null,null),(l()(),t.Gb(-1,0,["Select Date"])),(l()(),t.pb(49,0,null,0,6,"ion-datetime",[["max","2030-12-31"],["pickerFormat","DD MMMM YYYY"],["placeholder","Select Date"],["value",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==t.Bb(l,50)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Bb(l,50)._handleChangeEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(o.date=e)&&u),u}),i.Q,i.j)),t.ob(50,16384,null,0,s.Kb,[t.k],null,null),t.Db(1024,null,g.d,(function(l){return[l]}),[s.Kb]),t.ob(52,671744,null,0,g.g,[[8,null],[8,null],[8,null],[6,g.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Db(2048,null,g.e,null,[g.g]),t.ob(54,16384,null,0,g.f,[[4,g.e]],null,null),t.ob(55,49152,null,0,s.v,[t.h,t.k,t.x],{max:[0,"max"],pickerFormat:[1,"pickerFormat"],placeholder:[2,"placeholder"],value:[3,"value"]},null),(l()(),t.pb(56,0,null,null,13,"ion-item",[["lines","none"]],null,null,null,i.U,i.n)),t.ob(57,49152,null,0,s.H,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(58,0,null,0,11,"ion-label",[],null,null,null,i.V,i.o)),t.ob(59,49152,null,0,s.N,[t.h,t.k,t.x],null,null),(l()(),t.pb(60,0,null,0,2,"div",[["class","details"]],null,null,null,null,null)),(l()(),t.pb(61,0,null,null,1,"p",[["style","font-size: 15px;"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Number Of Guests"])),(l()(),t.pb(63,0,null,0,6,"div",[["class","add-action"]],null,null,null,null,null)),(l()(),t.pb(64,0,null,null,5,"div",[["class","add-item-button"]],null,null,null,null,null)),(l()(),t.pb(65,0,null,null,1,"ion-icon",[["class","add-item-button-left"],["name","remove-outline"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.decrementQty()&&t),t}),i.S,i.l)),t.ob(66,49152,null,0,s.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.Gb(67,null,[" "," "])),(l()(),t.pb(68,0,null,null,1,"ion-icon",[["class","add-item-button-right"],["name","add-outline"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.incrementQty()&&t),t}),i.S,i.l)),t.ob(69,49152,null,0,s.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.pb(70,0,null,null,11,"ion-item",[["lines","none"]],null,null,null,i.U,i.n)),t.ob(71,49152,null,0,s.H,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(72,0,null,0,2,"ion-label",[],null,null,null,i.V,i.o)),t.ob(73,49152,null,0,s.N,[t.h,t.k,t.x],null,null),(l()(),t.Gb(-1,0,["Select Slot"])),(l()(),t.pb(75,0,null,0,6,"ion-datetime",[["display-format","h:mm A"],["picker-format","h:mm A"],["placeholder","Select Time"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==t.Bb(l,76)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Bb(l,76)._handleChangeEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(o.time=e)&&u),u}),i.Q,i.j)),t.ob(76,16384,null,0,s.Kb,[t.k],null,null),t.Db(1024,null,g.d,(function(l){return[l]}),[s.Kb]),t.ob(78,671744,null,0,g.g,[[8,null],[8,null],[8,null],[6,g.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Db(2048,null,g.e,null,[g.g]),t.ob(80,16384,null,0,g.f,[[4,g.e]],null,null),t.ob(81,49152,null,0,s.v,[t.h,t.k,t.x],{placeholder:[0,"placeholder"]},null),(l()(),t.pb(82,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(83,0,null,null,0,"div",[["class","spa-divider"]],null,null,null,null,null))],(function(l,n){var e=n.component;l(n,10,0,"close-outline"),l(n,14,0,"end","bottom"),l(n,16,0,"round","small"),l(n,33,0,"none"),l(n,40,0,e.room),l(n,43,0,"true","number"),l(n,45,0,"none"),l(n,52,0,e.date),l(n,55,0,"2030-12-31","DD MMMM YYYY","Select Date",""),l(n,57,0,"none"),l(n,66,0,"remove-outline"),l(n,69,0,"add-outline"),l(n,71,0,"none"),l(n,78,0,e.time),l(n,81,0,"Select Time")}),(function(l,n){var e=n.component;l(n,23,0,e.spaItem.name),l(n,26,0,e.spaItem.price),l(n,37,0,t.Bb(n,42).ngClassUntouched,t.Bb(n,42).ngClassTouched,t.Bb(n,42).ngClassPristine,t.Bb(n,42).ngClassDirty,t.Bb(n,42).ngClassValid,t.Bb(n,42).ngClassInvalid,t.Bb(n,42).ngClassPending),l(n,49,0,t.Bb(n,54).ngClassUntouched,t.Bb(n,54).ngClassTouched,t.Bb(n,54).ngClassPristine,t.Bb(n,54).ngClassDirty,t.Bb(n,54).ngClassValid,t.Bb(n,54).ngClassInvalid,t.Bb(n,54).ngClassPending),l(n,67,0,e.guestQty),l(n,75,0,t.Bb(n,80).ngClassUntouched,t.Bb(n,80).ngClassTouched,t.Bb(n,80).ngClassPristine,t.Bb(n,80).ngClassDirty,t.Bb(n,80).ngClassValid,t.Bb(n,80).ngClassInvalid,t.Bb(n,80).ngClassPending)}))}function v(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-spa-cart",[],null,null,null,f,x)),t.ob(1,114688,null,0,h.a,[s.Db,r.m,s.Mb,m.a],null,null)],(function(l,n){l(n,1,0)}),null)}var y=t.lb("app-spa-cart",h.a,v,{spaItem:"spaItem"},{},[]),C=e("SVse");const k=()=>e.e(0).then(e.bind(null,"6uE6")).then(l=>l.SpaExplorePageModuleNgFactory),M=()=>e.e(0).then(e.bind(null,"sB0i")).then(l=>l.SpaMenuPageModuleNgFactory),w=()=>e.e(0).then(e.bind(null,"RxDF")).then(l=>l.SpaEtiqPageModuleNgFactory);class z{}e.d(n,"SpaPageModuleNgFactory",(function(){return B}));var B=t.mb(u,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[o.a,d,y]],[3,t.j],t.v]),t.zb(4608,C.k,C.j,[t.s,[2,C.q]]),t.zb(4608,g.j,g.j,[]),t.zb(4608,s.b,s.b,[t.x,t.g]),t.zb(4608,s.Db,s.Db,[s.b,t.j,t.p]),t.zb(4608,s.Hb,s.Hb,[s.b,t.j,t.p]),t.zb(1073742336,C.b,C.b,[]),t.zb(1073742336,g.i,g.i,[]),t.zb(1073742336,g.a,g.a,[]),t.zb(1073742336,s.Bb,s.Bb,[]),t.zb(1073742336,r.o,r.o,[[2,r.t],[2,r.m]]),t.zb(1073742336,z,z,[]),t.zb(1073742336,u,u,[]),t.zb(1024,r.k,(function(){return[[{path:"",component:a},{path:"spa-explore",loadChildren:k},{path:"spa-menu",loadChildren:M},{path:"spa-etiq",loadChildren:w}]]}),[])])}))},sk6g:function(l,n,e){"use strict";e.d(n,"a",(function(){return u})),e("6mRH");var t=e("EVdn");class u{constructor(l,n,e,t){this.modalCtrl=l,this.router=n,this.toastCtrl=e,this.hotelApi=t,this.guestQty=0}ngOnInit(){console.log(this.spaItem)}dismissCart(){this.modalCtrl.dismiss()}incrementQty(){this.guestQty+=1}decrementQty(){this.guestQty-1<1?this.guestQty=0:this.guestQty-=1}getTimestamp(){const l=new Date(this.date).getFullYear()+"-0"+new Date(this.date).getMonth()+"-"+new Date(this.date).getDate()+" "+new Date(this.time).toLocaleTimeString();return console.log(l),l}placedOrder(){if(void 0===this.room||""===this.room||null===this.room)return this.toastCtrl.create({message:"Please enter room number.",keyboardClose:!0,position:"top",color:"warning",duration:1500}).then(l=>{l.present()}),!1;if(void 0===this.date)return this.toastCtrl.create({message:"Please select date",keyboardClose:!0,position:"top",color:"warning",duration:1500}).then(l=>{l.present()}),!1;if(0===this.guestQty)return this.toastCtrl.create({message:"Please select number of guest.",keyboardClose:!0,position:"top",color:"warning",duration:1500}).then(l=>{l.present()}),!1;if(void 0===this.time)return this.toastCtrl.create({message:"Please select time",keyboardClose:!0,position:"top",color:"warning",duration:1500}).then(l=>{l.present()}),!1;const l=[];l.push({spa_item_id:this.spaItem.id,description:this.spaItem.description});const n={enc_hotel_id:"NnhkTElyTEc1c1d1ZUtpZmJPQ1JJVklzMW8xTTU3bzdJUFJ4NzBUdVdqVT0=",no_of_guest:this.guestQty,room_no:this.room,request_schedule_at:this.getTimestamp(),items:JSON.stringify(l),description:null};console.log(n),t.post("https://vserve-api.valet2you.in/api/v1/sanitarium/spa/guest/order",n).done(l=>{console.log(l),"Success"===l.message&&(this.dismissCart(),this.toastCtrl.create({header:"Thank you!",message:"Your request has been placed with Quan Spa. Our Spa manager will call you in 2 minutes.",keyboardClose:!0,position:"bottom",color:"success",buttons:[{side:"end",text:"OKAY",handler:()=>{this.router.navigateByUrl("/hotel/tabs/hotel-home")}}]}).then(l=>{l.present()}))}).fail((l,n,e)=>(console.log(l,n,e),200!==l.status&&"Room is not available"!==l.responseJSON.message?(this.dismissCart(),this.toastCtrl.create({message:"Something went wrong! Please try after some time.",keyboardClose:!0,duration:3e3,color:"danger",position:"top"}).then(l=>{l.present()}),!1):200!==l.status&&"Room is not available"===l.responseJSON.message?(this.toastCtrl.create({message:l.responseJSON.message+" Please enter correct room number.",keyboardClose:!0,duration:3e3,color:"warning",position:"top"}).then(l=>{l.present()}),!1):void 0)),console.log(n)}}}}]);