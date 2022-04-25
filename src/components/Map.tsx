import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import * as Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  setMap: (map: Leaflet.Map) => void;
  options: {
    center: Leaflet.LatLngExpression;
    zoom: number | undefined;
  }
}

export const Map = ({ setMap, options: { center, zoom } }: MapProps) => {

  useEffect(() => {
    setMap(Leaflet.map('map').setView(center, zoom));
  }, []);
  
  return null;
};
