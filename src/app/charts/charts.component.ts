import { Component, OnInit  } from '@angular/core';
import {htmlToPlaintextPipe} from '../comon/filters/custom.pipe';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  providers:[htmlToPlaintextPipe]
})
export class ChartsComponent implements OnInit {
  chartselector:string="";
 public chartModel;
  constructor() { }

  ngOnInit() {
    this.chartselector="<app-bar-chart chartdivname='barChartDiv' [chart]='barChartData'></app-bar-chart>";
this.chartModel={
  "data": [ 18,16,20,25,30],
  "dataCompare": [21,26,31,38,45],
  "id": 2,
  "target": [38,41,48,55,60],
  "x": [ "Jan", "Feb", "Mar", "Apr",
"May", "Jun","Jul","Aug",
"Sep","Oct","Nov","Dec"],
  
"xTitle": "Month",
  
"y": [ "Jan","Feb","Mar","Apr",
"May","Jun","Jul","Aug",
"Sep","Oct","Nov","Dec"],
  "yTitle": "kWh",
  "dataMin": [15,21,24,29,34],
  "dataMax": [18,28,29,31,40]
}


  }

}
