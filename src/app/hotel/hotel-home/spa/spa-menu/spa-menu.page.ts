import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SpaCartComponent } from '../spa-cart/spa-cart.component';

@Component({
  selector: 'app-spa-menu',
  templateUrl: './spa-menu.page.html',
  styleUrls: ['./spa-menu.page.scss'],
})
export class SpaMenuPage implements OnInit {
  spaMenu: any[] = [
    {
      category: 'QUAN SIGNATURE THERAPIES',
      items: [
        {
          name: 'Ultimate Aromatherapy Experience Message',
          time: '60 Minutes',
          price: '5600',
          details: 'This treatment releases tension held in every part of the body that makes you deeply relaxed and recharged. Car Willy applied pressure stimulates the nervous system by Swedish and neuromuscular techniques that relieve muscular tension. lymphatic drainage encourages healthy circulation and the stress and strain are dissolved.'
        },
        {
          name: 'Ultimate Aromatherapy Experience Facial',
          time: '60 Minutes',
          price: '7000',
          details: ''
        },
        {
          name: 'Intensive Deep Tissue ',
          time: '90 Minutes',
          price: '7200',
          details: 'An intensive massage that works deep into stiff tight and aching muscles to instantly release pain and tension.'
        },
        {
          name: 'Traditional Thai Massage ',
          time: '90 Minutes',
          price: '7000',
          details: ''
        },
        {
          name: 'Abhyanga Spice Bundle ',
          time: '90 Minutes',
          price: '8300',
          details: 'A special type ofAyurvedic Marma massage using relaxing herbal oils which help to stimulate the Marma points of the body with Spice Bundle treatment for the stress points of the body to relieve stiffness and pain. The treatment is very effective in combating stress and relaxing the body followed by a steam bath.'
        },
        {
          name: 'Back, Neck & Shoulder',
          time: '45 Minutes',
          price: '3750',
        },
        {
          name: 'Hot Stones  ',
          time: '60 Minutes',
          price: '7000',
        },
      ],
    },
    {
      category: 'QUAN HEALING TOUCH',
      items: [
        {
          name: 'Jet Lag Cure ',
          time: '90 Minutes',
          price: '6700',
        },
        {
          name: 'Heavy Leg Reviver ',
          time: '45 Minutes',
          price: '3750',
        },
      ],
    },
    {
      category: 'QUAN RITUALS',
      items: [
        {
          name: 'Sleep Deeply',
          time: '120 Minutes',
          price: '9500',
        },
        {
          name: 'Uplift Your Mood',
          time: '120 Minutes',
          price: '9500',
        },
        {
          name: 'De Stress',
          time: '150 Minutes',
          price: '11000',
        },
        {
          name: 'Essential Quan Spa Rituals',
          time: '150 Minutes',
          price: '11000',
        },
        {
          name: 'Couple Wedding Rituals ',
          time: '180 Minutes',
          price: '20000',
        }
      ],
    },
  ];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  bookSpa(item) {
    this.modalCtrl
      .create({
        component: SpaCartComponent,
        componentProps: {
          spaItem: item,
        },
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }
}
