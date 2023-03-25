import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ScaffoldModule } from '../core/scaffold/scaffold.module';
import { NbMenuModule } from '@nebular/theme';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ScaffoldModule,
    NbMenuModule
  ]
})
export class PagesModule { }
