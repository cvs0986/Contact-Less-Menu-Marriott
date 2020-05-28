import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { AlertController, ToastController, ModalController } from '@ionic/angular';
import { OrdersItemService } from 'src/app/orders-item.service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-restaurent-review-order',
  templateUrl: './restaurent-review-order.component.html',
  styleUrls: ['./restaurent-review-order.component.scss'],
})
export class RestaurentReviewOrderComponent implements OnInit {
  @Input() itemQty;
  @Input() orderedItems;

  guestQty = 0;
  roomNumber;
  hotelId;
  progressLoading = false;
  totalAmount;
  tableNo;

  cookingIns: string;
  copiedOrder: any[];

  placeResponse: any;

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private orderItemsService: OrdersItemService,
    private toastCtrl: ToastController,
    private api: ApiService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.orderedItems);
    this.tableNo = localStorage.getItem('table');
    this.calculateTotalPrice();
  }

  calculateItemPrice(count, price) {
    const tax = 18 / 100;
    const taxedPrice = (price * tax);
    taxedPrice.toFixed(2);
    const finalAmount = count * ((+taxedPrice) + (+price));
    return finalAmount;
  }

  calculateTotalPrice() {
    let sum = null;
    this.orderedItems.forEach((element) => {
      const tax = 18 / 100;
      const taxedPrice = element.price * tax;
      console.log(taxedPrice);
      sum += element.count * ((+element.price) + taxedPrice);
    });
    this.totalAmount = sum;
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
    this.calculateTotalPrice();
  }

  // decrements item

  decrementQty(item) {
    if (item.count - 1 < 1) {
      item.count = 0;
      this.itemQty -= 1;
      console.log(item.count, item, this.itemQty);
      this.calculateTotalPrice();
    } else {
      item.count -= 1;
      this.itemQty -= 1;
      console.log(item.count, item, this.itemQty);
      this.calculateTotalPrice();
    }
  }

  incrementGuest() {
    this.guestQty += 1;
    console.log(this.guestQty);
  }

  // decrements item

  decrementGuest() {
    if (this.guestQty - 1 < 1) {
      this.guestQty = 0;
      console.log(this.guestQty);
    } else {
      this.guestQty -= 1;
      console.log(this.guestQty);
    }
  }

  dismissCart() {
    this.modalCtrl.dismiss({
      dismissed: 'closed',
      totalQty: this.itemQty
    });
  }

  placeOrder() {
    const orderedItems = [];
    this.orderedItems.filter(item => {
      if (item.count !== 0 && item.addons.length !== 0) {
        const itemData = {
          item_id: item.item_id,
          count: item.count,
          addons: item.selectedAddons,
        };
        orderedItems.push(itemData);
      }
      if (item.count !== 0 && item.addons.length === 0) {
        const itemData = {
          item_id: item.item_id,
          count: item.count
        };
        orderedItems.push(itemData);
      }
    });

    if (this.guestQty === 0) {
      this.toastCtrl.create({
        message: 'Please select number of guests!',
        keyboardClose: true,
        duration: 3000,
        color: 'warning',
        position: 'top'
      }).then(toastEl => {
        toastEl.present();
      });
      return false;
    }

    if (orderedItems.length === 0) {
      this.toastCtrl.create({
        message: 'Did not find any items, please close this window and add items from menu!',
        keyboardClose: true,
        duration: 5000,
        color: 'danger',
        position: 'top'
      }).then(toastEl => {
        toastEl.present();
      });
      return false;
    }

    const data = {
      no_guest: this.guestQty,
      details: this.cookingIns,
      items: JSON.stringify(orderedItems),
      room_no: localStorage.getItem('table')
    };
    console.log(data);
    this.progressLoading = true;

    $.post(
      'https://ird-api.valet2you.in/v10.0.6/guest/order/' +
        localStorage.getItem('hi'),
      data,
      (resp) => {
        this.placeResponse = JSON.parse(resp);
        if (this.placeResponse.success === '1') {
          console.log(this.placeResponse, 'response');
          this.progressLoading = false;
          this.modalCtrl.dismiss();
          this.router.navigateByUrl('/restaurent-confirmation');
          return false;
        }

        if (this.placeResponse.success == 0 && this.placeResponse.message === 'room_no is not Found!') {
          this.progressLoading = false;
          this.toastCtrl.create({
            message: 'Please enter valid room number!',
            duration: 3000,
            position: 'top',
            keyboardClose: true,
            color: 'warning'
          }).then(toastEl => {
            toastEl.present();
          });
          return false;
        }
      }
    );
  }

}