import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  mapselector:string="";
  public mapModel;
  constructor() { }

  ngOnInit() {
    this.mapselector="<leaflet-map-cluster [mapHeight]=mapheight></leaflet-map-cluster>";
    
  }

}
