import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdersItemService } from '../orders-item.service';
import { Platform, ToastController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-restaurent-confirmation',
  templateUrl: './restaurent-confirmation.page.html',
  styleUrls: ['./restaurent-confirmation.page.scss'],
})
export class RestaurentConfirmationPage implements OnInit {
  placedOrder: any = [];
  subscription: Subscription;

  constructor(
    private router: Router,
    private orderItemsService: OrdersItemService,
    private platform: Platform,
    private route: ActivatedRoute,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.placedOrder = this.orderItemsService.placedOrder;
    console.log(this.placedOrder);
  }

  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
      console.log('exit');
      this.router.navigateByUrl('/home');
      document.location.reload();
    });
  }

  ionViewWillLeave() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  reorder() {
    this.router.navigateByUrl('/home');
  }

  settleBillLater() {
    this.router.navigateByUrl('/home');
    // this.modalCtrl.create({
    //   component: SettleBillCovidComponent
    // }).then(modalEl => {
    //   modalEl.present();
    // });
    // this.toastCtrl
    //   .create({
    //     // tslint:disable-next-line: max-line-length
    //     message: 'This is your consent to post the charges on your room, the same will be settled during your check-out.',
    //     position: 'middle',
    //     color: 'warning',
    //     keyboardClose: true,
    //     buttons: [
    //       {
    //         side: 'end',
    //         text: 'OKAY',
    //         role: 'cancel',
    //         handler: () => {
    //           this.router.navigateByUrl('/home');
    //         }
    //       }
    //     ]
    //   })
    //   .then((toastEl) => {
    //     toastEl.present();
    //   });
  }

}
