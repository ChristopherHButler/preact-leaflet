import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import * as Leaflet from 'leaflet';

import { useMapContext } from '../hooks/useMapContext';


interface TileLayerProps {
  url: string;
  options?: Leaflet.TileLayerOptions | undefined;
}

export const TileLayer = ({ url, options = {} }: TileLayerProps) => {

  const { map } = useMapContext();

  useEffect(() => {
    if (map) Leaflet.tileLayer(url, { ...options } ).addTo(map);
  }, [map, url, options]);

  return null;
};
