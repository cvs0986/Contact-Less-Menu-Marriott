(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{MH7c:function(l,t,n){"use strict";n.r(t);var e=n("8Y7J");class o{}var r=n("pMnS"),u=n("MKJQ"),i=n("sZkV"),a=n("SVse"),s=n("tvKB"),c=n("yTNM");class p{constructor(l,t,n,e){this.router=l,this.route=t,this.orderItemService=n,this.api=e,this.showWelcomeImage=!1}ngOnInit(){this.route.paramMap.subscribe(l=>{if(!l.has("hi"))return;const t=l.get("hi");localStorage.setItem("hi",l.get("hi")),localStorage.setItem("table",l.get("table")),localStorage.setItem("propertyType",l.get("type")),this.propertyType=+l.get("type"),console.log(this.propertyType),this.orderItemService.hotelId=t,console.log(t,this.orderItemService.hotelId),this.api.getRestaurentProperties(t).subscribe(l=>{console.log(l),this.hotelDetails=l.body.details,this.logo=l.body.data.logo,this.hotelDetails=l.body.assets,localStorage.setItem("hotelInfo",JSON.stringify(l.body.data))},l=>{console.log(l)})})}ionViewDidEnter(){console.log(this.propertyType),setTimeout(()=>{if(0===this.propertyType)return this.redirectToHome(),!1},1e3),setTimeout(()=>{if(1===this.propertyType)return this.router.navigateByUrl("/home"),!1},1500)}takeAway(){localStorage.removeItem("orderType"),localStorage.setItem("orderType","take-away"),this.router.navigateByUrl("/home")}dineIn(){localStorage.removeItem("orderType"),localStorage.setItem("orderType","dine-in"),this.router.navigateByUrl("/home")}redirectToHome(){this.router.navigateByUrl("/hotel/tabs/hotel-home")}}var g=n("iInd"),h=e.nb({encapsulation:0,styles:[[".welcome-wrap[_ngcontent-%COMP%]{width:100%;height:100vh;background-image:url(welcome.76c806986dab008c581a.png);background-size:cover;background-position:top}.bottom-buttons[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;z-index:1000000;text-align:right}.place-order-btn[_ngcontent-%COMP%]{background-color:#fff;padding:10px 16px;box-shadow:0 0 10px #c8c8c8}.choose-action[_ngcontent-%COMP%]{width:100%;height:100vh;position:relative}.choose-action[_ngcontent-%COMP%]   .center-item[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);padding:0 30px;width:100%}.choose-action[_ngcontent-%COMP%]   .center-item[_ngcontent-%COMP%]   .welcome-msg[_ngcontent-%COMP%]{margin:30px 0;text-align:center}.hotel-logo[_ngcontent-%COMP%]{text-align:center}.hotel-logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:300;letter-spacing:2.2px;text-transform:uppercase}.hotel-logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;color:#555}.hotel-logo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#7a7a7a;font-size:14px;text-transform:uppercase;letter-spacing:1.1px;margin-top:0}.hotel-welcome-section[_ngcontent-%COMP%]{background-color:#747474;width:100%;height:100vh;text-align:center;position:relative}.hotel-welcome-section[_ngcontent-%COMP%]   .hotel-welcome-content[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);width:100%;color:#eee}"]],data:{}});function b(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,6,"ion-content",[],null,null,null,u.P,u.i)),e.ob(1,49152,null,0,i.u,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,4,"div",[["class","rest-wrap-color"]],null,null,null,null,null)),(l()(),e.pb(3,0,null,null,3,"div",[["class","choose-action"]],null,null,null,null,null)),(l()(),e.pb(4,0,null,null,2,"div",[["class","center-item"]],null,null,null,null,null)),(l()(),e.pb(5,0,null,null,1,"div",[["class","hotel-logo"]],null,null,null,null,null)),(l()(),e.pb(6,0,null,null,0,"img",[["alt",""],["srcset",""],["width","200px"]],[[8,"src",4]],null,null,null,null))],null,(function(l,t){l(t,6,0,e.tb(1,"https://master-vserve.s3.ap-south-1.amazonaws.com/restaurant-properties/",t.component.logo,""))}))}function m(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,6,"ion-content",[],null,null,null,u.P,u.i)),e.ob(1,49152,null,0,i.u,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,4,"div",[["class","hotel-welcome-section"]],null,null,null,null,null)),(l()(),e.pb(3,0,null,null,3,"div",[["class","hotel-welcome-content"]],null,null,null,null,null)),(l()(),e.pb(4,0,null,null,0,"img",[["alt",""],["src","../../assets/Logo_White.png"],["width","150px"]],null,null,null,null,null)),(l()(),e.pb(5,0,null,null,1,"h4",[["style","margin-top: 30px; text-align: center; font-size: 17px;"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["Contactless Service Experience"]))],null,null)}function d(l){return e.Hb(0,[(l()(),e.eb(16777216,null,null,1,null,b)),e.ob(1,16384,null,0,a.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,m)),e.ob(3,16384,null,0,a.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,t){var n=t.component;l(t,1,0,1===n.propertyType),l(t,3,0,0===n.propertyType)}),null)}function y(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-welcome",[],null,null,null,d,h)),e.ob(1,114688,null,0,p,[g.m,g.a,s.a,c.a],null,null)],(function(l,t){l(t,1,0)}),null)}var f=e.lb("app-welcome",p,y,{},{},[]),w=n("s7LF");class v{}n.d(t,"WelcomePageModuleNgFactory",(function(){return M}));var M=e.mb(o,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[r.a,f]],[3,e.j],e.v]),e.zb(4608,a.k,a.j,[e.s,[2,a.q]]),e.zb(4608,w.j,w.j,[]),e.zb(4608,i.b,i.b,[e.x,e.g]),e.zb(4608,i.Db,i.Db,[i.b,e.j,e.p]),e.zb(4608,i.Hb,i.Hb,[i.b,e.j,e.p]),e.zb(1073742336,a.b,a.b,[]),e.zb(1073742336,w.i,w.i,[]),e.zb(1073742336,w.a,w.a,[]),e.zb(1073742336,i.Bb,i.Bb,[]),e.zb(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),e.zb(1073742336,v,v,[]),e.zb(1073742336,o,o,[]),e.zb(1024,g.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);