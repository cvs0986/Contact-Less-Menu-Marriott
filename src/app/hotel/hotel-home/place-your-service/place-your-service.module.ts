import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceYourServicePageRoutingModule } from './place-your-service-routing.module';

import { PlaceYourServicePage } from './place-your-service.page';
import { PlaceYourRequestReviewComponent } from './place-your-request-review/place-your-request-review.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceYourServicePageRoutingModule
  ],
  declarations: [PlaceYourServicePage, PlaceYourRequestReviewComponent],
  entryComponents: [PlaceYourRequestReviewComponent]
})
export class PlaceYourServicePageModule {}
