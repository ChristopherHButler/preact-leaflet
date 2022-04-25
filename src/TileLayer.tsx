import { h, Component, toChildArray, VNode, RefObject } from 'preact';
import { TileLayer as LeafletTileLayer } from 'leaflet';
import { Layer } from './create-layer';
import { LayerTypeConstructable } from './types';

// export const TileLayer = Layer(LeafletTileLayer as unknown as LayerTypeConstructable, 'url', { componentName: 'TileLayer' });

export const TileLayer = <Layer
                        layerType={LeafletTileLayer as unknown as LayerTypeConstructable}
                        firstProp='url'
                        options={{ componentName: 'TileLayer' }}
                      />
