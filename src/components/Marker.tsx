import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import * as Leaflet from 'leaflet';

import { useMapContext } from '../hooks/useMapContext';


interface MarkerProps {
  position: Leaflet.LatLngExpression;
  icon?: Leaflet.Icon | Leaflet.DivIcon | undefined;
  options?: Leaflet.MarkerOptions | undefined;
}

export const Marker = ({ position, icon, options = {} }: MarkerProps) => {

  const marker = useRef<Leaflet.Marker | null>(null);

  const { map } = useMapContext();

  useEffect(() => {
    if (map) {
      marker.current = Leaflet.marker(position, { ...options, icon }).addTo(map);
    }

    return () => {
      if (map && marker.current) marker.current.removeFrom(map);
    }
  }, [map, position]);

  return null;
};
