import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroupListComponent} from './group-list/group-list.component';
import {GroupAddComponent} from './group-add/group-add.component';
import {GroupEditComponent} from './group-edit/group-edit.component';


const routes: Routes = [
  {
    path: '',
    component: GroupListComponent
  },
  {
    path: 'create',
    component: GroupAddComponent
  },
  {
    path: 'edit',
    component: GroupEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
