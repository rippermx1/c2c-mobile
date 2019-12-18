import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { OffertsComponent } from './offers/offerts.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
      MenuComponent,
      OffertsComponent,
      SearchComponent,
      NavbarComponent
  ],
  exports: [
      MenuComponent,
      OffertsComponent,
      SearchComponent,
      NavbarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
