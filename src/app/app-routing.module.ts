import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'search',
  //   loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  // },
  // {
  //   path: 'product',
  //   loadChildren: () => import('./pages/product/product.module').then( m => m.ProductPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
