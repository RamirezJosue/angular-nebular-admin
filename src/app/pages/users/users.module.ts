import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserPageComponent,
    UsersPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NbCardModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbCheckboxModule,
    NbInputModule
  ]
})
export class UsersModule { }
