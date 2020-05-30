import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-restaurent-guidelines',
  templateUrl: './restaurent-guidelines.component.html',
  styleUrls: ['./restaurent-guidelines.component.scss'],
})
export class RestaurentGuidelinesComponent implements OnInit {
  assets: any;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    const hotelInfo = localStorage.getItem('hotelInfo');
    const parsedHotel = JSON.parse(hotelInfo);
    this.assets = JSON.parse(parsedHotel.assets);

    console.log(this.assets);
  }

  dismissCart() {
    this.modalCtrl.dismiss();
  }

}
