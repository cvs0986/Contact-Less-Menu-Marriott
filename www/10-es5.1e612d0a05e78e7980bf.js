function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6mRH":function(l,n,e){"use strict";e.d(n,"a",(function(){return o}));var t=e("IheW"),u=e("8Y7J"),o=function(){var l=function(){function l(n){_classCallCheck(this,l),this.http=n,this.url="https://vserve-api.valet2you.in/api/v1/ird/guest/",this.minibarUrl="https://vserve-api.valet2you.in/api/v1/ird/mini-bar/guest/",this.laundryUrl="https://vserve-api.valet2you.in/api/v1/wash/laundry/guest/",this.spaUrl="https://vserve-api.valet2you.in/api/v1/sanitarium/spa/guest/",this.requestServiceUrl="https://vserve-api.valet2you.in/api/v1/connect/guest/"}return _createClass(l,[{key:"getMenus",value:function(l){var n=new t.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.url+"menu/"+l,{observe:"response",responseType:"json",headers:n})}},{key:"getMinibarMenus",value:function(l){var n=new t.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.minibarUrl+"menu/"+l,{observe:"response",responseType:"json",headers:n})}},{key:"getLaundryMenus",value:function(l){var n=new t.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.laundryUrl+"menu/"+l,{observe:"response",responseType:"json",headers:n})}},{key:"getSpaMenus",value:function(l){var n=new t.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.spaUrl+"menu/"+l,{observe:"response",responseType:"json",headers:n})}},{key:"getRequestServicesMenus",value:function(l){var n=new t.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.requestServiceUrl+"menu/"+l,{observe:"response",responseType:"json",headers:n})}},{key:"placeOrder",value:function(l){var n=new t.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.post(this.url+"order/",l,{observe:"response",responseType:"json",headers:n})}},{key:"placeSpaOrder",value:function(l){var n=new t.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.post(this.spaUrl+"order/",l,{observe:"response",responseType:"json",headers:n})}}]),l}();return l.ngInjectableDef=u.Lb({factory:function(){return new l(u.Mb(t.c))},token:l,providedIn:"root"}),l}()},aG69:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),u=function l(){_classCallCheck(this,l)},o=e("pMnS"),i=e("MKJQ"),s=e("sZkV"),a=e("SVse"),r=e("s7LF"),c=e("EVdn"),p=function(){function l(n,e,t){_classCallCheck(this,l),this.modalCtrl=n,this.toastCtrl=e,this.router=t,this.guestQty=0}return _createClass(l,[{key:"ngOnInit",value:function(){console.log(this.placedRequest,this.additionalRequest,this.bottles)}},{key:"incrementQty",value:function(){this.guestQty+=1}},{key:"decrementQty",value:function(){this.guestQty-1<1?this.guestQty=0:this.guestQty-=1}},{key:"placeRequest",value:function(){var l=this;if(void 0===this.room||""===this.room||null===this.room)return this.toastCtrl.create({message:"Please enter room number.",keyboardClose:!0,position:"top",color:"warning",duration:1500}).then((function(l){l.present()})),!1;if(0===this.guestQty)return this.toastCtrl.create({message:"Please select number of guest.",keyboardClose:!0,position:"top",color:"warning",duration:1500}).then((function(l){l.present()})),!1;var n=[];this.placedRequest.filter((function(l){n.push({connect_item_id:l.id,description:l.description})}));var e={enc_hotel_id:"NnhkTElyTEc1c1d1ZUtpZmJPQ1JJVklzMW8xTTU3bzdJUFJ4NzBUdVdqVT0=",no_of_guest:this.guestQty,room_no:this.room,items:JSON.stringify(n)};c.post("https://vserve-api.valet2you.in/api/v1/connect/guest/order",e).done((function(n){console.log(n),"Success"===n.message&&(l.placedRequest.filter((function(l){l.isChecked=!1})),l.modalCtrl.dismiss({dismissed:"on-success",reuestsDismissed:l.placedRequest}),l.toastCtrl.create({header:"Thank you!",message:"Your request has been received. You will receive a confirmation call from our team shortly.",keyboardClose:!0,color:"success",position:"bottom",buttons:[{text:"OKAY",role:"cancel",handler:function(){l.router.navigateByUrl("/hotel/tabs/hotel-home")}}]}).then((function(l){l.present()})))})).fail((function(n,e,t){return console.log(n,e,t),200!==n.status&&"Room is not available"!==n.responseJSON.message?(l.dismissCart(),l.toastCtrl.create({message:"Something went wrong! Please try after some time.",keyboardClose:!0,duration:3e3,color:"danger",position:"top"}).then((function(l){l.present()})),!1):200!==n.status&&"Room is not available"===n.responseJSON.message?(l.toastCtrl.create({message:n.responseJSON.message+" Please enter correct room number.",keyboardClose:!0,duration:3e3,color:"warning",position:"top"}).then((function(l){l.present()})),!1):void 0}))}},{key:"dismissCart",value:function(){this.modalCtrl.dismiss()}}]),l}(),b=e("6mRH"),d=function(){function l(n,e,t,u){_classCallCheck(this,l),this.toastCtrl=n,this.alertCtrl=e,this.modalCtrl=t,this.hotelApi=u,this.showAdditionalRequest=!1,this.showBottles=!1,this.selectedRequests=[],this.requestsListApi=[],this.requestLists=[{name:"Need extra water bottles",isChecked:!1,value:"extra-bottles"},{name:"Clean my room",isChecked:!1,value:"clean-room"},{name:"Delivery service",isChecked:!1,value:"delivery-request"},{name:"Bathroom amenities",isChecked:!1,value:"bathroom-amenities"},{name:"Luggage assistance required",isChecked:!1,value:"luggage-request"},{name:"Baggage pick up",isChecked:!1,value:"baggage-pick-up"},{name:"Prepare my check out",isChecked:!1,value:"check-out"},{name:"Any additional request",isChecked:!1,value:"additional-request"}]}return _createClass(l,[{key:"ngOnInit",value:function(){var l=this;this.hotelApi.getRequestServicesMenus("NnhkTElyTEc1c1d1ZUtpZmJPQ1JJVklzMW8xTTU3bzdJUFJ4NzBUdVdqVT0=").subscribe((function(n){l.requestsListApi=n.body.data,console.log(l.requestsListApi)}),(function(l){console.log(l)}))}},{key:"requestChange",value:function(l){var n=this;l.isChecked?(this.selectedRequests.push(l),console.log(this.selectedRequests)):l.isChecked||(this.selectedRequests.splice(this.selectedRequests.indexOf(l),1),console.log(this.selectedRequests)),console.log(l),"with-count"===l.type&&l.isChecked&&this.alertCtrl.create({header:"Number of bottles",backdropDismiss:!1,inputs:[{name:"bottles",type:"number",placeholder:"Bottles"}],buttons:[{text:"Cancel",role:"cancel",handler:function(){l.isChecked=!1}},{text:"DONE",handler:function(l){if(console.log(l),""===l.bottles||void 0===l.bottles||0==l.bottles)return n.toastCtrl.create({message:"Please enter number of bottles!",color:"warning",duration:1500,position:"top",keyboardClose:!0}).then((function(l){l.present()})),!1;n.bottles=l.bottles,n.showBottles=!0}}]}).then((function(l){l.present()})),"with-count"!==l.type||l.isChecked||(this.bottles=0,this.showBottles=!1),"open-msg"===l.type&&l.isChecked&&this.alertCtrl.create({header:"Your Request",backdropDismiss:!1,inputs:[{name:"request",type:"textarea",placeholder:"request"}],buttons:[{text:"Cancel",role:"cancel",handler:function(){l.isChecked=!1}},{text:"DONE",handler:function(l){if(console.log(l),""===l.request||void 0===l.request||""===l.request.trim())return n.toastCtrl.create({message:"Please enter your request!",color:"warning",duration:1500,position:"top",keyboardClose:!0}).then((function(l){l.present()})),!1;n.additionalRequest=l.request,n.showAdditionalRequest=!0}}]}).then((function(l){l.present()})),"open-msg"!==l.type||l.isChecked||(this.additionalRequest="",this.showAdditionalRequest=!1)}},{key:"continuePlaceRequest",value:function(){return 0===this.selectedRequests.length?(this.toastCtrl.create({message:"Please select any to continue!",color:"warning",duration:1500,position:"top"}).then((function(l){l.present()})),!1):0!==this.selectedRequests.length?(this.modalCtrl.create({component:p,componentProps:{placedRequest:this.selectedRequests,additionalRequest:this.additionalRequest,bottles:this.bottles}}).then((function(l){l.present()})),!1):void console.log(this.requestLists,this.additionalRequest)}}]),l}(),h=t.nb({encapsulation:0,styles:[["ion-thumbnail[_ngcontent-%COMP%]{width:100%;height:144px}ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:8px}.row-padding[_ngcontent-%COMP%]{padding:0 13px}"]],data:{}});function g(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"span",[["style","margin-left: 10px;"]],null,null,null,null,null)),(l()(),t.Gb(1,null,["(",")"]))],null,(function(l,n){l(n,1,0,n.component.bottles)}))}function m(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,13,"ion-item",[],null,[[null,"ionChange"]],(function(l,n,e){var t=!0;return"ionChange"===n&&(t=!1!==l.component.requestChange(l.context.$implicit)&&t),t}),i.U,i.n)),t.ob(1,49152,null,0,s.H,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,4,"ion-label",[],null,null,null,i.V,i.o)),t.ob(3,49152,null,0,s.N,[t.h,t.k,t.x],null,null),(l()(),t.Gb(4,0,[" "," "])),(l()(),t.eb(16777216,null,0,1,null,g)),t.ob(6,16384,null,0,a.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(7,0,null,0,6,"ion-checkbox",[["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0;return"ionBlur"===n&&(u=!1!==t.Bb(l,8)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Bb(l,8)._handleIonChange(e.target)&&u),"ngModelChange"===n&&(u=!1!==(l.context.$implicit.isChecked=e)&&u),u}),i.N,i.g)),t.ob(8,16384,null,0,s.c,[t.k],null,null),t.Db(1024,null,r.d,(function(l){return[l]}),[s.c]),t.ob(10,671744,null,0,r.g,[[8,null],[8,null],[8,null],[6,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Db(2048,null,r.e,null,[r.g]),t.ob(12,16384,null,0,r.f,[[4,r.e]],null,null),t.ob(13,49152,null,0,s.r,[t.h,t.k,t.x],null,null)],(function(l,n){l(n,6,0,n.component.showBottles&&"with-count"===n.context.$implicit.type),l(n,10,0,n.context.$implicit.isChecked)}),(function(l,n){l(n,4,0,n.context.$implicit.name),l(n,7,0,t.Bb(n,12).ngClassUntouched,t.Bb(n,12).ngClassTouched,t.Bb(n,12).ngClassPristine,t.Bb(n,12).ngClassDirty,t.Bb(n,12).ngClassValid,t.Bb(n,12).ngClassInvalid,t.Bb(n,12).ngClassPending)}))}function f(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,4,"div",[["class","additional-request ion-padding-horizontal"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"h6",[["style","color: #9e9e9e;"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Your Request"])),(l()(),t.pb(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Gb(4,null,["",""]))],null,(function(l,n){l(n,4,0,n.component.additionalRequest)}))}function v(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,4,"ion-toolbar",[],null,null,null,i.nb,i.G)),t.ob(1,49152,null,0,s.zb,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,2,"ion-title",[],null,null,null,i.lb,i.E)),t.ob(3,49152,null,0,s.xb,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,0,"img",[["alt",""],["src","../../../../assets/Logo_Grey.png"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,28,"ion-content",[],null,null,null,i.P,i.i)),t.ob(6,49152,null,0,s.u,[t.h,t.k,t.x],null,null),(l()(),t.pb(7,0,null,0,4,"ion-buttons",[],null,null,null,i.M,i.f)),t.ob(8,49152,null,0,s.l,[t.h,t.k,t.x],null,null),(l()(),t.pb(9,0,null,0,2,"ion-back-button",[["defaultHref","/hotel/tabs/hotel-home"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Bb(l,11).onClick(e)&&u),u}),i.J,i.c)),t.ob(10,49152,null,0,s.g,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"]},null),t.ob(11,16384,null,0,s.h,[[2,s.fb],s.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.pb(12,0,null,0,4,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,i.R,i.k)),t.ob(13,49152,null,0,s.w,[t.h,t.k,t.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t.pb(14,0,null,0,2,"ion-button",[["shape","round"],["size","small"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.continuePlaceRequest()&&t),t}),i.L,i.e)),t.ob(15,49152,null,0,s.k,[t.h,t.k,t.x],{shape:[0,"shape"],size:[1,"size"]},null),(l()(),t.Gb(-1,0,["CONTINUE"])),(l()(),t.pb(17,0,null,0,6,"ion-row",[["style","padding: 0px 9px; margin-bottom: 10px;"]],null,null,null,i.bb,i.u)),t.ob(18,49152,null,0,s.gb,[t.h,t.k,t.x],null,null),(l()(),t.pb(19,0,null,0,4,"ion-col",[["size","12"]],null,null,null,i.O,i.h)),t.ob(20,49152,null,0,s.t,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(21,0,null,0,2,"ion-thumbnail",[],null,null,null,i.kb,i.D)),t.ob(22,49152,null,0,s.wb,[t.h,t.k,t.x],null,null),(l()(),t.pb(23,0,null,0,0,"img",[["alt",""],["src","../../../../assets/connect-benner-newtile.jpg"]],null,null,null,null,null)),(l()(),t.pb(24,0,null,0,3,"ion-list",[],null,null,null,i.X,i.p)),t.ob(25,49152,null,0,s.O,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,1,null,m)),t.ob(27,278528,null,0,a.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.eb(16777216,null,0,1,null,f)),t.ob(29,16384,null,0,a.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(30,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.pb(31,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.pb(32,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.pb(33,0,null,0,0,"br",[],null,null,null,null,null))],(function(l,n){var e=n.component;l(n,10,0,"/hotel/tabs/hotel-home"),l(n,11,0,"/hotel/tabs/hotel-home"),l(n,13,0,"end","bottom"),l(n,15,0,"round","small"),l(n,20,0,"12"),l(n,27,0,e.requestsListApi.without_category_items),l(n,29,0,e.showAdditionalRequest)}),null)}var k=t.lb("app-place-your-service",d,(function(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-place-your-service",[],null,null,null,v,h)),t.ob(1,114688,null,0,d,[s.Mb,s.a,s.Db,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),C=e("iInd"),y=t.nb({encapsulation:0,styles:[["ion-fab[_ngcontent-%COMP%]{width:100%;background:#fff;padding:10px;margin-bottom:-10px;box-shadow:0 0 10px #c8c8c8}.bottom-buttons[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;z-index:1000000;text-align:right}.place-order-btn[_ngcontent-%COMP%]{background-color:#fff;padding:10px 16px;box-shadow:0 0 10px #c8c8c8}ion-label[_ngcontent-%COMP%]{display:flex!important;flex-direction:row;justify-content:space-between}.details[_ngcontent-%COMP%]{width:78%}.add-section[_ngcontent-%COMP%]{width:22%}.add-item-button[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;border-width:2px;border-style:solid;border-color:#d8d8d8 #d1d1d1 #bababa;-o-border-image:initial;border-image:initial;border-radius:5px;align-items:center;height:2.2em;font-size:13px;width:73px}.add-item-button-left[_ngcontent-%COMP%]{background-color:#a9a9a9;padding:7px;margin-left:-8px;border-top-left-radius:5px;border-bottom-left-radius:5px;color:#fff}.add-item-button-right[_ngcontent-%COMP%]{background-color:#a9a9a9;padding:7px;margin-right:-8px;border-top-right-radius:5px;border-bottom-right-radius:5px;color:#fff}"]],data:{}});function x(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"span",[["style","margin-left: 10px;"]],null,null,null,null,null)),(l()(),t.Gb(1,null,["(",")"]))],null,(function(l,n){l(n,1,0,n.component.bottles)}))}function q(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t.Gb(1,null,[""," "])),(l()(),t.eb(16777216,null,null,1,null,x)),t.ob(3,16384,null,0,a.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,"with-count"===n.parent.context.$implicit.type&&0!==n.component.bottles)}),(function(l,n){l(n,1,0,n.parent.context.$implicit.name)}))}function w(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Gb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.additionalRequest)}))}function z(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,4,"div",[["class","selected-items"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,q)),t.ob(2,16384,null,0,a.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,w)),t.ob(4,16384,null,0,a.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,n.context.$implicit.isChecked&&"open-msg"!==n.context.$implicit.type),l(n,4,0,"open-msg"===n.context.$implicit.type&&n.context.$implicit.isChecked)}),null)}function R(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,4,"ion-toolbar",[],null,null,null,i.nb,i.G)),t.ob(1,49152,null,0,s.zb,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,2,"ion-title",[],null,null,null,i.lb,i.E)),t.ob(3,49152,null,0,s.xb,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,0,"img",[["alt",""],["src","../../../../../assets/Logo_Grey.png"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,61,"ion-content",[],null,null,null,i.P,i.i)),t.ob(6,49152,null,0,s.u,[t.h,t.k,t.x],null,null),(l()(),t.pb(7,0,null,0,17,"ion-fab",[["slot","fixed"],["vertical","bottom"]],null,null,null,i.R,i.k)),t.ob(8,49152,null,0,s.w,[t.h,t.k,t.x],{vertical:[0,"vertical"]},null),(l()(),t.pb(9,0,null,0,15,"ion-row",[],null,null,null,i.bb,i.u)),t.ob(10,49152,null,0,s.gb,[t.h,t.k,t.x],null,null),(l()(),t.pb(11,0,null,0,6,"ion-col",[["size","4"]],null,null,null,i.O,i.h)),t.ob(12,49152,null,0,s.t,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(13,0,null,0,4,"ion-button",[["color","light"],["expand","block"],["mode","md"],["style","text-transform: capitalize;"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.dismissCart()&&t),t}),i.L,i.e)),t.ob(14,49152,null,0,s.k,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"],mode:[2,"mode"]},null),(l()(),t.pb(15,0,null,0,1,"ion-icon",[["name","chevron-back-outline"],["size","small"],["slot","start"]],null,null,null,i.S,i.l)),t.ob(16,49152,null,0,s.C,[t.h,t.k,t.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),t.Gb(-1,0,[" Back "])),(l()(),t.pb(18,0,null,0,6,"ion-col",[["size","8"]],null,null,null,i.O,i.h)),t.ob(19,49152,null,0,s.t,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(20,0,null,0,4,"ion-button",[["color","success"],["expand","block"],["mode","md"],["style","text-transform: capitalize;"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.placeRequest()&&t),t}),i.L,i.e)),t.ob(21,49152,null,0,s.k,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"],mode:[2,"mode"]},null),(l()(),t.pb(22,0,null,0,1,"ion-icon",[["name","caret-forward-outline"],["size","small"],["slot","end"]],null,null,null,i.S,i.l)),t.ob(23,49152,null,0,s.C,[t.h,t.k,t.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),t.Gb(-1,0,[" Place Request "])),(l()(),t.pb(25,0,null,0,5,"div",[["class","show-selected-items ion-padding-horizontal"]],null,null,null,null,null)),(l()(),t.pb(26,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Please enter your room number to place request for following services."])),(l()(),t.pb(28,0,null,null,2,"div",[["class","services-wrap ion-padding-vertical"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,z)),t.ob(30,278528,null,0,a.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(31,0,null,0,30,"div",[["class","guest-details"]],null,null,null,null,null)),(l()(),t.pb(32,0,null,null,0,"div",[["class","spa-divider"]],null,null,null,null,null)),(l()(),t.pb(33,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(34,0,null,null,11,"ion-item",[["lines","none"]],null,null,null,i.U,i.n)),t.ob(35,49152,null,0,s.H,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(36,0,null,0,2,"ion-label",[],null,null,null,i.V,i.o)),t.ob(37,49152,null,0,s.N,[t.h,t.k,t.x],null,null),(l()(),t.Gb(-1,0,["Room Number"])),(l()(),t.pb(39,0,null,0,6,"ion-input",[["clearInput","true"],["style","border-bottom: 1px solid #cecbcb; margin-left: 120px; text-align: right;"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==t.Bb(l,40)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Bb(l,40)._handleIonChange(e.target)&&u),"ngModelChange"===n&&(u=!1!==(o.room=e)&&u),u}),i.T,i.m)),t.ob(40,16384,null,0,s.Fb,[t.k],null,null),t.Db(1024,null,r.d,(function(l){return[l]}),[s.Fb]),t.ob(42,671744,null,0,r.g,[[8,null],[8,null],[8,null],[6,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Db(2048,null,r.e,null,[r.g]),t.ob(44,16384,null,0,r.f,[[4,r.e]],null,null),t.ob(45,49152,null,0,s.G,[t.h,t.k,t.x],{clearInput:[0,"clearInput"],type:[1,"type"]},null),(l()(),t.pb(46,0,null,null,13,"ion-item",[["lines","none"]],null,null,null,i.U,i.n)),t.ob(47,49152,null,0,s.H,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(48,0,null,0,11,"ion-label",[],null,null,null,i.V,i.o)),t.ob(49,49152,null,0,s.N,[t.h,t.k,t.x],null,null),(l()(),t.pb(50,0,null,0,2,"div",[["class","details"]],null,null,null,null,null)),(l()(),t.pb(51,0,null,null,1,"p",[["style","font-size: 15px;"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Number Of Guests"])),(l()(),t.pb(53,0,null,0,6,"div",[["class","add-action"]],null,null,null,null,null)),(l()(),t.pb(54,0,null,null,5,"div",[["class","add-item-button"]],null,null,null,null,null)),(l()(),t.pb(55,0,null,null,1,"ion-icon",[["class","add-item-button-left"],["name","remove-outline"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.decrementQty()&&t),t}),i.S,i.l)),t.ob(56,49152,null,0,s.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.Gb(57,null,[" "," "])),(l()(),t.pb(58,0,null,null,1,"ion-icon",[["class","add-item-button-right"],["name","add-outline"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.incrementQty()&&t),t}),i.S,i.l)),t.ob(59,49152,null,0,s.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.pb(60,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(61,0,null,null,0,"div",[["class","spa-divider"]],null,null,null,null,null)),(l()(),t.pb(62,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.pb(63,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.pb(64,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.pb(65,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.pb(66,0,null,0,0,"br",[],null,null,null,null,null))],(function(l,n){var e=n.component;l(n,8,0,"bottom"),l(n,12,0,"4"),l(n,14,0,"light","block","md"),l(n,16,0,"chevron-back-outline","small"),l(n,19,0,"8"),l(n,21,0,"success","block","md"),l(n,23,0,"caret-forward-outline","small"),l(n,30,0,e.placedRequest),l(n,35,0,"none"),l(n,42,0,e.room),l(n,45,0,"true","number"),l(n,47,0,"none"),l(n,56,0,"remove-outline"),l(n,59,0,"add-outline")}),(function(l,n){var e=n.component;l(n,39,0,t.Bb(n,44).ngClassUntouched,t.Bb(n,44).ngClassTouched,t.Bb(n,44).ngClassPristine,t.Bb(n,44).ngClassDirty,t.Bb(n,44).ngClassValid,t.Bb(n,44).ngClassInvalid,t.Bb(n,44).ngClassPending),l(n,57,0,e.guestQty)}))}var M=t.lb("app-place-your-request-review",p,(function(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-place-your-request-review",[],null,null,null,R,y)),t.ob(1,114688,null,0,p,[s.Db,s.Mb,C.m],null,null)],(function(l,n){l(n,1,0)}),null)}),{placedRequest:"placedRequest",additionalRequest:"additionalRequest",bottles:"bottles"},{},[]),_=function l(){_classCallCheck(this,l)};e.d(n,"PlaceYourServicePageModuleNgFactory",(function(){return P}));var P=t.mb(u,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[o.a,k,M]],[3,t.j],t.v]),t.zb(4608,a.k,a.j,[t.s,[2,a.q]]),t.zb(4608,r.j,r.j,[]),t.zb(4608,s.b,s.b,[t.x,t.g]),t.zb(4608,s.Db,s.Db,[s.b,t.j,t.p]),t.zb(4608,s.Hb,s.Hb,[s.b,t.j,t.p]),t.zb(1073742336,a.b,a.b,[]),t.zb(1073742336,r.i,r.i,[]),t.zb(1073742336,r.a,r.a,[]),t.zb(1073742336,s.Bb,s.Bb,[]),t.zb(1073742336,C.o,C.o,[[2,C.t],[2,C.m]]),t.zb(1073742336,_,_,[]),t.zb(1073742336,u,u,[]),t.zb(1024,C.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);