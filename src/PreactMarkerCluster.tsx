import { h, toChildArray } from 'preact';
import { useCallback, useEffect, useState, useRef } from 'preact/hooks';
import leaflet, { FeatureGroup } from 'leaflet';
import 'leaflet.markercluster';
import { addListenersFromProps, removeListenersFromProps } from './helpers/map-listeners';
import getOptions from './helpers/get-options';
import { MarkerClusterProps, PropKey } from './types';



export const MarkersCluster = (props: MarkerClusterProps) => {

  const prevProps = useRef<MarkerClusterProps>(props);

  const [layer, setLayer] = useState<FeatureGroup>((leaflet as any).markerClusterGroup(getOptions(props)));

  const { leafletMap, children } = props;

  useEffect(() => {
    if (leafletMap) layer.addTo(leafletMap);
    addListenersFromProps(layer, props);

    return () => {
      removeListenersFromProps(layer, props);
      if (leafletMap) layer.removeFrom(leafletMap);
    }
  }, []);

  useEffect(() => {
    addListenersFromProps(layer, props, { filter: ({ prop }: { prop: PropKey }) =>  !prevProps.current[prop] });
    removeListenersFromProps(layer, prevProps.current, { filter: ({ prop }: { prop: PropKey }) => !props[prop] });

    // update props
    prevProps.current = props;

  }, [props]);

  const renderChildren = useCallback(() => {
    return toChildArray(children)
             .filter(c => c)
             .map((child: any) => ({ ...child, props: { ...child.props, leafletMap: layer } }));
  }, [children, layer, props]);

  return (
    <div>
      {renderChildren}
    </div>
  );

};
