(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{L6id:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var o=u("pMnS"),i=u("MKJQ"),a=u("sZkV"),s=u("s7LF"),b=u("SVse");class r{constructor(l){this.popoverCtrl=l}ngOnInit(){console.log(this.menuCategories)}dismissPopover(l){this.popoverCtrl.dismiss({data:l,role:"closed"})}}var c=u("tvKB"),p=u("yTNM");class m{constructor(l,n,u,t){this.popOverCtrl=l,this.router=n,this.orderItemsService=u,this.api=t,this.itemQty=0,this.showMenus=!1,this.showSkelton=!0,this.showToggle=!1}ngOnInit(){this.hotelID=localStorage.getItem("hi");const l=localStorage.getItem("hotelInfo"),n=JSON.parse(l);this.hotelDetails=n.details,this.hotelName=n.hotel_name,this.currency=n.currency,console.log(n,this.hotelDetails),this.api.getCategory(this.hotelID).subscribe(l=>{console.log(l),this.menuCategories=l.body.data},l=>{console.log(l)}),this.api.getMenus(this.hotelID).subscribe(l=>{console.log(l),1==l.body.success&&(this.menuItems=l.body.data,this.showSkelton=!1,this.showToggle=!0)},l=>{console.log(l)})}parseJson(l){return JSON.parse(l)}getVegItems(l){if(!0===l.detail.checked)return this.showSkelton=!0,this.api.getMenusByType(this.hotelID,"veg").subscribe(l=>{console.log(l),this.menuItems=l.body.data,this.showSkelton=!1},l=>{console.log(l),this.showSkelton=!1}),!1;!1===l.detail.checked&&(this.showSkelton=!0,this.api.getMenus(this.hotelID).subscribe(l=>{this.menuItems=l.body.data,this.showSkelton=!1},l=>{console.log(l),this.showSkelton=!1}))}showMenusCategory(l){this.popOverCtrl.create({component:r,componentProps:{menuCategories:this.menuCategories},event:l,translucent:!0,mode:"ios"}).then(l=>{l.present(),l.onDidDismiss().then(l=>{const n=l.data;if("closed"===l.data.role){const l=document.getElementById(n.data.menu_category_id);this.content.scrollToPoint(0,l.offsetTop,1e3),console.log(n.data.menu_category_id,l)}console.log(l.data)})})}toggleMenus(l){console.log(l),this.showMenus=!this.showMenus}addItemInitial(l){l.count+=1,this.itemQty+=1,console.log(l.count+1,l,this.itemQty,this.menuItems)}incrementQty(l){l.count+=1,this.itemQty+=1,console.log(l.count+1,l,this.itemQty)}decrementQty(l){l.count-1<1?(l.count=0,this.itemQty-=1,console.log(l.count,l,this.itemQty)):(l.count-=1,this.itemQty-=1,console.log(l.count,l,this.itemQty))}reviewOrder(){this.orderItemsService.ordersItems=[],this.menuItems.filter(l=>{l.items.filter(l=>{0!==l.count&&this.orderItemsService.ordersItems.push(l)})}),console.log(this.orderItemsService.ordersItems),this.router.navigateByUrl("/review-order")}}var d=u("iInd"),h=t.nb({encapsulation:0,styles:[[".custom-skeleton[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%]{line-height:13px}.custom-skeleton[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%]:last-child{margin-bottom:5px}.texture[_ngcontent-%COMP%]{background-image:url(dot-grid.5a69c256f0a91fe373bd.png);background-repeat:repeat}.item[_ngcontent-%COMP%]   .sc-ion-label-md-h[_ngcontent-%COMP%], .item.sc-ion-label-md-h[_ngcontent-%COMP%]{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family,inherit);font-size:inherit;text-overflow:ellipsis;white-space:pre-wrap!important;overflow:hidden;box-sizing:border-box}.sc-ion-popover-md-h[_ngcontent-%COMP%]{--width:250px;--max-height:60%!important;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2),0 8px 10px 1px rgba(0, 0, 0, 0.14),0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md[_ngcontent-%COMP%]{border-radius:4px;transform-origin:left top;bottom:12px;top:20%!important;left:113px;transform-origin:right top}.veg-toggle-ui[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;margin-right:25px}.bottom-buttons[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;z-index:1000000;text-align:right}.place-order-btn[_ngcontent-%COMP%]{background-color:#fff;padding:10px 16px;box-shadow:0 0 10px #c8c8c8}.category-name[_ngcontent-%COMP%]{padding:5px 35px 5px 16px;background:#eb3237;-webkit-clip-path:polygon(0 0,0 100%,85% 100%,100% 0);clip-path:polygon(0 0,0 100%,85% 100%,100% 0);color:#fff;text-transform:uppercase;font-weight:700}.thumbnail-wrap[_ngcontent-%COMP%]{position:relative;margin-right:10px}.food-type-icon[_ngcontent-%COMP%]{position:absolute;top:4px;right:4px;width:16px}ion-thumbnail[_ngcontent-%COMP%]{width:70px;height:70px}ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px}ion-label[_ngcontent-%COMP%]{display:flex!important;flex-direction:row;justify-content:space-between}.details[_ngcontent-%COMP%]{width:78%}.add-section[_ngcontent-%COMP%]{width:22%}.add-item-button[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;border-width:2px;border-style:solid;border-color:#d8d8d8 #d1d1d1 #bababa;-o-border-image:initial;border-image:initial;border-radius:5px;align-items:center;height:2.2em;font-size:13px;width:73px}.add-item-button-left[_ngcontent-%COMP%]{background-color:#a9a9a9;padding:7px;margin-left:-8px;border-top-left-radius:5px;border-bottom-left-radius:5px;color:#fff}.add-item-button-right[_ngcontent-%COMP%]{background-color:#a9a9a9;padding:7px;margin-right:-8px;border-top-right-radius:5px;border-bottom-right-radius:5px;color:#fff}.details-text[_ngcontent-%COMP%]{padding:0 16px;margin-top:-16px;font-size:14px}.category-small[_ngcontent-%COMP%]{color:#868686;text-transform:uppercase}.price[_ngcontent-%COMP%]{font-weight:500;letter-spacing:.9px}ion-button[_ngcontent-%COMP%]{--border-width:0.5px}"]],data:{}});function g(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,8,"div",[["class","filter-veg ion-padding-horizontal"],["style","display: flex; flex-direction: row;"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,7,"span",[["class","veg-toggle-ui"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,2,"ion-label",[],null,null,null,i.V,i.o)),t.ob(3,49152,null,0,a.N,[t.h,t.k,t.x],null,null),(l()(),t.Gb(-1,0,["Veg only"])),(l()(),t.pb(5,0,null,null,3,"ion-toggle",[["color","secondary"],["mode","md"],["value","veg"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==t.Bb(l,8)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Bb(l,8)._handleIonChange(u.target)&&e),"ionChange"===n&&(e=!1!==o.getVegItems(u)&&e),e}),i.mb,i.F)),t.Db(5120,null,s.d,(function(l){return[l]}),[a.c]),t.ob(7,49152,null,0,a.yb,[t.h,t.k,t.x],{color:[0,"color"],mode:[1,"mode"],value:[2,"value"]},null),t.ob(8,16384,null,0,a.c,[t.k],null,null)],(function(l,n){l(n,7,0,"secondary","md","veg")}),null)}function x(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,98,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,10,"div",[["class","ion-padding custom-skeleton"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 60%"]],null,null,null,i.eb,i.x)),t.ob(3,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(4,0,null,null,1,"ion-skeleton-text",[["animated",""]],null,null,null,i.eb,i.x)),t.ob(5,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(6,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 88%"]],null,null,null,i.eb,i.x)),t.ob(7,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(8,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 70%"]],null,null,null,i.eb,i.x)),t.ob(9,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(10,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 60%"]],null,null,null,i.eb,i.x)),t.ob(11,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(12,0,null,null,86,"ion-list",[["lines","none"]],null,null,null,i.X,i.p)),t.ob(13,49152,null,0,a.O,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(14,0,null,0,5,"ion-list-header",[],null,null,null,i.W,i.q)),t.ob(15,49152,null,0,a.P,[t.h,t.k,t.x],null,null),(l()(),t.pb(16,0,null,0,3,"ion-label",[],null,null,null,i.V,i.o)),t.ob(17,49152,null,0,a.N,[t.h,t.k,t.x],null,null),(l()(),t.pb(18,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 20%"]],null,null,null,i.eb,i.x)),t.ob(19,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(20,0,null,0,26,"ion-item",[],null,null,null,i.U,i.n)),t.ob(21,49152,null,0,a.H,[t.h,t.k,t.x],null,null),(l()(),t.pb(22,0,null,0,3,"ion-avatar",[["slot","start"]],null,null,null,i.I,i.b)),t.ob(23,49152,null,0,a.f,[t.h,t.k,t.x],null,null),(l()(),t.pb(24,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,i.eb,i.x)),t.ob(25,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(26,0,null,0,20,"ion-label",[],null,null,null,i.V,i.o)),t.ob(27,49152,null,0,a.N,[t.h,t.k,t.x],null,null),(l()(),t.pb(28,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 60%"]],null,null,null,i.eb,i.x)),t.ob(29,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(30,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,i.eb,i.x)),t.ob(31,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(32,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 88%"]],null,null,null,i.eb,i.x)),t.ob(33,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(34,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 70%"]],null,null,null,i.eb,i.x)),t.ob(35,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(36,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 60%"]],null,null,null,i.eb,i.x)),t.ob(37,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(38,0,null,0,2,"h3",[],null,null,null,null,null)),(l()(),t.pb(39,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 50%"]],null,null,null,i.eb,i.x)),t.ob(40,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(41,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.pb(42,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 80%"]],null,null,null,i.eb,i.x)),t.ob(43,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(44,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.pb(45,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 60%"]],null,null,null,i.eb,i.x)),t.ob(46,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(47,0,null,0,26,"ion-item",[],null,null,null,i.U,i.n)),t.ob(48,49152,null,0,a.H,[t.h,t.k,t.x],null,null),(l()(),t.pb(49,0,null,0,3,"ion-thumbnail",[["slot","start"]],null,null,null,i.kb,i.D)),t.ob(50,49152,null,0,a.wb,[t.h,t.k,t.x],null,null),(l()(),t.pb(51,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,i.eb,i.x)),t.ob(52,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(53,0,null,0,20,"ion-label",[],null,null,null,i.V,i.o)),t.ob(54,49152,null,0,a.N,[t.h,t.k,t.x],null,null),(l()(),t.pb(55,0,null,0,2,"h3",[],null,null,null,null,null)),(l()(),t.pb(56,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 50%"]],null,null,null,i.eb,i.x)),t.ob(57,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(58,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.pb(59,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 80%"]],null,null,null,i.eb,i.x)),t.ob(60,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(61,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.pb(62,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 60%"]],null,null,null,i.eb,i.x)),t.ob(63,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(64,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 60%"]],null,null,null,i.eb,i.x)),t.ob(65,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(66,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,i.eb,i.x)),t.ob(67,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(68,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 88%"]],null,null,null,i.eb,i.x)),t.ob(69,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(70,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 70%"]],null,null,null,i.eb,i.x)),t.ob(71,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(72,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 60%"]],null,null,null,i.eb,i.x)),t.ob(73,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(74,0,null,0,24,"ion-item",[],null,null,null,i.U,i.n)),t.ob(75,49152,null,0,a.H,[t.h,t.k,t.x],null,null),(l()(),t.pb(76,0,null,0,1,"ion-skeleton-text",[["animated",""],["slot","start"],["style","width: 27px; height: 27px"]],null,null,null,i.eb,i.x)),t.ob(77,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(78,0,null,0,20,"ion-label",[],null,null,null,i.V,i.o)),t.ob(79,49152,null,0,a.N,[t.h,t.k,t.x],null,null),(l()(),t.pb(80,0,null,0,2,"h3",[],null,null,null,null,null)),(l()(),t.pb(81,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 50%"]],null,null,null,i.eb,i.x)),t.ob(82,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(83,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.pb(84,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 80%"]],null,null,null,i.eb,i.x)),t.ob(85,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(86,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.pb(87,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 60%"]],null,null,null,i.eb,i.x)),t.ob(88,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(89,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 60%"]],null,null,null,i.eb,i.x)),t.ob(90,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(91,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,i.eb,i.x)),t.ob(92,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(93,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 88%"]],null,null,null,i.eb,i.x)),t.ob(94,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(95,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 70%"]],null,null,null,i.eb,i.x)),t.ob(96,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(97,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 60%"]],null,null,null,i.eb,i.x)),t.ob(98,49152,null,0,a.mb,[t.h,t.k,t.x],{animated:[0,"animated"]},null)],(function(l,n){l(n,3,0,""),l(n,5,0,""),l(n,7,0,""),l(n,9,0,""),l(n,11,0,""),l(n,13,0,"none"),l(n,19,0,""),l(n,25,0,""),l(n,29,0,""),l(n,31,0,""),l(n,33,0,""),l(n,35,0,""),l(n,37,0,""),l(n,40,0,""),l(n,43,0,""),l(n,46,0,""),l(n,52,0,""),l(n,57,0,""),l(n,60,0,""),l(n,63,0,""),l(n,65,0,""),l(n,67,0,""),l(n,69,0,""),l(n,71,0,""),l(n,73,0,""),l(n,77,0,""),l(n,82,0,""),l(n,85,0,""),l(n,88,0,""),l(n,90,0,""),l(n,92,0,""),l(n,94,0,""),l(n,96,0,""),l(n,98,0,"")}),null)}function f(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,["ITEM"]))],null,null)}function k(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,["ITEMS"]))],null,null)}function y(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,12,"div",[["class","place-order-btn ion-padding-horizontal"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,11,"ion-button",[["color","success"],["expand","block"],["mode","md"],["style","text-transform: capitalize;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.reviewOrder()&&t),t}),i.L,i.e)),t.ob(2,49152,null,0,a.k,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"],mode:[2,"mode"]},null),(l()(),t.pb(3,0,null,0,1,"ion-icon",[["name","caret-forward-outline"],["size","small"],["slot","end"]],null,null,null,i.S,i.l)),t.ob(4,49152,null,0,a.C,[t.h,t.k,t.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),t.pb(5,0,null,0,6,"small",[["style","margin-right: 50px; font-weight: 500;"]],null,null,null,null,null)),(l()(),t.Gb(6,null,[" "," "])),(l()(),t.pb(7,0,null,null,4,"span",[["style","margin-left: 3px;"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,f)),t.ob(9,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,k)),t.ob(11,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.Gb(-1,0,[" View Cart "]))],(function(l,n){var u=n.component;l(n,2,0,"success","block","md"),l(n,4,0,"caret-forward-outline","small"),l(n,9,0,1===u.itemQty),l(n,11,0,u.itemQty>1)}),(function(l,n){l(n,6,0,n.component.itemQty)}))}function w(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,5,"div",[["class","bottom-buttons"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,2,"ion-button",[["color","primary"],["fill","solid"],["shape","round"],["size","small"],["style","text-transform: capitalize; font-weight: 500; margin-bottom: 10px; margin-right: 16px;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showMenusCategory(u)&&t),t}),i.L,i.e)),t.ob(2,49152,null,0,a.k,[t.h,t.k,t.x],{color:[0,"color"],fill:[1,"fill"],shape:[2,"shape"],size:[3,"size"]},null),(l()(),t.Gb(-1,0,[" MENU "])),(l()(),t.eb(16777216,null,null,1,null,y)),t.ob(5,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,"primary","solid","round","small"),l(n,5,0,0!==u.itemQty)}),null)}function v(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,0,"img",[["alt",""],["class","food-type-icon"],["src","../../assets/icon/veg.png"],["srcset",""]],null,null,null,null,null))],null,null)}function I(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,0,"img",[["alt",""],["class","food-type-icon"],["src","../../assets/icon/non-veg.png"],["srcset",""]],null,null,null,null,null))],null,null)}function M(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,7,"div",[["class","thumbnail-wrap"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,v)),t.ob(2,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,I)),t.ob(4,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(5,0,null,null,2,"ion-thumbnail",[["slot","start"]],null,null,null,i.kb,i.D)),t.ob(6,49152,null,0,a.wb,[t.h,t.k,t.x],null,null),(l()(),t.pb(7,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null))],(function(l,n){l(n,2,0,"veg"===n.parent.parent.context.$implicit.type),l(n,4,0,"non-veg"===n.parent.parent.context.$implicit.type)}),(function(l,n){l(n,7,0,t.tb(1,"",n.parent.parent.context.$implicit.image,""))}))}function C(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,0,"img",[["alt",""],["src","../../assets/icon/veg.png"],["srcset",""],["width","16px"]],null,null,null,null,null))],null,null)}function O(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,0,"img",[["alt",""],["src","../../assets/icon/non-veg.png"],["srcset",""],["width","16px"]],null,null,null,null,null))],null,null)}function _(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,4,"span",[["style","margin-right: 2px;"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,C)),t.ob(2,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,O)),t.ob(4,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,"veg"===n.parent.parent.context.$implicit.type),l(n,4,0,"non-veg"===n.parent.parent.context.$implicit.type)}),null)}function z(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,2,"ion-badge",[["color","danger"],["mode","android"],["style","text-transform: uppercase; font-size: 9px; font-weight: 900; letter-spacing: 1.3px; margin-right: 5px;"]],null,null,null,i.K,i.d)),t.ob(2,49152,null,0,a.j,[t.h,t.k,t.x],{color:[0,"color"],mode:[1,"mode"]},null),(l()(),t.Gb(3,0,["",""]))],(function(l,n){l(n,2,0,"danger","android")}),(function(l,n){l(n,3,0,n.context.$implicit)}))}function H(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,2,"div",[["class","tags-images"],["style","margin-top: 2px;"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,z)),t.ob(2,278528,null,0,b.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.parent.parent.context.$implicit.tags)}),null)}function P(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,4,"ion-button",[["color","medium"],["fill","outline"],["size","small"],["style","text-transform: capitalize; font-weight: 400;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addItemInitial(l.parent.parent.context.$implicit)&&t),t}),i.L,i.e)),t.ob(1,49152,null,0,a.k,[t.h,t.k,t.x],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),(l()(),t.Gb(-1,0,[" Add "])),(l()(),t.pb(3,0,null,0,1,"ion-icon",[["name","add-outline"],["size","small"],["slot","icon-only"],["style","margin-right: 5px;"]],null,null,null,i.S,i.l)),t.ob(4,49152,null,0,a.C,[t.h,t.k,t.x],{name:[0,"name"],size:[1,"size"]},null)],(function(l,n){l(n,1,0,"medium","outline","small"),l(n,4,0,"add-outline","small")}),null)}function J(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,5,"div",[["class","add-item-button"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"ion-icon",[["class","add-item-button-left"],["name","remove-outline"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.decrementQty(l.parent.parent.context.$implicit)&&t),t}),i.S,i.l)),t.ob(2,49152,null,0,a.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.Gb(3,null,[" "," "])),(l()(),t.pb(4,0,null,null,1,"ion-icon",[["class","add-item-button-right"],["name","add-outline"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.incrementQty(l.parent.parent.context.$implicit)&&t),t}),i.S,i.l)),t.ob(5,49152,null,0,a.C,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(l,n){l(n,2,0,"remove-outline"),l(n,5,0,"add-outline")}),(function(l,n){l(n,3,0,n.parent.parent.context.$implicit.count)}))}function $(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,21,"ion-item",[["mode","md"],["style","margin-top: -15px;"]],null,null,null,i.U,i.n)),t.ob(1,49152,null,0,a.H,[t.h,t.k,t.x],{mode:[0,"mode"]},null),(l()(),t.eb(16777216,null,0,1,null,M)),t.ob(3,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(4,0,null,0,17,"ion-label",[],null,null,null,i.V,i.o)),t.ob(5,49152,null,0,a.N,[t.h,t.k,t.x],null,null),(l()(),t.pb(6,0,null,0,10,"div",[["class","details"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,3,"h2",[["style","font-size: 13px; font-weight: 600; display: flex; align-items: center; white-space: pre-wrap;"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,_)),t.ob(9,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.Gb(10,null,[" "," "])),(l()(),t.pb(11,0,null,null,1,"small",[["class","category-small"]],null,null,null,null,null)),(l()(),t.Gb(12,null,["",""])),(l()(),t.eb(16777216,null,null,1,null,H)),t.ob(14,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(15,0,null,null,1,"h3",[["class","price"]],null,null,null,null,null)),(l()(),t.Gb(16,null,["\u20b9 ",""])),(l()(),t.pb(17,0,null,0,4,"div",[["class","add-action"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,P)),t.ob(19,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,J)),t.ob(21,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,"md"),l(n,3,0,null!==n.parent.context.$implicit.image),l(n,9,0,null===n.parent.context.$implicit.image),l(n,14,0,null!==n.parent.context.$implicit.tags),l(n,19,0,0===n.parent.context.$implicit.count),l(n,21,0,0!==n.parent.context.$implicit.count)}),(function(l,n){l(n,10,0,n.parent.context.$implicit.name),l(n,12,0,n.parent.parent.parent.context.$implicit.name),l(n,16,0,n.parent.context.$implicit.price)}))}function S(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,6,"ion-list",[["lines","none"],["mode","md"]],null,null,null,i.X,i.p)),t.ob(1,49152,null,0,a.O,[t.h,t.k,t.x],{lines:[0,"lines"],mode:[1,"mode"]},null),(l()(),t.eb(16777216,null,0,1,null,$)),t.ob(3,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(4,0,null,0,2,"div",[["class","details-text"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Gb(6,null,["",""]))],(function(l,n){l(n,1,0,"none","md"),l(n,3,0,1==n.context.$implicit.is_enabled)}),(function(l,n){l(n,6,0,n.context.$implicit.description)}))}function Q(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,6,"div",[["class","show-hide-category"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"span",[["class","category-name"]],[[4,"background-color",null],[4,"color",null]],null,null,null,null)),(l()(),t.Gb(3,null,["",""])),(l()(),t.pb(4,0,null,null,2,"div",[["class","toggleMenus"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,S)),t.ob(6,278528,null,0,b.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,6,0,n.parent.context.$implicit.items)}),(function(l,n){var u=n.component;l(n,2,0,u.hotelDetails.hotel_header_color,u.hotelDetails.hotel_bc_color),l(n,3,0,n.parent.context.$implicit.name)}))}function G(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,2,"div",[["class","menu-list"]],[[8,"id",0]],null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,Q)),t.ob(2,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,1==n.context.$implicit.is_enabled)}),(function(l,n){l(n,0,0,t.tb(1,"",n.context.$implicit.category_id,""))}))}function D(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,2,"div",[["class","without-skelton"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,G)),t.ob(2,278528,null,0,b.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.menuItems)}),null)}function N(l){return t.Hb(0,[t.Eb(402653184,1,{content:0}),(l()(),t.pb(1,0,null,null,11,"ion-toolbar",[["mode","md"]],null,null,null,i.nb,i.G)),t.ob(2,49152,null,0,a.zb,[t.h,t.k,t.x],{mode:[0,"mode"]},null),(l()(),t.pb(3,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,i.M,i.f)),t.ob(4,49152,null,0,a.l,[t.h,t.k,t.x],null,null),(l()(),t.pb(5,0,null,0,3,"ion-button",[],null,null,null,i.L,i.e)),t.ob(6,49152,null,0,a.k,[t.h,t.k,t.x],null,null),(l()(),t.pb(7,0,null,0,1,"ion-icon",[["name","search-outline"],["slot","icon-only"]],null,null,null,i.S,i.l)),t.ob(8,49152,null,0,a.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.pb(9,0,null,0,3,"ion-title",[["size","small"]],null,null,null,i.lb,i.E)),t.ob(10,49152,null,0,a.xb,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(11,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t.Gb(12,null,["",""])),(l()(),t.pb(13,0,null,null,13,"ion-content",[],null,null,null,i.P,i.i)),t.ob(14,49152,[[1,4]],0,a.u,[t.h,t.k,t.x],{fullscreen:[0,"fullscreen"],scrollEvents:[1,"scrollEvents"]},null),(l()(),t.eb(16777216,null,0,1,null,g)),t.ob(16,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,0,1,null,x)),t.ob(18,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,0,1,null,w)),t.ob(20,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(21,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.eb(16777216,null,0,1,null,D)),t.ob(23,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(24,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.pb(25,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.pb(26,0,null,0,0,"br",[],null,null,null,null,null))],(function(l,n){var u=n.component;l(n,2,0,"md"),l(n,8,0,"search-outline"),l(n,10,0,"small"),l(n,14,0,!0,!0),l(n,16,0,!0===u.showToggle),l(n,18,0,!0===u.showSkelton),l(n,20,0,!1===u.showSkelton),l(n,23,0,!1===u.showSkelton)}),(function(l,n){l(n,12,0,n.component.hotelName)}))}function V(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-home",[],null,null,null,N,h)),t.ob(1,114688,null,0,m,[a.Hb,d.m,c.a,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}var B=t.lb("app-home",m,V,{},{},[]),F=t.nb({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{font-size:15px}"]],data:{}});function j(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,2,"ion-item",[["button",""],["detail","false"],["style","font-size: 13px;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.dismissPopover(l.parent.context.$implicit)&&t),t}),i.U,i.n)),t.ob(1,49152,null,0,a.H,[t.h,t.k,t.x],{button:[0,"button"],detail:[1,"detail"]},null),(l()(),t.Gb(2,0,[""," "]))],(function(l,n){l(n,1,0,"","false")}),(function(l,n){l(n,2,0,n.parent.context.$implicit.name)}))}function E(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,2,"div",[["class","cate"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,j)),t.ob(2,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,1==n.context.$implicit.is_enabled)}),null)}function T(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,3,"ion-list",[["lines","none"]],null,null,null,i.X,i.p)),t.ob(1,49152,null,0,a.O,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.eb(16777216,null,0,1,null,E)),t.ob(3,278528,null,0,b.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,1,0,"none"),l(n,3,0,u.menuCategories)}),null)}function U(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-menu-list",[],null,null,null,T,F)),t.ob(1,114688,null,0,r,[a.Hb],null,null)],(function(l,n){l(n,1,0)}),null)}var q=t.lb("app-menu-list",r,U,{menuCategories:"menuCategories"},{},[]);class L{}u.d(n,"HomePageModuleNgFactory",(function(){return X}));var X=t.mb(e,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[o.a,B,q]],[3,t.j],t.v]),t.zb(4608,b.k,b.j,[t.s,[2,b.q]]),t.zb(4608,s.j,s.j,[]),t.zb(4608,a.b,a.b,[t.x,t.g]),t.zb(4608,a.Db,a.Db,[a.b,t.j,t.p]),t.zb(4608,a.Hb,a.Hb,[a.b,t.j,t.p]),t.zb(1073742336,b.b,b.b,[]),t.zb(1073742336,s.i,s.i,[]),t.zb(1073742336,s.a,s.a,[]),t.zb(1073742336,a.Bb,a.Bb,[]),t.zb(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),t.zb(1073742336,L,L,[]),t.zb(1073742336,e,e,[]),t.zb(1024,d.k,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);