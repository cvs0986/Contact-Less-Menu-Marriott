(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{"6mRH":function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var o=s("IheW"),n=s("8Y7J");let r=(()=>{class e{constructor(e){this.http=e,this.url="https://vserve-api.valet2you.in/api/v1/ird/guest/",this.minibarUrl="https://vserve-api.valet2you.in/api/v1/ird/mini-bar/guest/",this.laundryUrl="https://vserve-api.valet2you.in/api/v1/wash/laundry/guest/",this.spaUrl="https://vserve-api.valet2you.in/api/v1/sanitarium/spa/guest/",this.requestServiceUrl="https://vserve-api.valet2you.in/api/v1/connect/guest/"}getMenus(e){const t=new o.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.url+"menu/"+e,{observe:"response",responseType:"json",headers:t})}getMinibarMenus(e){const t=new o.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.minibarUrl+"menu/"+e,{observe:"response",responseType:"json",headers:t})}getLaundryMenus(e){const t=new o.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.laundryUrl+"menu/"+e,{observe:"response",responseType:"json",headers:t})}getSpaMenus(e){const t=new o.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.spaUrl+"menu/"+e,{observe:"response",responseType:"json",headers:t})}getRequestServicesMenus(e){const t=new o.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.requestServiceUrl+"menu/"+e,{observe:"response",responseType:"json",headers:t})}placeOrder(e){const t=new o.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.post(this.url+"order/",e,{observe:"response",responseType:"json",headers:t})}placeSpaOrder(e){const t=new o.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.post(this.spaUrl+"order/",e,{observe:"response",responseType:"json",headers:t})}}return e.ngInjectableDef=n.Lb({factory:function(){return new e(n.Mb(o.c))},token:e,providedIn:"root"}),e})()},sk6g:function(e,t,s){"use strict";s.d(t,"a",(function(){return n})),s("6mRH");var o=s("EVdn");class n{constructor(e,t,s,o){this.modalCtrl=e,this.router=t,this.toastCtrl=s,this.hotelApi=o,this.guestQty=0}ngOnInit(){console.log(this.spaItem)}dismissCart(){this.modalCtrl.dismiss()}incrementQty(){this.guestQty+=1}decrementQty(){this.guestQty-1<1?this.guestQty=0:this.guestQty-=1}getTimestamp(){const e=new Date(this.date).getFullYear()+"-0"+new Date(this.date).getMonth()+"-"+new Date(this.date).getDate()+" "+new Date(this.time).toLocaleTimeString();return console.log(e),e}placedOrder(){if(void 0===this.room||""===this.room||null===this.room)return this.toastCtrl.create({message:"Please enter room number.",keyboardClose:!0,position:"top",color:"warning",duration:1500}).then(e=>{e.present()}),!1;if(void 0===this.date)return this.toastCtrl.create({message:"Please select date",keyboardClose:!0,position:"top",color:"warning",duration:1500}).then(e=>{e.present()}),!1;if(0===this.guestQty)return this.toastCtrl.create({message:"Please select number of guest.",keyboardClose:!0,position:"top",color:"warning",duration:1500}).then(e=>{e.present()}),!1;if(void 0===this.time)return this.toastCtrl.create({message:"Please select time",keyboardClose:!0,position:"top",color:"warning",duration:1500}).then(e=>{e.present()}),!1;const e=[];e.push({spa_item_id:this.spaItem.id,description:this.spaItem.description});const t={enc_hotel_id:"NnhkTElyTEc1c1d1ZUtpZmJPQ1JJVklzMW8xTTU3bzdJUFJ4NzBUdVdqVT0=",no_of_guest:this.guestQty,room_no:this.room,request_schedule_at:this.getTimestamp(),items:JSON.stringify(e),description:null};console.log(t),o.post("https://vserve-api.valet2you.in/api/v1/sanitarium/spa/guest/order",t).done(e=>{console.log(e),"Success"===e.message&&(this.dismissCart(),this.toastCtrl.create({header:"Thank you!",message:"Your request has been placed with Quan Spa. Our Spa manager will call you in 2 minutes.",keyboardClose:!0,position:"bottom",color:"success",buttons:[{side:"end",text:"OKAY",handler:()=>{this.router.navigateByUrl("/hotel/tabs/hotel-home")}}]}).then(e=>{e.present()}))}).fail((e,t,s)=>(console.log(e,t,s),200!==e.status&&"Room is not available"!==e.responseJSON.message?(this.dismissCart(),this.toastCtrl.create({message:"Something went wrong! Please try after some time.",keyboardClose:!0,duration:3e3,color:"danger",position:"top"}).then(e=>{e.present()}),!1):200!==e.status&&"Room is not available"===e.responseJSON.message?(this.toastCtrl.create({message:e.responseJSON.message+" Please enter correct room number.",keyboardClose:!0,duration:3e3,color:"warning",position:"top"}).then(e=>{e.present()}),!1):void 0)),console.log(t)}}}}]);