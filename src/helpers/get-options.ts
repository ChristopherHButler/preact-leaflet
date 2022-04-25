import { onPropRegex } from './map-listeners';
import { ComponentProps } from '../types';



export default (props: ComponentProps, { exclude = 'dontMatchMe22' } = {}) => Object.keys(props)
  .filter(p => (p !== exclude && !p.match(onPropRegex)))
  .reduce<Record<string, any>>((acc, val) => {
    return { 
      ...acc,
      [val]: props[val],
    };
  }, {});
