import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MenuListComponent } from '../menu-list/menu-list.component';
import { RestaurentGuidelinesComponent } from './restaurent-guidelines/restaurent-guidelines.component';
import { RestaurentReviewOrderComponent } from './restaurent-review-order/restaurent-review-order.component';
import { RestaurentAddonComponent } from './restaurent-addon/restaurent-addon.component';
import { RestaurentMenuFilterComponent } from '../restaurent-menu-filter/restaurent-menu-filter.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, MenuListComponent, RestaurentGuidelinesComponent, RestaurentReviewOrderComponent, RestaurentAddonComponent, RestaurentMenuFilterComponent],
  entryComponents: [MenuListComponent, RestaurentGuidelinesComponent, RestaurentReviewOrderComponent, RestaurentAddonComponent, RestaurentMenuFilterComponent]
})
export class HomePageModule {}
