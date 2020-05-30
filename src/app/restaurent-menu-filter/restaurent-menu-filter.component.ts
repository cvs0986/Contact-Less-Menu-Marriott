import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-restaurent-menu-filter',
  templateUrl: './restaurent-menu-filter.component.html',
  styleUrls: ['./restaurent-menu-filter.component.scss'],
})
export class RestaurentMenuFilterComponent implements OnInit {
@Input() menuCategories: any[];
  subCategories: any[] = [];

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
    console.log(this.menuCategories);
    this.menuCategories.filter(item => {
      item.sub_categories.filter(sub => {
        this.subCategories.push(sub);
      });
    });
    console.log(this.subCategories);
  }

  dismissPopover(category) {
    this.popoverCtrl.dismiss({
      data: category,
      role: 'closed'
    });
  }
}
