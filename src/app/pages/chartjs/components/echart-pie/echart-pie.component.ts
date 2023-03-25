import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-echart-pie',
  templateUrl: './echart-pie.component.html',
  styles: [
  ]
})
export class EchartPieComponent implements AfterViewInit, OnDestroy {

  themeSubscription$: any;
  options: any = {};

  constructor(
    private theme: NbThemeService
  ) {}

  ngAfterViewInit(): void {
    this.themeSubscription$ = this.theme.getJsTheme().subscribe((config: any) => {
      const { variables } = config;
      const { echarts } = variables;
      // data: ['Pendiente', 'Aprobado', 'Autorizado', 'En Proceso', 'En revisión', 'Finalizado', 'Rechazado'],
      this.options = {
        backgroundColor: echarts.bg,
        color: [variables.warningLight, variables.infoLight, variables.dangerLight, variables.successLight, variables.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Pendiente', 'Aprobado', 'Autorizado', 'En Proceso', 'En revisión', 'Finalizado', 'Rechazado'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Countries',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: 'Pendiente' },
              { value: 310, name: 'Aprobado' },
              { value: 234, name: 'Autorizado' },
              { value: 135, name: 'En Proceso' },
              { value: 300, name: 'En revisión' },
              { value: 265, name: 'Finalizado' },
              { value: 156, name: 'Rechazado' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    })     
  }

  ngOnDestroy(): void {
    this.themeSubscription$.unsubscribe();
  }



}
