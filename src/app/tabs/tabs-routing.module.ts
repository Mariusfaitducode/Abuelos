import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../pages/search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'message',
        loadChildren: () => import('../pages/message/message.module').then(m => m.MessagePageModule)
      },
      {
        path: 'basket',
        loadChildren: () => import('../pages/basket/basket.module').then(m => m.BasketPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      // {
      //   path: 'product',
      //   loadChildren: () => import('../pages/product/product.module').then( m => m.ProductPageModule)
      // },
      // {
      //   path: 'product/:id',
      //   loadChildren: () => import('../pages/product/product.module').then( m => m.ProductPageModule)
      // },
      
      
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
