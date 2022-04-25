import { h, Component, toChildArray, VNode, RefObject } from 'preact';
import { Polyline as LeafletPolyline } from 'leaflet';
import { Layer } from './create-layer';
import { LayerTypeConstructable } from './types';

// export const Polyline = Layer(LeafletPolyline as unknown as LayerTypeConstructable, 'positions', { componentName: 'Polyline' });

export const Polyline = <Layer
                        layerType={LeafletPolyline as unknown as LayerTypeConstructable}
                        firstProp='positions'
                        options={{ componentName: 'Polyline' }}
                      />
