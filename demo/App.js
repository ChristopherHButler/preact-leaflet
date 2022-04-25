import { h, Component, Fragment } from 'preact';
import 'preact/debug';
import { SvgIcon } from './SvgIcon';
import {
  MapContainer,
  TileLayer,
  Marker,
} from '../dist';
import 'leaflet/dist/leaflet.css';
import './styles.css';
import route from './long-route';

const getRouteConfig = (hash) => {
  switch (hash) {
    case '#cluster':
      return {
        mapCenter: [58.9700, 5.7331],
        markerCluster: [
          [58.9275, 5.6607],
          [58.9275, 5.6607],
          [58.9275, 5.6607],
          [58.9275, 5.6607],
          [58.9275, 5.6607],
          [58.9275, 5.6607],
          [58.9275, 5.6607],
        ],
        markers: [],
        polylines: [],
        zoom: 8,
      };
    case '#polyline':
      return {
        mapCenter: [63.83919, 20.15069],
        markerCluster: false,
        markers: [
          [59.3367, 18.0667],
          [63.8374896962485, 20.163206074534],
        ],
        polylines: [
          route,
        ],
        zoom: 5,
      };
    default:
      return {
        mapCenter: [58.9700, 5.7331],
        markerCluster: false,
        markers: [],
        polylines: [],
        zoom: 10,
      };
  }
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = getRouteConfig(window.location.hash);
  }

  componentDidMount() {
    window.addEventListener('popstate', () => {
      this.setState(getRouteConfig(window.location.hash));
    });
  }

  render() {
    return (
      <Fragment>
        <header>
          <h1>preact-leaflet</h1>
          <p>Better demo coming soon</p>
        </header>
        <MapContainer
          // ref={this.mapRef}
          center={[51.505, -0.09]}
          zoom={13}
        >
          <TileLayer
            // to use mapbox
            // url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            options={{
              // to use mapbox
              // attribution: "Map data &copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
              maxZoom: 18,
              id: 'mapbox/streets-v11',
              tileSize: 512,
              zoomOffset: -1,
              // required for mapbox
              accessToken: '',
            }}
          />
          <Marker
            position={[51.5, -0.09]}
            icon={SvgIcon}
          />
        </MapContainer>
      </Fragment>
    );
  }
}
