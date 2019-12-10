import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { OffertsComponent } from './offerts/offerts.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
      MenuComponent,
      OffertsComponent,
      SearchComponent
  ],
  exports: [
      MenuComponent,
      OffertsComponent,
      SearchComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
