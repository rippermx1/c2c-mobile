import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { OffertsComponent } from './offerts/offerts.component';
import { SearchComponent } from './search/search.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartDetailComponent } from './shopping-cart-detail/shopping-cart-detail.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
      MenuComponent,
      OffertsComponent,
      SearchComponent,
      ShoppingCartComponent,
      ShoppingCartDetailComponent,
      NavbarComponent
  ],
  exports: [
      MenuComponent,
      OffertsComponent,
      SearchComponent,
      ShoppingCartComponent,
      ShoppingCartDetailComponent,
      NavbarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
