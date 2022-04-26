import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import * as Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface CustomizedOptions extends Leaflet.MapOptions {
  // here we are saying center and zoom is required
  center: Leaflet.LatLngExpression;
  zoom: number | undefined;
}

interface MapProps {
  containerId: string;
  setMap: (map: Leaflet.Map) => void;
  options: CustomizedOptions;
}

export const Map = ({ containerId, setMap, options }: MapProps) => {

  const map = useRef<Leaflet.Map | null>(null);

  const  { center, zoom } = options;

  useEffect(() => {
    map.current = Leaflet.map(containerId, options).setView(center, zoom);
    setMap(map.current);

    return () => {
      if (map && map.current) map.current.remove();
    }
  }, []);
  
  return null;
};
