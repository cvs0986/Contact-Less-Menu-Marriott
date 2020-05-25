import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { BookLaundryComponent } from './book-laundry/book-laundry.component';
import { HotelApiService } from '../../hotel-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laundry-service',
  templateUrl: './laundry-service.page.html',
  styleUrls: ['./laundry-service.page.scss'],
})
export class LaundryServicePage implements OnInit {
  itemQty = 0;
  isIos: boolean;
  laundryItemsApi: any = [];

  constructor(
    private modalCtrl: ModalController,
    private hotelApi: HotelApiService,
    private router: Router,
    private platform: Platform,
  ) { }

  ngOnInit() {
    this.isIos = this.platform.is('ios');
    console.log(this.isIos);
    this.hotelApi.getLaundryMenus('NnhkTElyTEc1c1d1ZUtpZmJPQ1JJVklzMW8xTTU3bzdJUFJ4NzBUdVdqVT0=').subscribe(
      (resp) => {
        console.log(resp);
        this.laundryItemsApi = resp.body.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  bookLaundry() {
    this.modalCtrl.create({
      component: BookLaundryComponent,
    }).then(modalEl => {
      modalEl.present();
    });
  }

  addItemInitial(menuItem) {
    menuItem.count += 1;
    this.itemQty += 1;
    console.log(menuItem.count + 1, menuItem, this.itemQty);
  }

  incrementQty(item) {
    item.count += 1;
    this.itemQty += 1;
    console.log(item.count + 1, item, this.itemQty);
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
    localStorage.removeItem('cart-items');
    const cartItems = [];
    this.laundryItemsApi.categories.filter((item) => {
      item.without_sub_category_items.filter((menu) => {
        if (menu.count !== 0) {
          cartItems.push(menu);
        }
      });
    });
    console.log(cartItems);
    localStorage.setItem('cart-items', JSON.stringify(cartItems));

    this.modalCtrl
    .create({
      component: BookLaundryComponent,
      componentProps: {
        cartItems: cartItems,
        itemQty: this.itemQty
      },
    })
    .then((modalEl) => {
      modalEl.present();
      modalEl.onDidDismiss().then(dismissEl => {
        if (dismissEl.data.dismissed === 'closed') {
          this.itemQty = dismissEl.data.totalQty;
        }
      });
    });
  }

}
