(window.webpackJsonp=window.webpackJsonp||[]).push([[4,101,102,103,104],{ni0Q:function(l,n,t){"use strict";t.d(n,"a",(function(){return e}));class e{constructor(l,n){this.modalCtrl=l,this.router=n,this.guestQty=0}ngOnInit(){console.log(this.cartItems)}addItemInitial(l){l.qty+=1,console.log(l.qty+1,l)}incrementQty(l){l.qty+=1,console.log(l.qty+1,l)}decrementQty(l){l.qty-1<1?(l.qty=0,console.log(l.qty,l)):(l.qty-=1,console.log(l.qty,l))}incrementGuest(){this.guestQty+=1}decrementGuest(){this.guestQty-1<1?this.guestQty=0:this.guestQty-=1}dismissCart(){this.modalCtrl.dismiss()}orderPlaced(){this.dismissCart(),this.router.navigateByUrl("/confirmation")}}},o33B:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class o{}var i=t("pMnS"),u=t("MKJQ"),r=t("sZkV"),a=t("SVse"),s=t("ni0Q");class c{constructor(l,n){this.modalCtrl=l,this.platform=n,this.itemQty=0,this.menuItems=[{headName:"ARTFULLY BLENDED",headDesc:"Looking for a refreshing start to your morning? All juices and smoothies are brimming with healthy benefits and essential nutrients to invigorate body and mind. Available all day.",headEl:[{categoryName:"SATISFYING SMOOTHIES",items:[{name:"Recharge Remedy S",price:650,qty:0,ingredients:"Pineapple, apple, banana, yoghurt and coconut water",elements:"CALCIUM  |  POTASSIUM  |  VITAMIN C"},{name:"Glow Potion S",price:650,ingredients:"Banana, peanut butter, coco powder, chia seeds, almond milk and honey",qty:0,elements:"OMEGA 3 | POTASSIUM | ANTIOXIDANTS"}]},{categoryName:"REVITALIZING JUICES",items:[{name:"Anti-aging Solution S C",price:600,ingredients:"Carrot, apple and spinach",qty:0,elements:"FIBER | IRON | VITAMIN C"},{name:"Balancing Beets S C",price:600,ingredients:"Beetroot, pineapple, carrot, ginger and basil",qty:0,elements:"VITAMIN C | CALCIUM | MAGNESIUM"},{name:"Immunity S C",price:600,ingredients:"Apple, ginger and lemon",qty:0,elements:"VITAMIN C | FIBER | MAGNESIUM"}]},{categoryName:"FRESHLY SQUEEZED JUICES",items:[{name:"Fruits",price:525,ingredients:"Orange/watermelon/pineapple",qty:0,elements:""},{name:"Vegetables",price:525,ingredients:"Tomato/spinach/beetroot/carrot/celery/cucumber",qty:0,elements:""}]}]},{headName:"BREAKFAST",headDesc:"6.00am - 11.00am",headEl:[{categoryName:"A BALANCED START",items:[{name:"Seasonal Sliced Fruit Platter H C",price:600,qty:0,ingredients:"Locally sourced seasonal fruit",elements:""},{name:"Yoghurt H C",price:385,ingredients:"Low fat, Plain, Blueberry, Banana",qty:0,elements:"MAGNESIUM | CALCIUM | PHOSPHORUS | VITAMIN A"},{name:"Oatmeal H C",price:550,ingredients:"Served with brown sugar and raisins",qty:0,elements:"POTASSIUM | CARBOHYDRATE | PROTEIN"},{name:"Bircher Muesli H C S",price:550,ingredients:"Yoghurt, oats, toasted almond, grapes, orange segments and honey",qty:0,elements:"CALCIUM | PHOSPHORUS"},{name:"Bircher Muesli H C S",price:550,ingredients:"Yoghurt, oats, toasted almond, grapes, orange segments and honey",qty:0,elements:"CALCIUM | PHOSPHORUS"},{name:"Cereal Selection H C",price:500,ingredients:"Corn Flakes",qty:0,elements:"SODIUM | POTASSIUM"},{name:"Lassi C",price:475,ingredients:"Plain/ Sweet/ Salted",qty:0,elements:""},{name:"Buttermilk C",price:475,ingredients:"Salted / masala",qty:0,elements:""}]},{categoryName:"REVITALIZING JUICES",items:[{name:"Anti-aging Solution S C",price:600,ingredients:"Carrot, apple and spinach",qty:0,elements:"FIBER | IRON | VITAMIN C"},{name:"Balancing Beets S C",price:600,ingredients:"Beetroot, pineapple, carrot, ginger and basil",qty:0,elements:"VITAMIN C | CALCIUM | MAGNESIUM"},{name:"Immunity S C",price:600,ingredients:"Apple, ginger and lemon",qty:0,elements:"VITAMIN C | FIBER | MAGNESIUM"}]},{categoryName:"FRESHLY SQUEEZED JUICES",items:[{name:"Fruits",price:525,ingredients:"Orange/watermelon/pineapple",qty:0,elements:""},{name:"Vegetables",price:525,ingredients:"Tomato/spinach/beetroot/carrot/celery/cucumber",qty:0,elements:""}]}]}]}ngOnInit(){this.isIos=this.platform.is("ios"),console.log(this.isIos)}addItemInitial(l){l.qty+=1,this.itemQty+=1,console.log(l.qty+1,l,this.itemQty)}incrementQty(l){l.qty+=1,this.itemQty+=1,console.log(l.qty+1,l,this.itemQty)}decrementQty(l){l.qty-1<1?(l.qty=0,this.itemQty-=1,console.log(l.qty,l,this.itemQty)):(l.qty-=1,this.itemQty-=1,console.log(l.qty,l,this.itemQty))}reviewOrder(){localStorage.removeItem("cart-items");const l=[];this.menuItems.filter(n=>{n.headEl.filter(n=>{n.items.filter(n=>{0!==n.qty&&l.push(n)})})}),console.log(l),localStorage.setItem("cart-items",JSON.stringify(l)),this.modalCtrl.create({component:s.a,componentProps:{cartItems:l}}).then(l=>{l.present()})}}var m=e.mb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:#FCFCF7}.nourishment-section[_ngcontent-%COMP%]{padding:10px 13px}.nourishment-divider[_ngcontent-%COMP%]{width:100%;height:6px;background:#8ba47e}.el-category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%;text-align:center;border-bottom:1px solid #cdc3c1;line-height:.1em;margin:10px 0 20px;color:#747474}.el-category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:#fcfcf7;padding:0 10px}.el-description[_ngcontent-%COMP%]{padding:0 5px;font-size:14px}.nourishment-el[_ngcontent-%COMP%]{margin-bottom:40px;margin-left:-13px;margin-right:-13px}ion-button[_ngcontent-%COMP%]{--border-width:0.5px}.custom-skeleton[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%]{line-height:13px}.custom-skeleton[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%]:last-child{margin-bottom:5px}.item[_ngcontent-%COMP%]   .sc-ion-label-md-h[_ngcontent-%COMP%], .item.sc-ion-label-md-h[_ngcontent-%COMP%]{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family,inherit);font-size:inherit;text-overflow:ellipsis;white-space:pre-wrap!important;overflow:hidden;box-sizing:border-box}.sc-ion-popover-md-h[_ngcontent-%COMP%]{--width:250px;--max-height:60%!important;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2),0 8px 10px 1px rgba(0, 0, 0, 0.14),0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md[_ngcontent-%COMP%]{border-radius:4px;transform-origin:left top;bottom:12px;top:20%!important;left:113px;transform-origin:right top}ion-item[_ngcontent-%COMP%], ion-list[_ngcontent-%COMP%]{--background:transparent!important}.veg-toggle-ui[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;margin-right:25px}.bottom-buttons[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;z-index:1000000;text-align:right}.place-order-btn[_ngcontent-%COMP%]{background-color:#fff;padding:10px 16px;box-shadow:0 0 10px #c8c8c8}.category-name[_ngcontent-%COMP%]{padding:5px 35px 5px 16px;background:#eb3237;-webkit-clip-path:polygon(0 0,0 100%,85% 100%,100% 0);clip-path:polygon(0 0,0 100%,85% 100%,100% 0);color:#fff;text-transform:uppercase;font-weight:700}.thumbnail-wrap[_ngcontent-%COMP%]{position:relative;margin-right:10px}.food-type-icon[_ngcontent-%COMP%]{position:absolute;top:4px;right:4px;width:16px}ion-thumbnail[_ngcontent-%COMP%]{width:70px;height:70px}ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px}ion-label[_ngcontent-%COMP%]{display:flex!important;flex-direction:row;justify-content:space-between}.details[_ngcontent-%COMP%]{width:78%}.add-section[_ngcontent-%COMP%]{width:22%}.add-item-button[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;border-width:2px;border-style:solid;border-color:#d8d8d8 #d1d1d1 #bababa;-o-border-image:initial;border-image:initial;border-radius:5px;align-items:center;height:2.2em;font-size:13px;width:73px}.add-item-button-left[_ngcontent-%COMP%]{background-color:#a9a9a9;padding:7px;margin-left:-8px;border-top-left-radius:5px;border-bottom-left-radius:5px;color:#fff}.add-item-button-right[_ngcontent-%COMP%]{background-color:#a9a9a9;padding:7px;margin-right:-8px;border-top-right-radius:5px;border-bottom-right-radius:5px;color:#fff}.details-text[_ngcontent-%COMP%]{padding:0 16px;margin-top:-5px;font-size:13px}.category-small[_ngcontent-%COMP%]{color:#868686;text-transform:uppercase}.price[_ngcontent-%COMP%]{font-weight:500;letter-spacing:.9px}"]],data:{}});function d(l){return e.Fb(0,[(l()(),e.ob(0,0,null,null,4,"ion-fab",[["horizontal","start"],["slot","fixed"],["vertical","bottom"]],null,null,null,u.M,u.j)),e.nb(1,49152,null,0,r.w,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.ob(2,0,null,0,2,"ion-button",[["color","primary"],["fill","solid"],["mode","md"],["shape","round"],["size","small"]],null,null,null,u.H,u.e)),e.nb(3,49152,null,0,r.k,[e.h,e.k,e.x],{color:[0,"color"],fill:[1,"fill"],mode:[2,"mode"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),e.Eb(-1,0,[" Menu "]))],(function(l,n){l(n,1,0,"start","bottom"),l(n,3,0,"primary","solid","md","round","small")}),null)}function b(l){return e.Fb(0,[(l()(),e.ob(0,0,null,null,6,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,u.M,u.j)),e.nb(1,49152,null,0,r.w,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.ob(2,0,null,0,4,"ion-button",[["color","success"],["fill","solid"],["mode","md"],["shape","round"],["size","small"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.reviewOrder()&&e),e}),u.H,u.e)),e.nb(3,49152,null,0,r.k,[e.h,e.k,e.x],{color:[0,"color"],fill:[1,"fill"],mode:[2,"mode"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),e.Eb(-1,0,[" View Cart "])),(l()(),e.ob(5,0,null,0,1,"ion-icon",[["name","chevron-forward-outline"],["slot","end"]],null,null,null,u.N,u.k)),e.nb(6,49152,null,0,r.C,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"end","bottom"),l(n,3,0,"success","solid","md","round","small"),l(n,6,0,"chevron-forward-outline")}),null)}function p(l){return e.Fb(0,[(l()(),e.ob(0,0,null,null,5,"ion-fab",[["horizontal","start"],["slot","fixed"],["vertical","bottom"]],null,null,null,u.M,u.j)),e.nb(1,49152,null,0,r.w,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.ob(2,0,null,0,3,"ion-button",[["color","medium"],["fill","clear"],["size","small"]],null,null,null,u.H,u.e)),e.nb(3,49152,null,0,r.k,[e.h,e.k,e.x],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),(l()(),e.ob(4,0,null,0,1,"ion-icon",[["name","information-circle-outline"],["slot","icon-only"],["style","margin-right: 5px;"]],null,null,null,u.N,u.k)),e.nb(5,49152,null,0,r.C,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"start","bottom"),l(n,3,0,"medium","clear","small"),l(n,5,0,"information-circle-outline")}),null)}function g(l){return e.Fb(0,[(l()(),e.ob(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["ITEM"]))],null,null)}function h(l){return e.Fb(0,[(l()(),e.ob(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["ITEMS"]))],null,null)}function f(l){return e.Fb(0,[(l()(),e.ob(0,0,null,null,12,"div",[["class","place-order-btn ion-padding-horizontal"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,11,"ion-button",[["color","success"],["expand","block"],["mode","md"],["style","text-transform: capitalize;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.reviewOrder()&&e),e}),u.H,u.e)),e.nb(2,49152,null,0,r.k,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],mode:[2,"mode"]},null),(l()(),e.ob(3,0,null,0,1,"ion-icon",[["name","caret-forward-outline"],["size","small"],["slot","end"]],null,null,null,u.N,u.k)),e.nb(4,49152,null,0,r.C,[e.h,e.k,e.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),e.ob(5,0,null,0,6,"small",[["style","margin-right: 50px; font-weight: 500;"]],null,null,null,null,null)),(l()(),e.Eb(6,null,[" "," "])),(l()(),e.ob(7,0,null,null,4,"span",[["style","margin-left: 3px;"]],null,null,null,null,null)),(l()(),e.db(16777216,null,null,1,null,g)),e.nb(9,16384,null,0,a.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null),(l()(),e.db(16777216,null,null,1,null,h)),e.nb(11,16384,null,0,a.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null),(l()(),e.Eb(-1,0,[" View Cart "]))],(function(l,n){var t=n.component;l(n,2,0,"success","block","md"),l(n,4,0,"caret-forward-outline","small"),l(n,9,0,1===t.itemQty),l(n,11,0,t.itemQty>1)}),(function(l,n){l(n,6,0,n.component.itemQty)}))}function y(l){return e.Fb(0,[(l()(),e.ob(0,0,null,null,7,"div",[["class","bottom-buttons"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,4,"ion-button",[["color","primary"],["fill","solid"],["shape","round"],["size","small"],["style","text-transform: capitalize; font-weight: 500; margin-bottom: 10px; margin-right: 16px;"]],null,null,null,u.H,u.e)),e.nb(2,49152,null,0,r.k,[e.h,e.k,e.x],{color:[0,"color"],fill:[1,"fill"],shape:[2,"shape"],size:[3,"size"]},null),(l()(),e.Eb(-1,0,[" MENU "])),(l()(),e.ob(4,0,null,0,1,"ion-icon",[["name","menu-outline"],["size","small"],["slot","icon-only"],["style","margin-right: 5px;"]],null,null,null,u.N,u.k)),e.nb(5,49152,null,0,r.C,[e.h,e.k,e.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),e.db(16777216,null,null,1,null,f)),e.nb(7,16384,null,0,a.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,2,0,"primary","solid","round","small"),l(n,5,0,"menu-outline","small"),l(n,7,0,0!==t.itemQty&&!1===t.isIos)}),null)}function x(l){return e.Fb(0,[(l()(),e.ob(0,0,null,null,4,"ion-button",[["color","medium"],["fill","outline"],["size","small"],["style","text-transform: capitalize; font-weight: 400;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.addItemInitial(l.parent.context.$implicit)&&e),e}),u.H,u.e)),e.nb(1,49152,null,0,r.k,[e.h,e.k,e.x],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),(l()(),e.Eb(-1,0,[" Add "])),(l()(),e.ob(3,0,null,0,1,"ion-icon",[["name","add-outline"],["size","small"],["slot","icon-only"],["style","margin-right: 5px;"]],null,null,null,u.N,u.k)),e.nb(4,49152,null,0,r.C,[e.h,e.k,e.x],{name:[0,"name"],size:[1,"size"]},null)],(function(l,n){l(n,1,0,"medium","outline","small"),l(n,4,0,"add-outline","small")}),null)}function I(l){return e.Fb(0,[(l()(),e.ob(0,0,null,null,5,"div",[["class","add-item-button"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,1,"ion-icon",[["class","add-item-button-left"],["name","remove-outline"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.decrementQty(l.parent.context.$implicit)&&e),e}),u.N,u.k)),e.nb(2,49152,null,0,r.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Eb(3,null,[" "," "])),(l()(),e.ob(4,0,null,null,1,"ion-icon",[["class","add-item-button-right"],["name","add-outline"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.incrementQty(l.parent.context.$implicit)&&e),e}),u.N,u.k)),e.nb(5,49152,null,0,r.C,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,2,0,"remove-outline"),l(n,5,0,"add-outline")}),(function(l,n){l(n,3,0,n.parent.context.$implicit.qty)}))}function C(l){return e.Fb(0,[(l()(),e.ob(0,0,null,null,21,"ion-list",[["lines","none"],["mode","md"],["style","background: transparent;"]],null,null,null,u.S,u.o)),e.nb(1,49152,null,0,r.O,[e.h,e.k,e.x],{lines:[0,"lines"],mode:[1,"mode"]},null),(l()(),e.ob(2,0,null,0,13,"ion-item",[["mode","md"],["style","background: transparent;"]],null,null,null,u.P,u.m)),e.nb(3,49152,null,0,r.H,[e.h,e.k,e.x],{mode:[0,"mode"]},null),(l()(),e.ob(4,0,null,0,11,"ion-label",[],null,null,null,u.Q,u.n)),e.nb(5,49152,null,0,r.N,[e.h,e.k,e.x],null,null),(l()(),e.ob(6,0,null,0,4,"div",[["class","details"]],null,null,null,null,null)),(l()(),e.ob(7,0,null,null,1,"h2",[["style","font-size: 13px; font-weight: 600; display: flex; align-items: center; white-space: pre-wrap;"]],null,null,null,null,null)),(l()(),e.Eb(8,null,[" "," "])),(l()(),e.ob(9,0,null,null,1,"h3",[["class","price"]],null,null,null,null,null)),(l()(),e.Eb(10,null,["\u20b9",".00"])),(l()(),e.ob(11,0,null,0,4,"div",[["class","add-action"]],null,null,null,null,null)),(l()(),e.db(16777216,null,null,1,null,x)),e.nb(13,16384,null,0,a.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null),(l()(),e.db(16777216,null,null,1,null,I)),e.nb(15,16384,null,0,a.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null),(l()(),e.ob(16,0,null,0,5,"div",[["class","details-text"]],null,null,null,null,null)),(l()(),e.ob(17,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Eb(18,null,["",""])),(l()(),e.ob(19,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ob(20,0,null,null,1,"span",[["style","font-size: 12px; color: #585858; font-weight: 500;"]],null,null,null,null,null)),(l()(),e.Eb(21,null,["",""]))],(function(l,n){l(n,1,0,"none","md"),l(n,3,0,"md"),l(n,13,0,0===n.context.$implicit.qty),l(n,15,0,0!==n.context.$implicit.qty)}),(function(l,n){l(n,8,0,n.context.$implicit.name),l(n,10,0,n.context.$implicit.price),l(n,18,0,n.context.$implicit.ingredients),l(n,21,0,n.context.$implicit.elements)}))}function k(l){return e.Fb(0,[(l()(),e.ob(0,0,null,null,7,"div",[["class","nourishment-el"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,3,"div",[["class","el-category"]],null,null,null,null,null)),(l()(),e.ob(2,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.ob(3,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Eb(4,null,["",""])),(l()(),e.ob(5,0,null,null,2,"div",[["class","toggleMenus"]],null,null,null,null,null)),(l()(),e.db(16777216,null,null,1,null,C)),e.nb(7,278528,null,0,a.h,[e.L,e.I,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,7,0,n.context.$implicit.items)}),(function(l,n){l(n,4,0,n.context.$implicit.categoryName)}))}function M(l){return e.Fb(0,[(l()(),e.ob(0,0,null,null,11,"div",[["class","nourishment-section"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,1,"span",[["class","header-txt"],["style","font-size: 16px; font-weight: 500;"]],null,null,null,null,null)),(l()(),e.Eb(2,null,["",""])),(l()(),e.ob(3,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ob(4,0,null,null,1,"span",[["style","font-size: 12px;"]],null,null,null,null,null)),(l()(),e.Eb(5,null,["",""])),(l()(),e.ob(6,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ob(7,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ob(8,0,null,null,0,"div",[["class","nourishment-divider"]],null,null,null,null,null)),(l()(),e.ob(9,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.db(16777216,null,null,1,null,k)),e.nb(11,278528,null,0,a.h,[e.L,e.I,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,11,0,n.context.$implicit.headEl)}),(function(l,n){l(n,2,0,n.context.$implicit.headName),l(n,5,0,n.context.$implicit.headDesc)}))}function O(l){return e.Fb(0,[(l()(),e.ob(0,0,null,null,10,"ion-toolbar",[],null,null,null,u.fb,u.C)),e.nb(1,49152,null,0,r.zb,[e.h,e.k,e.x],null,null),(l()(),e.ob(2,0,null,0,2,"ion-title",[],null,null,null,u.db,u.A)),e.nb(3,49152,null,0,r.xb,[e.h,e.k,e.x],null,null),(l()(),e.ob(4,0,null,0,0,"img",[["alt",""],["src","../../../../../assets/Logo_Grey.png"]],null,null,null,null,null)),(l()(),e.ob(5,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,u.I,u.f)),e.nb(6,49152,null,0,r.l,[e.h,e.k,e.x],null,null),(l()(),e.ob(7,0,null,0,3,"ion-button",[],null,null,null,u.H,u.e)),e.nb(8,49152,null,0,r.k,[e.h,e.k,e.x],null,null),(l()(),e.ob(9,0,null,0,1,"ion-icon",[["name","person-circle-outline"],["slot","icon-only"]],null,null,null,u.N,u.k)),e.nb(10,49152,null,0,r.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.ob(11,0,null,null,18,"ion-content",[],null,null,null,u.K,u.h)),e.nb(12,49152,null,0,r.u,[e.h,e.k,e.x],null,null),(l()(),e.db(16777216,null,0,1,null,d)),e.nb(14,16384,null,0,a.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null),(l()(),e.db(16777216,null,0,1,null,b)),e.nb(16,16384,null,0,a.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null),(l()(),e.db(16777216,null,0,1,null,p)),e.nb(18,16384,null,0,a.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null),(l()(),e.db(16777216,null,0,1,null,y)),e.nb(20,16384,null,0,a.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null),(l()(),e.ob(21,0,null,0,4,"ion-buttons",[],null,null,null,u.I,u.f)),e.nb(22,49152,null,0,r.l,[e.h,e.k,e.x],null,null),(l()(),e.ob(23,0,null,0,2,"ion-back-button",[["defaultHref","/hotel/tabs/hotel-home/nourishment"]],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==e.Ab(l,25).onClick(t)&&o),o}),u.F,u.c)),e.nb(24,49152,null,0,r.g,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.nb(25,16384,null,0,r.h,[[2,r.fb],r.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.db(16777216,null,0,1,null,M)),e.nb(27,278528,null,0,a.h,[e.L,e.I,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.ob(28,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.ob(29,0,null,0,0,"br",[],null,null,null,null,null))],(function(l,n){var t=n.component;l(n,10,0,"person-circle-outline"),l(n,14,0,!0===t.isIos),l(n,16,0,!0===t.isIos&&0!==t.itemQty),l(n,18,0,!1===t.isIos),l(n,20,0,!1===t.isIos),l(n,24,0,"/hotel/tabs/hotel-home/nourishment"),l(n,25,0,"/hotel/tabs/hotel-home/nourishment"),l(n,27,0,t.menuItems)}),null)}function S(l){return e.Fb(0,[(l()(),e.ob(0,0,null,null,1,"app-ird-menu",[],null,null,null,O,m)),e.nb(1,114688,null,0,c,[r.Db,r.Gb],null,null)],(function(l,n){l(n,1,0)}),null)}var w=e.kb("app-ird-menu",c,S,{},{},[]),P=t("s7LF"),v=t("iInd");class E{}t.d(n,"IrdMenuPageModuleNgFactory",(function(){return z}));var z=e.lb(o,[],(function(l){return e.xb([e.yb(512,e.j,e.W,[[8,[i.a,w]],[3,e.j],e.v]),e.yb(4608,a.k,a.j,[e.s,[2,a.q]]),e.yb(4608,P.j,P.j,[]),e.yb(4608,r.b,r.b,[e.x,e.g]),e.yb(4608,r.Db,r.Db,[r.b,e.j,e.p]),e.yb(4608,r.Hb,r.Hb,[r.b,e.j,e.p]),e.yb(1073742336,a.b,a.b,[]),e.yb(1073742336,P.i,P.i,[]),e.yb(1073742336,P.a,P.a,[]),e.yb(1073742336,r.Bb,r.Bb,[]),e.yb(1073742336,v.n,v.n,[[2,v.s],[2,v.m]]),e.yb(1073742336,E,E,[]),e.yb(1073742336,o,o,[]),e.yb(1024,v.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);