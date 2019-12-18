import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)},
  {
    path: 'shopping',
    loadChildren: () => import('./pages/shopping/shopping.module').then( m => m.ShoppingPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./pages/offers/offers.module').then( m => m.OffersPageModule)
  },
  {
    path: 'offers/:id',
    loadChildren: () => import('./pages/offers/offers.module').then(m => m.OffersPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
