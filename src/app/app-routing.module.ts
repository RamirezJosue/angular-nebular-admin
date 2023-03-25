import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule),
  },
  {
    path: 'pages', //TODO (Private) 🔴🔴
    component: PagesComponent,
    loadChildren: () => import(`./pages/pages.module`).then(m => m.PagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
