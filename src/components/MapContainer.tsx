import { h, RefObject, ComponentChildren } from 'preact';
import { useState } from 'preact/compat';
import * as Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { MapProvider } from '../contexts/MapContext';
import { Map } from './Map';

interface MapContainerProps {
  ref?: RefObject<HTMLDivElement>;
  center: Leaflet.LatLngExpression;
  zoom: number;
  children?: ComponentChildren;
  containerId?: string;
  options?: Leaflet.MapOptions;
  height?: string;
  style?: h.JSX.CSSProperties | undefined;
}

export const MapContainer = ({
  ref,
  center,
  zoom,
  children,
  containerId = 'map',
  options = {},
  height = '400px',
  style = {},
}: MapContainerProps): h.JSX.Element => {

  const [map, setMap] = useState<Leaflet.Map | null>(null);
  
  return (
    <div ref={ref} id={containerId} style={{ height, ...style }}>
      <Map containerId={containerId} setMap={setMap} options={{ ...options, center, zoom }} />
      <MapProvider map={map}>
        {children}
      </MapProvider>
    </div>
  );
};
