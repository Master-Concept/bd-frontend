import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './models/users/create-user/create-user.component';
import { DeleteUserComponent } from './models/users/delete-user/delete-user.component';
import { EditUserComponent } from './models/users/edit-user/edit-user.component';
import { ListUsersComponent } from './models/users/list-users/list-users.component';
import { ViewUserComponent } from './models/users/view-user/view-user.component';

const routes: Routes = [
  { path:'', redirectTo:('list'), pathMatch:'full'},
  { path: 'users',
    children: [
    { path: 'list', component:ListUsersComponent },
    { path: 'view/:id', component:ViewUserComponent },
    { path: 'edit/:id', component:EditUserComponent },
    { path: 'delete/:id', component:DeleteUserComponent },
    { path: 'add', component:CreateUserComponent }
    ]
  },
  { path: '**', component: ListUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
