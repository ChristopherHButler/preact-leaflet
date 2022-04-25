import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Control, control as leafletControl } from 'leaflet';
import { ZoomControlProps } from './types';



export const ZoomControl = ({ leafletMap, position, ...options }: ZoomControlProps) => {

  const [control, setControl] = useState<Control>(new (leafletControl as any).zoom(options));

  useEffect(() => {
    if (leafletMap) control.addTo(leafletMap);

    return () => control.remove();
  }, []);

  useEffect(() => {
    if (position) control.setPosition(position);
  }, [position]);

  return null; 

};
