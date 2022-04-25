import { h, RefObject, ComponentChildren } from 'preact';
import { useState } from 'preact/hooks';
import * as Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { MapProvider } from '../contexts/MapContext';
import { Map } from './Map';

interface MapContainerProps {
  ref?: RefObject<HTMLDivElement>;
  center: Leaflet.LatLngExpression;
  zoom: number;
  height?: string;
  children?: ComponentChildren;
}

export const MapContainer = ({ ref, center, zoom, children, height = '400px' }: MapContainerProps) => {

  const [map, setMap] = useState<Leaflet.Map | null>(null);
  
  return (
    <div ref={ref} id="map" style={{ height }}>
      <Map setMap={setMap} options={{ center, zoom }} />
      <MapProvider map={map}>
        {children}
      </MapProvider>
    </div>
  );
};
