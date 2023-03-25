import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-echart-bar',
  templateUrl: './echart-bar.component.html',
  styles: [
  ]
})
export class EchartBarComponent implements AfterViewInit, OnDestroy {

  options: any = {};
  themeSubscription$: any;

  constructor(
    private theme: NbThemeService
  ) { }


  ngAfterViewInit(): void {
    this.themeSubscription$ = this.theme.getJsTheme().subscribe((config: any) => {
      const { variables } = config;
      const { echarts } = variables;
      this.options = {
        backgroundColor: echarts.bg,
        title: {
          text: 'Plan estrategico'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
       
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: ['Pendiente', 'Aprobado', 'Autorizado', 'En Proceso', 'En revisión', 'Finalizado', 'Rechazado'],
          title: {
            text: 'Referrer of a User',
            x: 'center'
          },
        },
        series: [
          {
            name: 'Total',
            type: 'bar',
            itemStyle: {
              color: "#fffff"
            },
            data: [
              {
                value: 200,
                itemStyle: {
                  color: variables.warningLight
                }
              }, 
              {
                value: 302,
                itemStyle: {
                  color: variables.infoLight
                }
              }, 
              {
                value: 301,
                itemStyle: {
                  color: variables.dangerLight
                }
              }, 
              {
                value: 200,
                itemStyle: {
                  color: variables.successLight
                }
              }, 
              {
                value: 150,
                itemStyle: {
                  color: variables.primaryLight
                }
              }, 
              {
                value: 400,
                itemStyle: {
                  color: variables.dangerLight
                }
              }, 
              {
                value: 600,
                itemStyle: {
                  color: variables.infoLight
                }
              }
            ],
          }
        ]
      }


 
    })
  }

  ngOnDestroy(): void {
    this.themeSubscription$.unsubscribe();
  }


}
