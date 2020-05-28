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


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, MenuListComponent, RestaurentGuidelinesComponent, RestaurentReviewOrderComponent, RestaurentAddonComponent],
  entryComponents: [MenuListComponent, RestaurentGuidelinesComponent, RestaurentReviewOrderComponent, RestaurentAddonComponent]
})
export class HomePageModule {}
