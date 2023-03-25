import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharjsPageComponent } from './pages/charjs-page/charjs-page.component';
import { D3PageComponent } from './pages/d3-page/d3-page.component';
import { EchartsPageComponent } from './pages/echarts-page/echarts-page.component';

const routes: Routes = [
  {
    path: 'chartjs',
    component: CharjsPageComponent
  },
  {
    path: 'd3',
    component: D3PageComponent
  },
  {
    path: 'echarts',
    component: EchartsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartjsRoutingModule { }
