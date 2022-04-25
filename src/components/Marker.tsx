import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import * as Leaflet from 'leaflet';

import { useMapContext } from '../hooks/useMapContext';


interface MarkerProps {
  position: Leaflet.LatLngExpression;
  icon?: Leaflet.Icon | Leaflet.DivIcon | undefined;
  options: Leaflet.MarkerOptions | undefined;
}

export const Marker = ({ position, icon, options }: MarkerProps) => {

  const { map } = useMapContext();

  useEffect(() => {
    if (map) Leaflet.marker(position, { ...options, icon }).addTo(map);
  }, [map, position]);

  return null;
};
