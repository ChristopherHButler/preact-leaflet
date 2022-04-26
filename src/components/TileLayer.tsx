import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import * as Leaflet from 'leaflet';

import { useMapContext } from '../hooks/useMapContext';


interface TileLayerProps {
  url: string;
  options?: Leaflet.TileLayerOptions | undefined;
}

export const TileLayer = ({ url, options = {} }: TileLayerProps) => {

  const tileLayer = useRef<Leaflet.TileLayer | null>(null);

  const { map } = useMapContext();

  useEffect(() => {
    if (map) {
      tileLayer.current = Leaflet.tileLayer(url, { ...options } ).addTo(map);
    }

    return () => {
      if (map && tileLayer.current) tileLayer.current.removeFrom(map);
    }
  }, [map, url, options]);

  return null;
};
