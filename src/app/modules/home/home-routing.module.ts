import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('@modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('@modules/payments/payments.module').then(m => m.PaymentsModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('@modules/chartjs/chartjs.module').then(m => m.ChartjsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
