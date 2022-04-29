import { ComponentChildren } from 'preact';
import {
  Evented,
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

export interface Prop { 
  prop: PropKey;
}

export type ComponentProps = Record<PropKey, any>;

export type Instance = Evented;

export type LeafletComponent = Marker | TileLayer;

export enum METHOD_NAMES {
 ON = 'on',
 OFF = 'off',
};

export type LeafletComponentMethodName = METHOD_NAMES.ON | METHOD_NAMES.OFF;

export interface Listener {
  callback: () => void;
  event: string;
  prop: PropKey;
}

export type Filter = (({ prop }: Prop) => any);