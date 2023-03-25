import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { DateFormComponent } from './date-form/date-form.component';
import { NbCardModule, NbDatepickerModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { NbDateFnsDateModule } from '@nebular/date-fns';


@NgModule({
  declarations: [
    DateFormComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    NbCardModule,
    NbInputModule,
    NbDatepickerModule.forRoot(),
    NbDateFnsDateModule.forRoot({
      parseOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },
      formatOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },
    }),
    NbButtonModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
