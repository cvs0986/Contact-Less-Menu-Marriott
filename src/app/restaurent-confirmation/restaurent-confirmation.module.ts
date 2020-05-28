import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurentConfirmationPageRoutingModule } from './restaurent-confirmation-routing.module';

import { RestaurentConfirmationPage } from './restaurent-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurentConfirmationPageRoutingModule
  ],
  declarations: [RestaurentConfirmationPage]
})
export class RestaurentConfirmationPageModule {}
