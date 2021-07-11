import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FruitsPage } from './fruits.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FruitsPageRoutingModule } from './fruits-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    FruitsPageRoutingModule
  ],
  declarations: [FruitsPage]
})
export class FruitsPageModule {}
