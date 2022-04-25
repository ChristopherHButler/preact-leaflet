import { h, createContext, ComponentChildren } from 'preact';
import * as Leaflet from 'leaflet';

interface MapContextProps {
  map: Leaflet.Map | null;
}

const initialState: MapContextProps = {
  map: null,
};

export const MapContext = createContext(initialState);

interface MapProviderProps {
  map: Leaflet.Map | null;
  children?: ComponentChildren;
}

export const MapProvider = ({ map, children }: MapProviderProps) => {
  return (
    <MapContext.Provider value={{ map }}>
      {children}
    </MapContext.Provider>
  );
};