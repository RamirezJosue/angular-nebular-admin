import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { NbButtonModule, NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [
    UserPageComponent,
    UsersPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NbCardModule,
    NbButtonModule
  ]
})
export class UsersModule { }
