import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'methods/optimist',
    loadChildren: () => import('./methods/optimist/optimist.module').then( m => m.OptimistPageModule)
  },
  {
    path: 'methods/pessimistic',
    loadChildren: () => import('./methods/pessimistic/pessimistic.module').then( m => m.PessimisticPageModule)
  },
  {
    path: 'methods/regrets',
    loadChildren: () => import('./methods/regrets/regrets.module').then( m => m.RegretsPageModule)
  },
  {
    path: 'methods/wald',
    loadChildren: () => import('./methods/wald/wald.module').then( m => m.WaldPageModule)
  },
  {
    path: 'methods/hurwicz',
    loadChildren: () => import('./methods/hurwicz/hurwicz.module').then( m => m.HurwiczPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
