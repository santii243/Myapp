import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserTabsPageRoutingModule } from './user-tabs-routing.module';

import { UserTabsPage } from './user-tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    UserTabsPageRoutingModule,
  ],
  declarations: [UserTabsPage]
})
export class UserTabsPageModule {}