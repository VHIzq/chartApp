import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataSets, ChartType } from 'chart.js';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [],
})
export class BarrasComponent {
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },  
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012']
  public barChartType: ChartType = 'bar';
  public barChatLegend = true;

  public barChartData: ChartDataSets[] = 
    [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    ];

 

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];

  }
}
