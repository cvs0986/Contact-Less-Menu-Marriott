import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceYourServicePage } from './place-your-service.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceYourServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceYourServicePageRoutingModule {}
