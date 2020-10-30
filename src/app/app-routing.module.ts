import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user-module/user-module.module').then(module => module.UserModuleModule)
  },
  {
    path: 'group',
    loadChildren: () => import('./group/group-module/group-module.module').then(module => module.GroupModuleModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
