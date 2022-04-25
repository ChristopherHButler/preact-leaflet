import { useContext } from "preact/hooks";

import { MapContext } from '../contexts/MapContext';

export const useMapContext = () => {
  const context = useContext(MapContext);

  const { map } = context;

  return {
    map
  };
};
