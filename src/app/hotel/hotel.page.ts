import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.page.html',
  styleUrls: ['./hotel.page.scss'],
})
export class HotelPage implements OnInit {

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  openCart() {
    this.modalCtrl.create({
      component: CartComponent
    }).then(modalEl => {
      modalEl.present();
    });
  }

  callAYS() {
    this.alertCtrl.create({
      header: 'Call AYS',
      subHeader: 'At your service',
      message: '011 4521 2121',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'CALL',
          handler: () => {
            window.open('tel:01145212121', '_self');
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
