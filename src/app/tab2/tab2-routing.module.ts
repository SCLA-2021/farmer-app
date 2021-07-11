import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VegetablePage } from '../vegetables/vegetables.page';
import { FruitsPage } from '../fruits/fruits.page';

import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page
  },
  {
    path: 'vegetables',
    loadChildren: () =>
      import('../vegetables/vegetables.module').then(
        m => m.VegetablesPageModule
      )
  },
  {
    path: 'fruits',
    loadChildren: () =>
      import('../fruits/fruits.module').then(m => m.FruitsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
