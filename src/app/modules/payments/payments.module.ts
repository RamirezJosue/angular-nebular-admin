import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsPageComponent } from './pages/payments-page/payments-page.component';
import { NbStepperModule, NbCardModule, NbButtonModule, NbCheckboxModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaymentsPageComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbCheckboxModule
  ]
})
export class PaymentsModule { }
