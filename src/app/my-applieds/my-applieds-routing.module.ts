import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAppliedsPage } from './my-applieds.page';

const routes: Routes = [
  {
    path: '',
    component: MyAppliedsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAppliedsPageRoutingModule {}
