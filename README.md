# preact-leaflet [![codecov](https://codecov.io/gh/kontrollanten/preact-leaflet/branch/master/graph/badge.svg)](https://codecov.io/gh/kontrollanten/preact-leaflet) [![CircleCI](https://circleci.com/gh/kontrollanten/preact-leaflet.svg?style=svg)](https://circleci.com/gh/kontrollanten/preact-leaflet)

NOTE: THIS IS THE SECOND ATTEMPT TO RE-WRITE THIS LIBRARY

🚧 This library is current under construction. 🚧

Supporting following Leaflet components:
* [MapContainer](https://leafletjs.com/reference-1.4.0.html#map-example)
* [Marker](https://leafletjs.com/reference-1.4.0.html#marker)
* [TileLayer](https://leafletjs.com/reference-1.4.0.html#tilelayer)

## Example

```
import { MapContainer, TileLayer, Marker } from 'preact-leaflet';

<MapContainer
  // ref={mapRef}
  center={[51.505, -0.09]}
  zoom={13}
>
  <TileLayer
    url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
    options={{
      attribution: "Map data &copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: '' // Required to use mapbox but not open street maps.
    }}
  />
  <Marker
    position={[51.5, -0.09]}
    icon={SvgIcon}
  />
</MapContainer>
```

## API
This is just a thin wrapper, checkout [Leaflet API](https://leafletjs.com/reference.html) for usage.

### TODO: Options


### TODO: Handle Event listeners



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

