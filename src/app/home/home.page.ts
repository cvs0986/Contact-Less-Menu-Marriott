import { Component, ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll, PopoverController, IonContent, ModalController } from '@ionic/angular';
import { MenuListComponent } from '../menu-list/menu-list.component';
import { Router } from '@angular/router';
import { OrdersItemService } from '../orders-item.service';
import { ApiService } from '../api.service';
import { RestaurentGuidelinesComponent } from './restaurent-guidelines/restaurent-guidelines.component';
import { RestaurentReviewOrderComponent } from './restaurent-review-order/restaurent-review-order.component';
import { RestaurentAddonComponent } from './restaurent-addon/restaurent-addon.component';
import { RestaurentMenuFilterComponent } from '../restaurent-menu-filter/restaurent-menu-filter.component';

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
  hotelAssets;
  currency;

  showMenus = false;

  showSkelton = true;
  showToggle = false;

  menuItems: any;
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
    this.hotelDetails = parsedHotel;
    this.hotelAssets = JSON.parse(parsedHotel.assets);
    console.log(this.hotelDetails, this.hotelAssets);

    this.api.getRestaurentMenus(this.hotelID).subscribe(
      (resp) => {
        console.log(resp);
        this.menuItems = resp.body.data;
        this.menuItems.categories.filter((category) => {
          category.sub_categories.filter((sub) => {
            let addOns: any;
            addOns = sub.items.map((item) => {
              let o = Object.assign({}, item);
              o.selectedAddons = [];
              o.count = 0;
              return o;
            });
            sub.items = addOns;
          });
          if (category.without_sub_category_items.length !== 0) {
            let addOns: any;
            addOns = category.without_sub_category_items.map((item) => {
              let o = Object.assign({}, item);
              o.selectedAddons = [];
              o.count = 0;
              return o;
            });
            category.without_sub_category_items = addOns;
            console.log(category.without_sub_category_items);
          }
        });
        this.showSkelton = false;
        this.showToggle = true;
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
      cssClass: 'restaurent-tnc',
      backdropDismiss: true,
      showBackdrop: true,
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
        component: RestaurentMenuFilterComponent,
        componentProps: {
          menuCategories: this.menuItems.categories,
        },
        event: ev,
        translucent: true,
        showBackdrop: true,
        cssClass: 'ird-menu-filter',
      })
      .then((popoverEl) => {
        popoverEl.present();
        popoverEl.onDidDismiss().then((dismissEl) => {
          const data = dismissEl.data;
          console.log(data);
          if (dismissEl.data.role === 'closed') {
            const titleELe = document.getElementById(data.data);
            this.content.scrollToPoint(0, titleELe.offsetTop, 1000);
            console.log(data, titleELe);
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
    if (menuItem.sub_addons.length !== 0) {
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
    if (menuItem.sub_addons.length !== 0) {
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
    this.menuItems.categories.filter((category) => {
      category.sub_categories.filter((sub) => {
        sub.items.filter((item) => {
          if (item.count !== 0) {
            orderedItems.push(item);
          }
        });
      });
      if (category.without_sub_category_items.length > 0) {
        category.without_sub_category_items.filter(item => {
           if (item.count !== 0) {
             orderedItems.push(item);
           }
        });
      }
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
