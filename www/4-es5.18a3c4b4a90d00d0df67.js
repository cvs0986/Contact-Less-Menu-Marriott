function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[4,101,102,103,104],{ni0Q:function(l,n,e){"use strict";e.d(n,"a",(function(){return t}));var t=function(){function l(n,e){_classCallCheck(this,l),this.modalCtrl=n,this.router=e,this.guestQty=0}return _createClass(l,[{key:"ngOnInit",value:function(){console.log(this.cartItems)}},{key:"addItemInitial",value:function(l){l.qty+=1,console.log(l.qty+1,l)}},{key:"incrementQty",value:function(l){l.qty+=1,console.log(l.qty+1,l)}},{key:"decrementQty",value:function(l){l.qty-1<1?(l.qty=0,console.log(l.qty,l)):(l.qty-=1,console.log(l.qty,l))}},{key:"incrementGuest",value:function(){this.guestQty+=1}},{key:"decrementGuest",value:function(){this.guestQty-1<1?this.guestQty=0:this.guestQty-=1}},{key:"dismissCart",value:function(){this.modalCtrl.dismiss()}},{key:"orderPlaced",value:function(){this.dismissCart(),this.router.navigateByUrl("/confirmation")}}]),l}()},o33B:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),o=function l(){_classCallCheck(this,l)},i=e("pMnS"),u=e("MKJQ"),r=e("sZkV"),a=e("SVse"),s=e("ni0Q"),c=function(){function l(n,e){_classCallCheck(this,l),this.modalCtrl=n,this.platform=e,this.itemQty=0,this.menuItems=[{headName:"ARTFULLY BLENDED",headDesc:"Looking for a refreshing start to your morning? All juices and smoothies are brimming with healthy benefits and essential nutrients to invigorate body and mind. Available all day.",headEl:[{categoryName:"SATISFYING SMOOTHIES",items:[{name:"Recharge Remedy S",price:650,qty:0,ingredients:"Pineapple, apple, banana, yoghurt and coconut water",elements:"CALCIUM  |  POTASSIUM  |  VITAMIN C"},{name:"Glow Potion S",price:650,ingredients:"Banana, peanut butter, coco powder, chia seeds, almond milk and honey",qty:0,elements:"OMEGA 3 | POTASSIUM | ANTIOXIDANTS"}]},{categoryName:"REVITALIZING JUICES",items:[{name:"Anti-aging Solution S C",price:600,ingredients:"Carrot, apple and spinach",qty:0,elements:"FIBER | IRON | VITAMIN C"},{name:"Balancing Beets S C",price:600,ingredients:"Beetroot, pineapple, carrot, ginger and basil",qty:0,elements:"VITAMIN C | CALCIUM | MAGNESIUM"},{name:"Immunity S C",price:600,ingredients:"Apple, ginger and lemon",qty:0,elements:"VITAMIN C | FIBER | MAGNESIUM"}]},{categoryName:"FRESHLY SQUEEZED JUICES",items:[{name:"Fruits",price:525,ingredients:"Orange/watermelon/pineapple",qty:0,elements:""},{name:"Vegetables",price:525,ingredients:"Tomato/spinach/beetroot/carrot/celery/cucumber",qty:0,elements:""}]}]},{headName:"BREAKFAST",headDesc:"6.00am - 11.00am",headEl:[{categoryName:"A BALANCED START",items:[{name:"Seasonal Sliced Fruit Platter H C",price:600,qty:0,ingredients:"Locally sourced seasonal fruit",elements:""},{name:"Yoghurt H C",price:385,ingredients:"Low fat, Plain, Blueberry, Banana",qty:0,elements:"MAGNESIUM | CALCIUM | PHOSPHORUS | VITAMIN A"},{name:"Oatmeal H C",price:550,ingredients:"Served with brown sugar and raisins",qty:0,elements:"POTASSIUM | CARBOHYDRATE | PROTEIN"},{name:"Bircher Muesli H C S",price:550,ingredients:"Yoghurt, oats, toasted almond, grapes, orange segments and honey",qty:0,elements:"CALCIUM | PHOSPHORUS"},{name:"Bircher Muesli H C S",price:550,ingredients:"Yoghurt, oats, toasted almond, grapes, orange segments and honey",qty:0,elements:"CALCIUM | PHOSPHORUS"},{name:"Cereal Selection H C",price:500,ingredients:"Corn Flakes",qty:0,elements:"SODIUM | POTASSIUM"},{name:"Lassi C",price:475,ingredients:"Plain/ Sweet/ Salted",qty:0,elements:""},{name:"Buttermilk C",price:475,ingredients:"Salted / masala",qty:0,elements:""}]},{categoryName:"REVITALIZING JUICES",items:[{name:"Anti-aging Solution S C",price:600,ingredients:"Carrot, apple and spinach",qty:0,elements:"FIBER | IRON | VITAMIN C"},{name:"Balancing Beets S C",price:600,ingredients:"Beetroot, pineapple, carrot, ginger and basil",qty:0,elements:"VITAMIN C | CALCIUM | MAGNESIUM"},{name:"Immunity S C",price:600,ingredients:"Apple, ginger and lemon",qty:0,elements:"VITAMIN C | FIBER | MAGNESIUM"}]},{categoryName:"FRESHLY SQUEEZED JUICES",items:[{name:"Fruits",price:525,ingredients:"Orange/watermelon/pineapple",qty:0,elements:""},{name:"Vegetables",price:525,ingredients:"Tomato/spinach/beetroot/carrot/celery/cucumber",qty:0,elements:""}]}]}]}return _createClass(l,[{key:"ngOnInit",value:function(){this.isIos=this.platform.is("ios"),console.log(this.isIos)}},{key:"addItemInitial",value:function(l){l.qty+=1,this.itemQty+=1,console.log(l.qty+1,l,this.itemQty)}},{key:"incrementQty",value:function(l){l.qty+=1,this.itemQty+=1,console.log(l.qty+1,l,this.itemQty)}},{key:"decrementQty",value:function(l){l.qty-1<1?(l.qty=0,this.itemQty-=1,console.log(l.qty,l,this.itemQty)):(l.qty-=1,this.itemQty-=1,console.log(l.qty,l,this.itemQty))}},{key:"reviewOrder",value:function(){localStorage.removeItem("cart-items");var l=[];this.menuItems.filter((function(n){n.headEl.filter((function(n){n.items.filter((function(n){0!==n.qty&&l.push(n)}))}))})),console.log(l),localStorage.setItem("cart-items",JSON.stringify(l)),this.modalCtrl.create({component:s.a,componentProps:{cartItems:l}}).then((function(l){l.present()}))}}]),l}(),m=t.mb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:#FCFCF7}.nourishment-section[_ngcontent-%COMP%]{padding:10px 13px}.nourishment-divider[_ngcontent-%COMP%]{width:100%;height:6px;background:#8ba47e}.el-category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%;text-align:center;border-bottom:1px solid #cdc3c1;line-height:.1em;margin:10px 0 20px;color:#747474}.el-category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:#fcfcf7;padding:0 10px}.el-description[_ngcontent-%COMP%]{padding:0 5px;font-size:14px}.nourishment-el[_ngcontent-%COMP%]{margin-bottom:40px;margin-left:-13px;margin-right:-13px}ion-button[_ngcontent-%COMP%]{--border-width:0.5px}.custom-skeleton[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%]{line-height:13px}.custom-skeleton[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%]:last-child{margin-bottom:5px}.item[_ngcontent-%COMP%]   .sc-ion-label-md-h[_ngcontent-%COMP%], .item.sc-ion-label-md-h[_ngcontent-%COMP%]{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family,inherit);font-size:inherit;text-overflow:ellipsis;white-space:pre-wrap!important;overflow:hidden;box-sizing:border-box}.sc-ion-popover-md-h[_ngcontent-%COMP%]{--width:250px;--max-height:60%!important;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2),0 8px 10px 1px rgba(0, 0, 0, 0.14),0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md[_ngcontent-%COMP%]{border-radius:4px;transform-origin:left top;bottom:12px;top:20%!important;left:113px;transform-origin:right top}ion-item[_ngcontent-%COMP%], ion-list[_ngcontent-%COMP%]{--background:transparent!important}.veg-toggle-ui[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;margin-right:25px}.bottom-buttons[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;z-index:1000000;text-align:right}.place-order-btn[_ngcontent-%COMP%]{background-color:#fff;padding:10px 16px;box-shadow:0 0 10px #c8c8c8}.category-name[_ngcontent-%COMP%]{padding:5px 35px 5px 16px;background:#eb3237;-webkit-clip-path:polygon(0 0,0 100%,85% 100%,100% 0);clip-path:polygon(0 0,0 100%,85% 100%,100% 0);color:#fff;text-transform:uppercase;font-weight:700}.thumbnail-wrap[_ngcontent-%COMP%]{position:relative;margin-right:10px}.food-type-icon[_ngcontent-%COMP%]{position:absolute;top:4px;right:4px;width:16px}ion-thumbnail[_ngcontent-%COMP%]{width:70px;height:70px}ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px}ion-label[_ngcontent-%COMP%]{display:flex!important;flex-direction:row;justify-content:space-between}.details[_ngcontent-%COMP%]{width:78%}.add-section[_ngcontent-%COMP%]{width:22%}.add-item-button[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;border-width:2px;border-style:solid;border-color:#d8d8d8 #d1d1d1 #bababa;-o-border-image:initial;border-image:initial;border-radius:5px;align-items:center;height:2.2em;font-size:13px;width:73px}.add-item-button-left[_ngcontent-%COMP%]{background-color:#a9a9a9;padding:7px;margin-left:-8px;border-top-left-radius:5px;border-bottom-left-radius:5px;color:#fff}.add-item-button-right[_ngcontent-%COMP%]{background-color:#a9a9a9;padding:7px;margin-right:-8px;border-top-right-radius:5px;border-bottom-right-radius:5px;color:#fff}.details-text[_ngcontent-%COMP%]{padding:0 16px;margin-top:-5px;font-size:13px}.category-small[_ngcontent-%COMP%]{color:#868686;text-transform:uppercase}.price[_ngcontent-%COMP%]{font-weight:500;letter-spacing:.9px}"]],data:{}});function d(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,4,"ion-fab",[["horizontal","start"],["slot","fixed"],["vertical","bottom"]],null,null,null,u.M,u.j)),t.nb(1,49152,null,0,r.w,[t.h,t.k,t.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t.ob(2,0,null,0,2,"ion-button",[["color","primary"],["fill","solid"],["mode","md"],["shape","round"],["size","small"]],null,null,null,u.H,u.e)),t.nb(3,49152,null,0,r.k,[t.h,t.k,t.x],{color:[0,"color"],fill:[1,"fill"],mode:[2,"mode"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),t.Eb(-1,0,[" Menu "]))],(function(l,n){l(n,1,0,"start","bottom"),l(n,3,0,"primary","solid","md","round","small")}),null)}function b(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,6,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,u.M,u.j)),t.nb(1,49152,null,0,r.w,[t.h,t.k,t.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t.ob(2,0,null,0,4,"ion-button",[["color","success"],["fill","solid"],["mode","md"],["shape","round"],["size","small"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.reviewOrder()&&t),t}),u.H,u.e)),t.nb(3,49152,null,0,r.k,[t.h,t.k,t.x],{color:[0,"color"],fill:[1,"fill"],mode:[2,"mode"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),t.Eb(-1,0,[" View Cart "])),(l()(),t.ob(5,0,null,0,1,"ion-icon",[["name","chevron-forward-outline"],["slot","end"]],null,null,null,u.N,u.k)),t.nb(6,49152,null,0,r.C,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"end","bottom"),l(n,3,0,"success","solid","md","round","small"),l(n,6,0,"chevron-forward-outline")}),null)}function p(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,5,"ion-fab",[["horizontal","start"],["slot","fixed"],["vertical","bottom"]],null,null,null,u.M,u.j)),t.nb(1,49152,null,0,r.w,[t.h,t.k,t.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t.ob(2,0,null,0,3,"ion-button",[["color","medium"],["fill","clear"],["size","small"]],null,null,null,u.H,u.e)),t.nb(3,49152,null,0,r.k,[t.h,t.k,t.x],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),(l()(),t.ob(4,0,null,0,1,"ion-icon",[["name","information-circle-outline"],["slot","icon-only"],["style","margin-right: 5px;"]],null,null,null,u.N,u.k)),t.nb(5,49152,null,0,r.C,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"start","bottom"),l(n,3,0,"medium","clear","small"),l(n,5,0,"information-circle-outline")}),null)}function g(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["ITEM"]))],null,null)}function f(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["ITEMS"]))],null,null)}function h(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,12,"div",[["class","place-order-btn ion-padding-horizontal"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,11,"ion-button",[["color","success"],["expand","block"],["mode","md"],["style","text-transform: capitalize;"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.reviewOrder()&&t),t}),u.H,u.e)),t.nb(2,49152,null,0,r.k,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"],mode:[2,"mode"]},null),(l()(),t.ob(3,0,null,0,1,"ion-icon",[["name","caret-forward-outline"],["size","small"],["slot","end"]],null,null,null,u.N,u.k)),t.nb(4,49152,null,0,r.C,[t.h,t.k,t.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),t.ob(5,0,null,0,6,"small",[["style","margin-right: 50px; font-weight: 500;"]],null,null,null,null,null)),(l()(),t.Eb(6,null,[" "," "])),(l()(),t.ob(7,0,null,null,4,"span",[["style","margin-left: 3px;"]],null,null,null,null,null)),(l()(),t.db(16777216,null,null,1,null,g)),t.nb(9,16384,null,0,a.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.db(16777216,null,null,1,null,f)),t.nb(11,16384,null,0,a.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.Eb(-1,0,[" View Cart "]))],(function(l,n){var e=n.component;l(n,2,0,"success","block","md"),l(n,4,0,"caret-forward-outline","small"),l(n,9,0,1===e.itemQty),l(n,11,0,e.itemQty>1)}),(function(l,n){l(n,6,0,n.component.itemQty)}))}function y(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,7,"div",[["class","bottom-buttons"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,4,"ion-button",[["color","primary"],["fill","solid"],["shape","round"],["size","small"],["style","text-transform: capitalize; font-weight: 500; margin-bottom: 10px; margin-right: 16px;"]],null,null,null,u.H,u.e)),t.nb(2,49152,null,0,r.k,[t.h,t.k,t.x],{color:[0,"color"],fill:[1,"fill"],shape:[2,"shape"],size:[3,"size"]},null),(l()(),t.Eb(-1,0,[" MENU "])),(l()(),t.ob(4,0,null,0,1,"ion-icon",[["name","menu-outline"],["size","small"],["slot","icon-only"],["style","margin-right: 5px;"]],null,null,null,u.N,u.k)),t.nb(5,49152,null,0,r.C,[t.h,t.k,t.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),t.db(16777216,null,null,1,null,h)),t.nb(7,16384,null,0,a.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,2,0,"primary","solid","round","small"),l(n,5,0,"menu-outline","small"),l(n,7,0,0!==e.itemQty&&!1===e.isIos)}),null)}function x(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,4,"ion-button",[["color","medium"],["fill","outline"],["size","small"],["style","text-transform: capitalize; font-weight: 400;"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.addItemInitial(l.parent.context.$implicit)&&t),t}),u.H,u.e)),t.nb(1,49152,null,0,r.k,[t.h,t.k,t.x],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),(l()(),t.Eb(-1,0,[" Add "])),(l()(),t.ob(3,0,null,0,1,"ion-icon",[["name","add-outline"],["size","small"],["slot","icon-only"],["style","margin-right: 5px;"]],null,null,null,u.N,u.k)),t.nb(4,49152,null,0,r.C,[t.h,t.k,t.x],{name:[0,"name"],size:[1,"size"]},null)],(function(l,n){l(n,1,0,"medium","outline","small"),l(n,4,0,"add-outline","small")}),null)}function C(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,5,"div",[["class","add-item-button"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,1,"ion-icon",[["class","add-item-button-left"],["name","remove-outline"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.decrementQty(l.parent.context.$implicit)&&t),t}),u.N,u.k)),t.nb(2,49152,null,0,r.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.Eb(3,null,[" "," "])),(l()(),t.ob(4,0,null,null,1,"ion-icon",[["class","add-item-button-right"],["name","add-outline"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.incrementQty(l.parent.context.$implicit)&&t),t}),u.N,u.k)),t.nb(5,49152,null,0,r.C,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(l,n){l(n,2,0,"remove-outline"),l(n,5,0,"add-outline")}),(function(l,n){l(n,3,0,n.parent.context.$implicit.qty)}))}function I(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,21,"ion-list",[["lines","none"],["mode","md"],["style","background: transparent;"]],null,null,null,u.S,u.o)),t.nb(1,49152,null,0,r.O,[t.h,t.k,t.x],{lines:[0,"lines"],mode:[1,"mode"]},null),(l()(),t.ob(2,0,null,0,13,"ion-item",[["mode","md"],["style","background: transparent;"]],null,null,null,u.P,u.m)),t.nb(3,49152,null,0,r.H,[t.h,t.k,t.x],{mode:[0,"mode"]},null),(l()(),t.ob(4,0,null,0,11,"ion-label",[],null,null,null,u.Q,u.n)),t.nb(5,49152,null,0,r.N,[t.h,t.k,t.x],null,null),(l()(),t.ob(6,0,null,0,4,"div",[["class","details"]],null,null,null,null,null)),(l()(),t.ob(7,0,null,null,1,"h2",[["style","font-size: 13px; font-weight: 600; display: flex; align-items: center; white-space: pre-wrap;"]],null,null,null,null,null)),(l()(),t.Eb(8,null,[" "," "])),(l()(),t.ob(9,0,null,null,1,"h3",[["class","price"]],null,null,null,null,null)),(l()(),t.Eb(10,null,["\u20b9",".00"])),(l()(),t.ob(11,0,null,0,4,"div",[["class","add-action"]],null,null,null,null,null)),(l()(),t.db(16777216,null,null,1,null,x)),t.nb(13,16384,null,0,a.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.db(16777216,null,null,1,null,C)),t.nb(15,16384,null,0,a.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(16,0,null,0,5,"div",[["class","details-text"]],null,null,null,null,null)),(l()(),t.ob(17,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Eb(18,null,["",""])),(l()(),t.ob(19,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.ob(20,0,null,null,1,"span",[["style","font-size: 12px; color: #585858; font-weight: 500;"]],null,null,null,null,null)),(l()(),t.Eb(21,null,["",""]))],(function(l,n){l(n,1,0,"none","md"),l(n,3,0,"md"),l(n,13,0,0===n.context.$implicit.qty),l(n,15,0,0!==n.context.$implicit.qty)}),(function(l,n){l(n,8,0,n.context.$implicit.name),l(n,10,0,n.context.$implicit.price),l(n,18,0,n.context.$implicit.ingredients),l(n,21,0,n.context.$implicit.elements)}))}function k(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,7,"div",[["class","nourishment-el"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,3,"div",[["class","el-category"]],null,null,null,null,null)),(l()(),t.ob(2,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.ob(3,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Eb(4,null,["",""])),(l()(),t.ob(5,0,null,null,2,"div",[["class","toggleMenus"]],null,null,null,null,null)),(l()(),t.db(16777216,null,null,1,null,I)),t.nb(7,278528,null,0,a.h,[t.L,t.I,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,7,0,n.context.$implicit.items)}),(function(l,n){l(n,4,0,n.context.$implicit.categoryName)}))}function M(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,11,"div",[["class","nourishment-section"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,1,"span",[["class","header-txt"],["style","font-size: 16px; font-weight: 500;"]],null,null,null,null,null)),(l()(),t.Eb(2,null,["",""])),(l()(),t.ob(3,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.ob(4,0,null,null,1,"span",[["style","font-size: 12px;"]],null,null,null,null,null)),(l()(),t.Eb(5,null,["",""])),(l()(),t.ob(6,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.ob(7,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.ob(8,0,null,null,0,"div",[["class","nourishment-divider"]],null,null,null,null,null)),(l()(),t.ob(9,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.db(16777216,null,null,1,null,k)),t.nb(11,278528,null,0,a.h,[t.L,t.I,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,11,0,n.context.$implicit.headEl)}),(function(l,n){l(n,2,0,n.context.$implicit.headName),l(n,5,0,n.context.$implicit.headDesc)}))}function O(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,10,"ion-toolbar",[],null,null,null,u.fb,u.C)),t.nb(1,49152,null,0,r.zb,[t.h,t.k,t.x],null,null),(l()(),t.ob(2,0,null,0,2,"ion-title",[],null,null,null,u.db,u.A)),t.nb(3,49152,null,0,r.xb,[t.h,t.k,t.x],null,null),(l()(),t.ob(4,0,null,0,0,"img",[["alt",""],["src","../../../../../assets/Logo_Grey.png"]],null,null,null,null,null)),(l()(),t.ob(5,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,u.I,u.f)),t.nb(6,49152,null,0,r.l,[t.h,t.k,t.x],null,null),(l()(),t.ob(7,0,null,0,3,"ion-button",[],null,null,null,u.H,u.e)),t.nb(8,49152,null,0,r.k,[t.h,t.k,t.x],null,null),(l()(),t.ob(9,0,null,0,1,"ion-icon",[["name","person-circle-outline"],["slot","icon-only"]],null,null,null,u.N,u.k)),t.nb(10,49152,null,0,r.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.ob(11,0,null,null,18,"ion-content",[],null,null,null,u.K,u.h)),t.nb(12,49152,null,0,r.u,[t.h,t.k,t.x],null,null),(l()(),t.db(16777216,null,0,1,null,d)),t.nb(14,16384,null,0,a.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.db(16777216,null,0,1,null,b)),t.nb(16,16384,null,0,a.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.db(16777216,null,0,1,null,p)),t.nb(18,16384,null,0,a.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.db(16777216,null,0,1,null,y)),t.nb(20,16384,null,0,a.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(21,0,null,0,4,"ion-buttons",[],null,null,null,u.I,u.f)),t.nb(22,49152,null,0,r.l,[t.h,t.k,t.x],null,null),(l()(),t.ob(23,0,null,0,2,"ion-back-button",[["defaultHref","/hotel/tabs/hotel-home/nourishment"]],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==t.Ab(l,25).onClick(e)&&o),o}),u.F,u.c)),t.nb(24,49152,null,0,r.g,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"]},null),t.nb(25,16384,null,0,r.h,[[2,r.fb],r.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.db(16777216,null,0,1,null,M)),t.nb(27,278528,null,0,a.h,[t.L,t.I,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.ob(28,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.ob(29,0,null,0,0,"br",[],null,null,null,null,null))],(function(l,n){var e=n.component;l(n,10,0,"person-circle-outline"),l(n,14,0,!0===e.isIos),l(n,16,0,!0===e.isIos&&0!==e.itemQty),l(n,18,0,!1===e.isIos),l(n,20,0,!1===e.isIos),l(n,24,0,"/hotel/tabs/hotel-home/nourishment"),l(n,25,0,"/hotel/tabs/hotel-home/nourishment"),l(n,27,0,e.menuItems)}),null)}var v=t.kb("app-ird-menu",c,(function(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,1,"app-ird-menu",[],null,null,null,O,m)),t.nb(1,114688,null,0,c,[r.Db,r.Gb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),P=e("s7LF"),w=e("iInd"),S=function l(){_classCallCheck(this,l)};e.d(n,"IrdMenuPageModuleNgFactory",(function(){return E}));var E=t.lb(o,[],(function(l){return t.xb([t.yb(512,t.j,t.W,[[8,[i.a,v]],[3,t.j],t.v]),t.yb(4608,a.k,a.j,[t.s,[2,a.q]]),t.yb(4608,P.j,P.j,[]),t.yb(4608,r.b,r.b,[t.x,t.g]),t.yb(4608,r.Db,r.Db,[r.b,t.j,t.p]),t.yb(4608,r.Hb,r.Hb,[r.b,t.j,t.p]),t.yb(1073742336,a.b,a.b,[]),t.yb(1073742336,P.i,P.i,[]),t.yb(1073742336,P.a,P.a,[]),t.yb(1073742336,r.Bb,r.Bb,[]),t.yb(1073742336,w.n,w.n,[[2,w.s],[2,w.m]]),t.yb(1073742336,S,S,[]),t.yb(1073742336,o,o,[]),t.yb(1024,w.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);