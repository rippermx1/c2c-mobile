import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingPage } from './shopping.page';
import {ShoppingCartDetailComponent} from '../../components/shopping-cart-detail/shopping-cart-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingPageRoutingModule {}
