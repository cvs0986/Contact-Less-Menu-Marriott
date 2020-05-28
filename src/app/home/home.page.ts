import { Component, ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll, PopoverController, IonContent, ModalController } from '@ionic/angular';
import { MenuListComponent } from '../menu-list/menu-list.component';
import { Router } from '@angular/router';
import { OrdersItemService } from '../orders-item.service';
import { ApiService } from '../api.service';
import { RestaurentGuidelinesComponent } from './restaurent-guidelines/restaurent-guidelines.component';
import { RestaurentReviewOrderComponent } from './restaurent-review-order/restaurent-review-order.component';
import { RestaurentAddonComponent } from './restaurent-addon/restaurent-addon.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

// @ViewChild('IonInfiniteScroll', { static: true })
  // infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonContent, {static: true}) content: IonContent;
  hotelID;
  itemQty = 0;

  hotelDetails;
  hotelName;
  currency;

  showMenus = false;

  showSkelton = true;
  showToggle = false;

  menuItems: any[];
  menuCategories: any[];

  constructor(
    private popOverCtrl: PopoverController,
    private router: Router,
    private orderItemsService: OrdersItemService,
    private api: ApiService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit(): void {
    // const hotelId = this.orderItemsService.hotelId;
    // console.log(this.orderItemsService.hotelId, hotelId);

    this.hotelID = localStorage.getItem('hi');

    const hotelInfo = localStorage.getItem('hotelInfo');
    const parsedHotel = JSON.parse(hotelInfo);
    this.hotelDetails = parsedHotel.details;
    this.hotelName = parsedHotel.hotel_name;
    this.currency = parsedHotel.currency;
    console.log(parsedHotel, this.hotelDetails);

    this.api.getCategory(this.hotelID).subscribe(
      (resp) => {
        this.menuCategories = resp.body.data;
      },
      (error) => {
        console.log(error);
      }
    );

    this.api.getMenus(this.hotelID).subscribe(
      (resp) => {
        console.log(resp);
        if (resp.body.success == 1) {
          this.menuItems = resp.body.data;
          this.menuItems.filter((category) => {
            category.sub_category.filter((sub) => {
              let addOns: any;
              addOns = sub.items.map((item) => {
                let o = Object.assign({}, item);
                o.selectedAddons = [];
                return o;
              });
              sub.items = addOns;
            });
          });
          this.showSkelton = false;
          this.showToggle = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // ionViewDidLeave() {
  //   this.itemQty = 0;
  //   this.api.getMenus(this.hotelID).subscribe(
  //     (resp) => {
  //       console.log(resp, 'didLoad');
  //       this.menuItems = resp.body.data;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  viewRestaurentGuidelines() {
    this.modalCtrl.create({
      component: RestaurentGuidelinesComponent,
      cssClass: 'restaurent-tnc'
    }).then(modalEl => {
      modalEl.present();
    });
  }

  parsedJson(tag) {
    return JSON.parse(tag);
  }

  getVegItems(e) {
    if (e.detail.checked === true) {
      this.showSkelton = true;
      this.api.getMenusByType(this.hotelID, 'veg').subscribe(
        (resp) => {
          console.log(resp);
          this.menuItems = resp.body.data;
          this.showSkelton = false;
          this.itemQty = 0;
        },
        (error) => {
          console.log(error);
          this.showSkelton = false;
        }
      );
      return false;
    }
    if (e.detail.checked === false) {
      this.showSkelton = true;
      this.api.getMenus(this.hotelID).subscribe(
        (resp) => {
          this.menuItems = resp.body.data;
          this.showSkelton = false;
          this.itemQty = 0;
        },
        (error) => {
          console.log(error);
          this.showSkelton = false;
        }
      );
    }
  }

  showMenusCategory(ev) {
    this.popOverCtrl
      .create({
        component: MenuListComponent,
        componentProps: {
          menuCategories: this.menuCategories,
        },
        event: ev,
        translucent: true,
        mode: 'ios',
      })
      .then((popoverEl) => {
        popoverEl.present();
        popoverEl.onDidDismiss().then((dismissEl) => {
          const data = dismissEl.data;
          if (dismissEl.data.role === 'closed') {
            const titleELe = document.getElementById(data.data.menu_category_id);
            this.content.scrollToPoint(0, titleELe.offsetTop, 1000);
            console.log(data.data.menu_category_id, titleELe);
          }
          console.log(dismissEl.data);
        });
      });
  }

  toggleMenus(i) {
    console.log(i);
    this.showMenus = !this.showMenus;
  }

  addItemInitial(menuItem) {
    if (menuItem.addons.length !== 0) {
      menuItem.count += 1;
      this.modalCtrl.create({
        component: RestaurentAddonComponent,
        cssClass: 'restautent-addons',
        backdropDismiss: false,
        componentProps: {
          itemAddon: menuItem,
          itemQty: this.itemQty
        }
      }).then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then(dismissEl => {
          if (dismissEl.data === undefined) {
            menuItem.count = 0;
            return false;
          }
          if (dismissEl.data.dismissed === 'close-btn') {
            this.itemQty += 1;
          }
          console.log(menuItem);
        });
      });
      return false;
    }
    menuItem.count += 1;
    this.itemQty += 1;
    console.log(menuItem.count + 1, menuItem, this.itemQty, this.menuItems);
  }

  incrementQty(menuItem) {
    if (menuItem.addons.length !== 0) {
      menuItem.count += 1;
      this.modalCtrl.create({
        component: RestaurentAddonComponent,
        cssClass: 'restautent-addons',
        backdropDismiss: false,
        componentProps: {
          itemAddon: menuItem,
          itemQty: this.itemQty
        }
      }).then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then(dismissEl => {
          if (dismissEl.data === undefined) {
            menuItem.count = 0;
            return false;
          }
          if (dismissEl.data.dismissed === 'close-btn') {
            this.itemQty += 1;
          }
          console.log(menuItem);
        });
      });
      return false;
    }
    menuItem.count += 1;
    this.itemQty += 1;
    console.log(menuItem.count + 1, menuItem, this.itemQty);
  }

  // decrements item

  decrementQty(item) {
    if (item.count - 1 < 1) {
      item.count = 0;
      this.itemQty -= 1;
      console.log(item.count, item, this.itemQty);
    } else {
      item.count -= 1;
      this.itemQty -= 1;
      console.log(item.count, item, this.itemQty);
    }
  }

  reviewOrder() {
    this.orderItemsService.ordersItems = [];
    const orderedItems = [];
    this.menuItems.filter((category) => {
      category.sub_category.filter((sub) => {
        sub.items.filter(item => {
          if (item.count !== 0) {
            orderedItems.push(item);
          }
        });
      });
    });
    console.log(this.orderItemsService.ordersItems);
    this.modalCtrl.create({
      component: RestaurentReviewOrderComponent,
      componentProps: {
        orderedItems,
        itemQty: this.itemQty
      }
    }).then(modalEl => {
      modalEl.present();
      modalEl.onDidDismiss().then(dismissEl => {
        if (dismissEl.data.dismissed === 'closed') {
            this.itemQty = dismissEl.data.totalQty;
          }
      });
    });
  }
}
