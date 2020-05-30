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
  checkedRadio;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.itemAddon);
  }

  selectedRadioAddon(e, sub) {
    console.log(e, sub);
    this.itemAddon.selectedAddons.filter((item) => {
      if (item.menu_item_subaddon_id == sub.id) {
        this.itemAddon.selectedAddons.splice(this.itemAddon.selectedAddons.indexOf(item), 1);
      }
    });
    sub.addons.filter(item => {
      if (item.id == e.detail.value) {
        const addonData = {
          menu_item_addon_id: item.id,
          quantity: 1,
          name: item.name,
          menu_item_subaddon_id: item.menu_item_subaddon_id,
        };
        this.itemAddon.selectedAddons.push(addonData);
      }
    });
  }

  selectedCheckBoxAddon(item, ind) {
    console.log(item, ind);
    const addonData = {
      menu_item_addon_id: item.id,
      quantity: 1,
      name: item.name,
      menu_item_subaddon_id: item.menu_item_subaddon_id,
    };

    if (item.isChecked === true) {
      this.itemAddon.selectedAddons.push(addonData);
      console.log(this.itemAddon);
    } else if (item.isChecked === false) {
      this.itemAddon.selectedAddons.splice(this.itemAddon.selectedAddons.indexOf(addonData), 1);
      console.log(this.itemAddon);
    }
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
