import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('@pages/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('@pages/payments/payments.module').then(m => m.PaymentsModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('@pages/chartjs/chartjs.module').then(m => m.ChartjsModule)
  },
  {
    path: 'form',
    loadChildren: () => import('@pages/forms/forms.module').then(m => m.FormsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
