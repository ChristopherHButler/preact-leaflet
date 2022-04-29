# preact-leaflet

🚧 This library is current under construction. 🚧

Currently Supporting the following Leaflet components:
* [MapContainer](https://leafletjs.com/reference.html#map-example)
* [Marker](https://leafletjs.com/reference.html#marker)
* [TileLayer](https://leafletjs.com/reference.html#tilelayer)

## Example

```jsx
import { h } from 'preact';
import { SvgIcon } from './SvgIcon';
import {
  MapContainer,
  TileLayer,
  Marker,
} from 'preact-leaflet';
import 'leaflet/dist/leaflet.css';
import './styles.css';


export const App = () => {
  return (
    <MapContainer
      // ref={this.mapRef}
      center={[51.505, -0.09]}
      zoom={13}
      options={{
        // Options
        // preferCanvas: false,

        // Control Options
        // attributionControl: true,
        // zoomControl: true,

        // Interaction Options
        // closePopupOnClick: true,
        // zoomSnap: 1,
        // zoomDelta: 1,
        // trackResize: true,
        // boxZoom: true,
        // doubleClickZoom: true,
        // dragging: true,

        // Map State Options
        // crs:
        // center: [51.505, -0.09],
        // zoom: 13,
        // minZoom: // Number
        // maxZoom: // Number
        // layers: [],
        // maxBounds: null,
        // rendered:

        // Animation Options
        // zoomAnimation: true,
        // zoomAnimationThreshold: 4,
        // fadeAnimation: true,
        // markerZoomAnimation: true,
        // transform3DLimit:

        // Panning Inertia Options
        // inertia:
        // inertiaDeceleration:
        // inertiaMaxSpeed:
        // easeLinearity:
        // worldCopyJump:
        // maxBoundsViscosity:

        // Keyboard Navigation Options
        // keyboard:
        // keyboardPanDelta:

        // Mouse wheel options
        // scrollWheelZoom:
        // wheelDebounceTime:
        // wheelPxPerZoomLevel:

        // Touch interaction options
        // tapHold:
        // tapTolerance:
        // touchZoom:
        // bounceAtZoomLimits:
      }}
    >
      <TileLayer
        // to use mapbox
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
        // to use open street maps
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        options={{
          // to use mapbox
          attribution: "Map data &copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
          // to use open street maps
          // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          // required for mapbox
          accessToken: '',
          // crossOrigin: false,
        }}
      />
      <Marker
        position={[51.5, -0.09]}
        icon={SvgIcon}
        options={{
          title: 'this is my title',
          opacity: 0.5,
        }}
      />
    </MapContainer>
  );
}
```

## API

This project is a thin wrapper around the native [leafletjs](https://leafletjs.com/reference.html) library.


### Options

 - [x] Support for all Map options
 - [x] Support for all Marker options
 - [x] Support for all Tile Layer options

### TODO: Handle Event listeners

 - [ ] Support for all Map events
 - [ ] Support for all Marker events
 - [ ] Support for all Tile Layer events

### TODO:

 - [ ] Add ability to get a ref to Markers and TileLayer


## Contributing
Yes. Do it. All about that.

#### How to contribute
1. Fork the project
2. Create a feature branch (`git checkout -b f/amazingFeature`)
3. Commit your changes (`git commit -m 'added awesome sauce'`)
4. Push to the remote branch (`git push origin f/amazingFeature`)
5. Open a pull request.

#### Contributors: 1

- :monkey_face: Christopher Harold Butler ([ChristopherHButler](https://github.com/ChristopherHButler))

## Acknowledgments

Inspiration for the library was initially taken from the now archived [kontrollanten/preact-leaflet](https://github.com/kontrollanten/preact-leaflet). It has since been completely re-written.

