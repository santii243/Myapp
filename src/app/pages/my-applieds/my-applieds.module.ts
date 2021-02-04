import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAppliedsPageRoutingModule } from './my-applieds-routing.module';

import { MyAppliedsPage } from './my-applieds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAppliedsPageRoutingModule
  ],
  declarations: [MyAppliedsPage]
})
export class MyAppliedsPageModule {}
