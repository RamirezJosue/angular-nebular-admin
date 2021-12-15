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
        color: [variables.primaryLight],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        series: [
          {
            name: 'Score',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220],
          },
        ],
      };
    })
  }

  ngOnDestroy(): void {
    this.themeSubscription$.unsubscribe();
  }
  
    
}
