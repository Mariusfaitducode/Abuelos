import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'message',
  //   loadChildren: () => import('./pages/message/message.module').then( m => m.MessagePageModule)
  // },
  {
    path: 'chat',
    loadChildren: () => import('./pages/message/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'chat/:idUser',
    loadChildren: () => import('./pages/message/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'chat/:idConversation/:idUser',
    loadChildren: () => import('./pages/message/chat/chat.module').then( m => m.ChatPageModule)
  },
  
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/connection/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'log-in',
    loadChildren: () => import('./pages/connection/log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./pages/product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'product/add-product/:id',
    loadChildren: () => import('./pages/product/add-product/add-product.module').then( m => m.AddProductPageModule)
  },
  {
    path: 'product/add-field/:id',
    loadChildren: () => import('./pages/product/add-field/add-field.module').then( m => m.AddFieldPageModule)
  },
  {
    path: 'concept',
    loadChildren: () => import('./pages/presentation/concept/concept.module').then( m => m.ConceptPageModule)
  },
  {
    path: 'operation',
    loadChildren: () => import('./pages/presentation/operation/operation.module').then( m => m.OperationPageModule)
  },
  {
    path: 'repartidor',
    loadChildren: () => import('./pages/presentation/repartidor/repartidor.module').then( m => m.RepartidorPageModule)
  },
  {
    path: 'becoming-repartidor',
    loadChildren: () => import('./pages/connection/becoming-repartidor/becoming-repartidor.module').then( m => m.BecomingRepartidorPageModule)
  },
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./pages/profile/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
