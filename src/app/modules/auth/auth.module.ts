import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbLayoutModule,
    NbAlertModule,
    NbCheckboxModule,
    FormsModule,
    NbInputModule,
    NbButtonModule
  ]
})
export class AuthModule { }
