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
          data: ['USA', 'Germany', 'France', 'Canada', 'Russia'],
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
              { value: 335, name: 'Germany' },
              { value: 310, name: 'France' },
              { value: 234, name: 'Canada' },
              { value: 135, name: 'Russia' },
              { value: 1548, name: 'USA' },
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
