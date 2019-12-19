import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { OffersComponent } from './offers/offers.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
      MenuComponent,
      OffersComponent,
      SearchComponent,
      NavbarComponent
  ],
  exports: [
      MenuComponent,
      OffersComponent,
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
