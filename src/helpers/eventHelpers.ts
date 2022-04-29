import {
  ComponentProps,
  Listener,
  LeafletComponent,
  LeafletComponentMethodName,
  Filter,
  METHOD_NAMES,
} from '../types';
import { onPropRegex } from '../constants';


const getProvidedEventListeners = (props: ComponentProps): Listener[] => Object.keys(props)
  .filter(prop => prop.match(onPropRegex))
  .map(prop => ({
    callback: props[prop],
    event: prop.slice(2).replace(/^[A-Z]/, e => e.slice(0, 1).toLowerCase()),
    prop,
  })
);


interface ManageListenerOptions {
  filter: Filter; 
}

const manageListeners = (instance: LeafletComponent, props: ComponentProps, type: LeafletComponentMethodName, { filter }: ManageListenerOptions) => {
  let listeners = getProvidedEventListeners(props);

  console.log('listeners: ', listeners);

  if (filter) listeners = listeners.filter(filter);

  // this will add or remove a listener function (fn) to a particular event type of the object.
  // See abstract class Evented from Leaflet
  listeners.forEach(({ event, callback }) => instance[type](event, callback));
};

export const addListenersFromProps = (inst: any, props: ComponentProps, { filter }: { filter: Filter } = { filter: () => {} }): void => {
  manageListeners(inst, props, METHOD_NAMES.ON, { filter });
};

export const removeListenersFromProps = (inst: any, props: ComponentProps, { filter }: { filter: Filter } = { filter: () => {} }): void => {
  manageListeners(inst, props, METHOD_NAMES.OFF, { filter });
};

