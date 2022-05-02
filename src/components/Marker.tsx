import { h } from 'preact';
import { useEffect, useRef } from 'preact/compat';
import * as Leaflet from 'leaflet';

import { Prop } from '../types';
import { useMapContext } from '../hooks/useMapContext';
import {
  addListenersFromProps,
  removeListenersFromProps,
} from '../helpers';


interface MarkerProps {
  position: Leaflet.LatLngExpression;
  icon?: Leaflet.Icon | Leaflet.DivIcon | undefined;
  options?: Leaflet.MarkerOptions | undefined;
}

export const Marker = (props: MarkerProps) => {

  const { position, icon, options = {} } = props;

  const marker = useRef<Leaflet.Marker | null>(null);
  const prevProps = useRef<MarkerProps>(props);

  const { map } = useMapContext();

  

  useEffect(() => {
    if (map) {
      marker.current = Leaflet.marker(position, { ...options, icon }).addTo(map);
    }

    return () => {
      if (map && marker.current) marker.current.removeFrom(map);
    }
  }, [map, position]);

  // useEffect(() => {
  //   console.log('marker.current: ', marker.current);
  //   if (marker.current) addListenersFromProps(marker.current, props, { filter: ({ prop }: Prop) => !prevProps.current[prop as keyof MarkerProps] });
  //   if (marker.current) removeListenersFromProps(marker.current, prevProps.current, { filter: ({ prop }: Prop) => !props[prop  as keyof MarkerProps] });
  // }, [props]);

  return <div />;
};
