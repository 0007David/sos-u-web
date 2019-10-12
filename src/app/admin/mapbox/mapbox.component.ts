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
  // style = 'https://api.mapbox.com/mapbox-gl-js/v1.0.0/mapbox-gl.css';
  // style = 'mapbox://styles/mapbox/outdoors-v9';

  lat = -17.784698;
  lng = -63.180338;


  constructor() { }

  ngOnInit(){
  	this.buildMap();
  	// mapboxgl.accessToken = environment.mapbox.accessToken;
   //    this.map = new mapboxgl.Map({
   //      container: 'map',
   //      style: this.style,
   //      zoom: 13,
   //      center: [this.lng, this.lat]
   //  });
   //  // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  buildMap() {
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 5,
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
              "coordinates": [-66.324462890625, -16.024695711685304]
            },
            "properties": {
              "title": "Punto 1",
              "icon": "monument"
            }
          }, {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-61.2158203125, -15.97189158092897]
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
    // /// Add map controls
    // this.map.addControl(new mapboxgl.NavigationControl());
  }


}
