import { ComponentProps, Filter } from '../types';

export const onPropRegex = /on[A-Z](.*)/;

const getProvidedEventListeners = (props: ComponentProps) => Object.keys(props)
  .filter(prop => prop.match(onPropRegex))
  .map(prop => ({
    callback: props[prop],
    event: prop.slice(2).replace(/^[A-Z]/, e => e.slice(0, 1).toLowerCase()),
    prop,
  }));

const manageListeners = (inst: any, props: ComponentProps, { filter, type }: { filter: any, type: string }) => {
  let listeners = getProvidedEventListeners(props);

  if (filter) {
    listeners = listeners.filter(filter);
  }

  listeners
    .forEach(({ event, callback }) => {
      inst[type](event, callback);
    });
};

export const addListenersFromProps = (inst: any, props: ComponentProps, { filter }: { filter: Filter } = { filter: '' }): void => {
  manageListeners(inst, props, { filter, type: 'on' });
};

export const removeListenersFromProps = (inst: any, props: ComponentProps, { filter }: { filter: Filter } = { filter: '' }): void => {
  manageListeners(inst, props, { filter, type: 'off' });
};
