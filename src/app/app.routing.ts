import {RouterModule,Routes} from '@angular/router'
import {UserCreateComponent} from './user-create/user-create.component'
import {UserEditComponent} from './user-edit/user-edit.component'
import {UserListComponent} from './user-list/user-list.component'
import { NgModule } from '@angular/core';


const routes: Routes = [
    { path: 'create', component:UserCreateComponent  },
    { path: 'edit/:id', component: UserEditComponent },
    { path: 'list', component:UserListComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full'}
  ];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ]
  })
  export class AppRoutingModule { }
  