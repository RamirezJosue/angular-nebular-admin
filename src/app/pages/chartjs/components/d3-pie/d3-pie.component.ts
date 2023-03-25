import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-d3-pie',
  templateUrl: './d3-pie.component.html',
  styles: [
  ]
})
export class D3PieComponent implements OnDestroy {

  
  data: any [] = [
    { name: 'Germany', value: 8940 },
    { name: 'USA', value: 5000 },
    { name: 'France', value: 7200 },
  ]
  view: any = [700,400];

 
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  // legendPosition: any = 'below';
  legendPosition: any = 'right';
  contentEditable: boolean = false;
  legendTitle: string = 'Leyenda';
  
  colorScheme: any;
  // colorScheme: any = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };

  themeSubscription$: any;

  constructor(
    private theme: NbThemeService
  ) {
    this.themeSubscription$ = this.theme.getJsTheme().subscribe((config: any )=> {
      const { variables } = config;
      this.colorScheme = {
        domain: [ variables.primaryLight, variables.infoLight, variables.successLight, variables.warningLight, variables.dangerLight ]
      }
    })
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnDestroy(): void {
    this.themeSubscription$.unsubscribe();
  }

}
