import { h, Component, toChildArray, VNode, RefObject } from 'preact';
import { Marker as LeafletMarker } from 'leaflet';
import { Layer } from './create-layer';
import { LayerTypeConstructable } from './types';

export const Marker = <Layer
                        layerType={LeafletMarker as unknown as LayerTypeConstructable}
                        firstProp='position'
                        options={{ componentName: 'Marker' }}
                      />
