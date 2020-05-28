import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-restaurent-guidelines',
  templateUrl: './restaurent-guidelines.component.html',
  styleUrls: ['./restaurent-guidelines.component.scss'],
})
export class RestaurentGuidelinesComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  dismissCart() {
    this.modalCtrl.dismiss();
  }

}
