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

// Map.tsx types:

export interface ExtendedMapOptionsProps extends MapOptions {
  bounds?: LatLngBoundsExpression;
  style?: Partial<CSSStyleDeclaration>;
}

// Create layer types:
export type LayerType = Marker | TileLayer | Polyline;

export type LayerTypeConstructable = LayerType & {
  new (firstArgProp: string, options: { componentName?: string }): LayerType;
};

export interface LayerProps extends TileLayerOptions, PolylineOptions, MarkerOptions {
  url?: string;
  position?: number[];
  positions?: number[][];
  readonly leafletMap?: Map;
}

// Zoom control types

export interface ZoomControlProps {
  readonly leafletMap?: Map;
  position?: ControlPosition;
  options?: ZoomOptions;
}

// MarkerCluster Control props

export interface MarkerClusterProps {
  readonly leafletMap?: Map;
  position: ControlPosition;
  options?: ZoomOptions;
}