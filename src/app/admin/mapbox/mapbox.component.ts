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

  ngOnInit() {
    this.buildMap();
    // this.addMarker();
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

  onLoad(event) {
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
              "coordinates": [-63.195888, -17.775211]
            },
            "properties": {
              "title": "Punto 1",
              "icon": "monument"
            }
          }, {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-63.169002, -17.798849]
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
    this.addMarker2();
    // this.map.resize(); 
  }

  addMarker() {
    var geojson = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: { lon: -63.195888, lat: -17.775211 }
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: { lon: -63.169002, lat: -17.798849 }
        },
        properties: {
          title: 'Mapbox',
          description: 'San Francisco, California'
        }
      }]
    };
    let mapMarker = this.map;
    geojson.features.forEach(function (marker) {

      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(new mapboxgl.LngLat(marker.geometry.coordinates.lon, marker.geometry.coordinates.lat))
        .addTo(mapMarker);
    });

  }
  /**
   * iconos par el marcador
   * ambulacia http://maps.google.com/mapfiles/kml/pal4/icon55.png
   * polica http://maps.google.com/mapfiles/kml/pal2/icon0.png
   * bombero http://maps.google.com/mapfiles/kml/pal2/icon16.png
   */
  addMarker2() {
    var geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            type: "a",
            message: "Necesito ambulancia",
            iconSize: [32, 32]
          },
          geometry: {
            type: "Point",
            coordinates: { lon: -63.195888, lat: -17.775211 }
          }
        },
        {
          type: "Feature",
          properties: {
            type: "p",
            message: "Necesito un paco",
            iconSize: [32, 32]
          },
          geometry: {
            type: "Point",

            coordinates: { lon: -63.169002, lat: -17.798849 }
          }
        },

        {
          type: "Feature",
          properties: {
            type: "b",
            message: "Necesito un bombero",
            iconSize: [32, 32]
          },
          geometry: {
            type: "Point",
            //-17.773872, -63.192455
            coordinates: { lon: -63.192455, lat: -17.773872 }
          }
        }
      ]
    };
    
    let markerMap = this.map;
    // add markers to map
    geojson.features.forEach(function (marker) {

      // create the popup
      var popup = new mapboxgl.Popup({ offset: 25 })
      .setText(marker.properties.message);

      // create a DOM element for the marker
      var el = document.createElement('div');
      el.className = 'marker';
      let typeIcon = marker.properties.type;
      switch (typeIcon) {
        case "a":
          el.style.backgroundImage = 'url(http://maps.google.com/mapfiles/kml/pal4/icon55.png)';
          el.style.width = marker.properties.iconSize[0] + 'px';
          el.style.height = marker.properties.iconSize[1] + 'px';

        break;
        case "b":
          el.style.backgroundImage = 'url(http://maps.google.com/mapfiles/kml/pal2/icon16.png)';
          el.style.width = marker.properties.iconSize[0] + 'px';
          el.style.height = marker.properties.iconSize[1] + 'px';
        break;
        case "p":
          el.style.backgroundImage = 'url(http://maps.google.com/mapfiles/kml/pal2/icon0.png)';
          el.style.width = marker.properties.iconSize[0] + 'px';
          el.style.height = marker.properties.iconSize[1] + 'px';
        break;
        
      }

      // el.addEventListener('click', function () {
      //   window.alert(marker.properties.message);
      // });

      // add marker to map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(popup) // sets a popup on this marker
        .addTo(markerMap);
    });
  }


}
