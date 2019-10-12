import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements OnInit {

	map: mapboxgl.Map;
  style = 'mapbox://styles/deivi007/ck1ku61n101p91clmosl11j06';
  lat = -17.784698;
  lng = -63.180338;


  constructor() { }

  ngOnInit(){
  	this.buildMap();
  }

  buildMap() {
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 12,
      center: [this.lng, this.lat]
    });
    this.map.on('load', this.onLoad.bind(this));
  }

  onLoad(map) {
    console.log("se cargo correcto");

    this.map.addLayer({
      "id": "points",
      "type": "symbol",
      "source": {
        "type": "geojson",
        "data": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-63.195888,-17.775211]
            },
            "properties": {
              "title": "Punto 1",
              "icon": "monument"
            }
          }, {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-63.169002,-17.798849]
            },
            "properties": {
              "title": "Puntos 2",
              "icon": "harbor"
            }
          }]
        }
      },
      "layout": {
        "icon-image": "{icon}-15",
        "text-field": "{title}",
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 0.6],
        "text-anchor": "top"
      },
      "paint": {
        'text-color': '#f16624',
        'text-halo-color': '#fff',
        'text-halo-width': 2
      }
    });

      // this.map.resize(); 
  }


}
