import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-ird-menu-filter',
  templateUrl: './ird-menu-filter.component.html',
  styleUrls: ['./ird-menu-filter.component.scss'],
})
export class IrdMenuFilterComponent implements OnInit {
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
