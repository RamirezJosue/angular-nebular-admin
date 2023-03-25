import { Component } from '@angular/core';



@Component({
  selector: 'app-chartjs-pie',
  templateUrl: './chartjs-pie.component.html',
  styles: [
  ]
})
export class ChartjsPieComponent  {

  data: any [] = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "PERÚ",
      "value": 50050000
    }
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
  
  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {}

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
