function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{"6mRH":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var s=n("IheW"),o=n("8Y7J"),r=function(){var e=function(){function e(t){_classCallCheck(this,e),this.http=t,this.url="https://vserve-api.valet2you.in/api/v1/ird/guest/",this.minibarUrl="https://vserve-api.valet2you.in/api/v1/ird/mini-bar/guest/",this.laundryUrl="https://vserve-api.valet2you.in/api/v1/wash/laundry/guest/",this.spaUrl="https://vserve-api.valet2you.in/api/v1/sanitarium/spa/guest/",this.requestServiceUrl="https://vserve-api.valet2you.in/api/v1/connect/guest/"}return _createClass(e,[{key:"getMenus",value:function(e){var t=new s.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.url+"menu/"+e,{observe:"response",responseType:"json",headers:t})}},{key:"getMinibarMenus",value:function(e){var t=new s.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.minibarUrl+"menu/"+e,{observe:"response",responseType:"json",headers:t})}},{key:"getLaundryMenus",value:function(e){var t=new s.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.laundryUrl+"menu/"+e,{observe:"response",responseType:"json",headers:t})}},{key:"getSpaMenus",value:function(e){var t=new s.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.spaUrl+"menu/"+e,{observe:"response",responseType:"json",headers:t})}},{key:"getRequestServicesMenus",value:function(e){var t=new s.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.requestServiceUrl+"menu/"+e,{observe:"response",responseType:"json",headers:t})}},{key:"placeOrder",value:function(e){var t=new s.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.post(this.url+"order/",e,{observe:"response",responseType:"json",headers:t})}},{key:"placeSpaOrder",value:function(e){var t=new s.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.post(this.spaUrl+"order/",e,{observe:"response",responseType:"json",headers:t})}}]),e}();return e.ngInjectableDef=o.Lb({factory:function(){return new e(o.Mb(s.c))},token:e,providedIn:"root"}),e}()},sk6g:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n("6mRH");var s=n("EVdn"),o=function(){function e(t,n,s,o){_classCallCheck(this,e),this.modalCtrl=t,this.router=n,this.toastCtrl=s,this.hotelApi=o,this.guestQty=0}return _createClass(e,[{key:"ngOnInit",value:function(){console.log(this.spaItem)}},{key:"dismissCart",value:function(){this.modalCtrl.dismiss()}},{key:"incrementQty",value:function(){this.guestQty+=1}},{key:"decrementQty",value:function(){this.guestQty-1<1?this.guestQty=0:this.guestQty-=1}},{key:"getTimestamp",value:function(){var e=new Date(this.date).getFullYear()+"-0"+new Date(this.date).getMonth()+"-"+new Date(this.date).getDate()+" "+new Date(this.time).toLocaleTimeString();return console.log(e),e}},{key:"placedOrder",value:function(){var e=this;if(void 0===this.room||""===this.room||null===this.room)return this.toastCtrl.create({message:"Please enter room number.",keyboardClose:!0,position:"top",color:"warning",duration:1500}).then((function(e){e.present()})),!1;if(void 0===this.date)return this.toastCtrl.create({message:"Please select date",keyboardClose:!0,position:"top",color:"warning",duration:1500}).then((function(e){e.present()})),!1;if(0===this.guestQty)return this.toastCtrl.create({message:"Please select number of guest.",keyboardClose:!0,position:"top",color:"warning",duration:1500}).then((function(e){e.present()})),!1;if(void 0===this.time)return this.toastCtrl.create({message:"Please select time",keyboardClose:!0,position:"top",color:"warning",duration:1500}).then((function(e){e.present()})),!1;var t=[];t.push({spa_item_id:this.spaItem.id,description:this.spaItem.description});var n={enc_hotel_id:"NnhkTElyTEc1c1d1ZUtpZmJPQ1JJVklzMW8xTTU3bzdJUFJ4NzBUdVdqVT0=",no_of_guest:this.guestQty,room_no:this.room,request_schedule_at:this.getTimestamp(),items:JSON.stringify(t),description:null};console.log(n),s.post("https://vserve-api.valet2you.in/api/v1/sanitarium/spa/guest/order",n).done((function(t){console.log(t),"Success"===t.message&&(e.dismissCart(),e.toastCtrl.create({header:"Thank you!",message:"Your request has been placed with Quan Spa. Our Spa manager will call you in 2 minutes.",keyboardClose:!0,position:"bottom",color:"success",buttons:[{side:"end",text:"OKAY",handler:function(){e.router.navigateByUrl("/hotel/tabs/hotel-home")}}]}).then((function(e){e.present()})))})).fail((function(t,n,s){return console.log(t,n,s),200!==t.status&&"Room is not available"!==t.responseJSON.message?(e.dismissCart(),e.toastCtrl.create({message:"Something went wrong! Please try after some time.",keyboardClose:!0,duration:3e3,color:"danger",position:"top"}).then((function(e){e.present()})),!1):200!==t.status&&"Room is not available"===t.responseJSON.message?(e.toastCtrl.create({message:t.responseJSON.message+" Please enter correct room number.",keyboardClose:!0,duration:3e3,color:"warning",position:"top"}).then((function(e){e.present()})),!1):void 0})),console.log(n)}}]),e}()}}]);