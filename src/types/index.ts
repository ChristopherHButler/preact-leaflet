import { ComponentChildren } from 'preact';
import {
  LatLngBoundsExpression,
  FeatureGroup,
  MapOptions,
  Map,
  Marker,
  MarkerOptions,
  Polyline,
  PolylineOptions,
  TileLayer,
  TileLayerOptions,
  ZoomOptions,
  ControlPosition,
} from 'leaflet';

export type PropKey = string;

export type ComponentProps = Record<PropKey, any>;

export type Filter = string | (({ prop }: { prop: PropKey }) => any);



// Map.tsx types:

export interface ExtendedMapOptionsProps extends MapOptions, ComponentProps {
  bounds?: LatLngBoundsExpression;
  style?: Partial<CSSStyleDeclaration>;
  children?: ComponentChildren;
}

// Create layer types:
export type LayerType = Marker | TileLayer | Polyline;

export type LayerTypeConstructable = LayerType & 
  { new (firstProp: string, options: { componentName?: string }): LayerType; };

export interface LayerProps extends TileLayerOptions, PolylineOptions, MarkerOptions, ComponentProps {
  url?: string;
  position?: number[];
  positions?: number[][];
  readonly leafletMap?: Map;
}

// Zoom control types

export interface ZoomControlProps extends ComponentProps {
  readonly leafletMap?: Map;
  position?: ControlPosition;
  options?: ZoomOptions;
}

// MarkerCluster Control props

export interface MarkerClusterProps extends ComponentProps {
  readonly leafletMap?: Map;
  position: ControlPosition;
  options?: ZoomOptions;
  children?: ComponentChildren;
}