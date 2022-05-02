import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import * as Leaflet from 'leaflet';

import { Prop } from '../types';
import { useMapContext } from '../hooks/useMapContext';
import {
  addListenersFromProps,
  removeListenersFromProps,
} from '../helpers';


interface TileLayerProps {
  url: string;
  options?: Leaflet.TileLayerOptions | undefined;
}

export const TileLayer = (props: TileLayerProps) => {

  const { url, options = {} } = props;

  const tileLayer = useRef<Leaflet.TileLayer | null>(null);
  const prevProps = useRef<TileLayerProps>(props);

  const { map } = useMapContext();

  useEffect(() => {
    if (map) {
      tileLayer.current = Leaflet.tileLayer(url, { ...options } ).addTo(map);
    }

    return () => {
      if (map && tileLayer.current) tileLayer.current.removeFrom(map);
    }
  }, [map, url, options]);

  // useEffect(() => {
  //   if (tileLayer.current) addListenersFromProps(tileLayer.current, props, { filter: ({ prop }: Prop) => !prevProps.current[prop as keyof TileLayerProps] });
  //   if (tileLayer.current) removeListenersFromProps(tileLayer.current, prevProps.current, { filter: ({ prop }: Prop) => !props[prop  as keyof TileLayerProps] });
  // }, [props]);

  // const propHasChanged = (prop: keyof TileLayerProps) => {
  //   return props[prop] !== prevProps.current[prop];
  // };

  return <div />;
};
