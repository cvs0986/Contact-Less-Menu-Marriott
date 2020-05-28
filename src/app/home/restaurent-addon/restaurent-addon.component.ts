import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-restaurent-addon',
  templateUrl: './restaurent-addon.component.html',
  styleUrls: ['./restaurent-addon.component.scss'],
})
export class RestaurentAddonComponent implements OnInit {
  @Input() itemAddon;
  @Input() itemQty;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.itemAddon);
  }

  selectedAddon(e) {
    console.log(e);
    this.itemAddon.selectedAddons = [];
    this.itemAddon.addons.filter(item => {
      if (item.item_id == e.detail.value) {
        const addonData = {
          addon_id: item.item_id,
          count: 1,
          name: item.name
        };
        this.itemAddon.selectedAddons.push(addonData);
      }
    });
    console.log(this.itemAddon);
  }

  selectedAddonFocus(e) {
    console.log(e);
    const addonData = {
      addon_id: e.item_id,
      count: e.count
    };
    this.itemAddon.selectedAddons.push(addonData);
  }

  selectedAddonBlur(e) {
    console.log(e);
    const addonData = {
      addon_id: e.item_id,
      count: e.count
    };
    this.itemAddon.selectedAddons.splice(this.itemAddon.selectedAddons.indexOf(addonData), 1);
  }

  addAddOns() {
    console.log(this.itemAddon);
    this.modalCtrl.dismiss({
      dismissed: 'close-btn',
      item: this.itemAddon,
      itemQty: this.itemQty
    });
  }

  dismissAddon() {
    this.modalCtrl.dismiss();
  }

}
