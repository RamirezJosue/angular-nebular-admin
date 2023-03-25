import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateFormComponent } from './date-form/date-form.component';

const routes: Routes = [
  {
    path: 'date',
    component: DateFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
