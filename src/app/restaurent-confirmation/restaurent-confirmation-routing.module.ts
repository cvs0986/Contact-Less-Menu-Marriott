import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurentConfirmationPage } from './restaurent-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurentConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurentConfirmationPageRoutingModule {}
