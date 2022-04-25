import { h, toChildArray, } from 'preact';
import { useEffect, useState, useRef, useCallback } from 'preact/hooks';
import { Map as LeafletMap, MapOptions } from 'leaflet';
import { addListenersFromProps, removeListenersFromProps } from './helpers/map-listeners';
import { ExtendedMapOptionsProps, PropKey } from './types';
import { mapOptions } from './constants';



interface CustomMapOptions extends MapOptions {
  bounds?: any;
}

export const Map = (props: ExtendedMapOptionsProps) => {

  const prevProps = useRef<ExtendedMapOptionsProps>(props);
  const ref = useRef<HTMLDivElement>(null);

  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    const { bounds, zoom = 6, ...options }: CustomMapOptions = getProps({ leafletOptions: true });
    
    mapRef.current = new LeafletMap(ref as unknown as HTMLElement, { zoom, ...options });  
    
    console.log('mapRef.current: ', mapRef.current);

    if (mapRef.current) addListenersFromProps(mapRef.current, props);

    if (bounds && mapRef.current) {
      mapRef.current.fitBounds(bounds);
    }

    return () => {
      removeListenersFromProps(mapRef.current, props);
      if (mapRef.current) mapRef.current.remove();
    };
  }, []);

  useEffect(() => {
    const { bounds, center, zoom } = props;

    console.log('useEffect - map: ', mapRef.current);

    if (propHasChanged('center') || propHasChanged('zoom')) {
      if (mapRef.current && center) mapRef.current.setView(center, zoom || mapRef.current.getZoom());
    }

    if (propHasChanged('bounds')) {
      if (mapRef.current && bounds) mapRef.current.fitBounds(bounds);
    }

    if (mapRef.current) addListenersFromProps(mapRef.current, props, { filter: ({ prop }: { prop: PropKey }) => !prevProps.current[prop] });
    if (mapRef.current) removeListenersFromProps(mapRef.current, prevProps.current, { filter: ({ prop }: { prop: PropKey }) => !props[prop] });

    // update props
    prevProps.current = props;

  }, [props]);


  const getProps = ({ leafletOptions = false } = {}) => {
    return Object.keys(props)
      .filter(prop => (leafletOptions ? mapOptions.indexOf(prop) !== -1 : mapOptions.indexOf(prop) === -1 ))
      .reduce<Record<string, any>>((props, prop) => {
        return { 
          ...props,
          [prop]: props[prop]
        };
      }, {});
  };

  const propHasChanged = (prop: string) => {
    return props[prop] !== prevProps.current[prop];
  };

  const renderChildren = useCallback(() => { 
    toChildArray(props.children)
      .filter(c => c)
      .map((child: any) => ({ ...child, props: { ...child.props, leafletMap: mapRef.current } }));
  }, []);

  return (
    <div {...getProps()} ref={ref}>
      {!!mapRef.current && renderChildren}
    </div>
  );
};
