import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartjsRoutingModule } from './chartjs-routing.module';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CharjsPageComponent } from './pages/charjs-page/charjs-page.component';
import { EchartsPageComponent } from './pages/echarts-page/echarts-page.component';
import { D3PageComponent } from './pages/d3-page/d3-page.component';

import { NbCardModule } from '@nebular/theme';
import { ChartjsPieComponent } from './components/chartjs-pie/chartjs-pie.component';
import { D3PieComponent } from './components/d3-pie/d3-pie.component';
import { EchartPieComponent } from './components/echart-pie/echart-pie.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { EchartBarComponent } from './components/echart-bar/echart-bar.component';


@NgModule({
  declarations: [
    CharjsPageComponent,
    EchartsPageComponent,
    D3PageComponent,
    ChartjsPieComponent,
    D3PieComponent,
    EchartPieComponent,
    EchartBarComponent
  ],
  imports: [
    CommonModule,
    ChartjsRoutingModule,
    NgxChartsModule,
    NbCardModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]
})
export class ChartjsModule { }
