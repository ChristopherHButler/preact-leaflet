import { h, ComponentChildren } from 'preact';
import { useCallback, useEffect, useState, useRef } from 'preact/hooks';

import {
  ComponentProps,
  PropKey,
  LayerType,
  LayerTypeConstructable,
} from './types';
import { addListenersFromProps, removeListenersFromProps } from './helpers/map-listeners';
import getOptions from './helpers/get-options';


interface CreateLayerProps extends ComponentProps{
  layerType: LayerTypeConstructable;
  firstProp: string;
  options: {
    componentName: string;
  }
  children?: ComponentChildren;
}

export const Layer = (props: CreateLayerProps) => {
  
  const { layerType, firstProp, leafletMap, options: { componentName } } = props;

  const prevProps = useRef<CreateLayerProps>(props);

  const [layer, setLayer] = useState<LayerType | null>(null);

  useEffect(() => {

    // eslint-disable-next-line no-console
    if (!leafletMap) console.error('Couldn\'t find leafletMap prop');

    // eslint-disable-next-line no-console
    if (!props[firstProp]) console.error(`${firstProp} prop is required.`);

    const options = { 
      ...getOptions(props, { exclude: firstProp }),
      // crossOrigin: 'null',
    };

    setLayer(new layerType(props[firstProp], options));
    
    if (layer) layer.addTo(leafletMap);
  
    addListenersFromProps(layer, props);

    return () => {
      removeListenersFromProps(layer, props);
      if (layer) layer.removeFrom(props.leafletMap);
    };

  }, []);

  useEffect(() => {
    
    addListenersFromProps(layer, props, { filter: ({ prop }: { prop: PropKey }) => !prevProps.current[prop] });
    removeListenersFromProps(layer, prevProps.current, { filter: ({ prop }: { prop: PropKey }) => !props[prop] });

    // update props
    prevProps.current = props;

  }, [props]);

  // do not render anything
  return null;

};







// export const createNewLayer = (LayerType, firstArgProp, { componentName } = {}) => {

//   class Layer extends Component {
//     componentDidMount() {
//       const { children, leafletMap, ...props } = this.props;

//       if (!leafletMap) {
//         // eslint-disable-next-line no-console
//         console.error('Couldn\'t find leafletMap prop');
//       }

//       if (!props[firstArgProp]) {
//         // eslint-disable-next-line no-console
//         console.error(`${firstArgProp} prop is required.`);
//       }

//       const options = getOptions(props, { exclude: firstArgProp });

//       // hack
//       // options.crossOrigin = "null";

//       this.layer = new Layer.LayerType(props[firstArgProp], options);
//       this.layer.addTo(leafletMap);

//       addListenersFromProps(this.layer, this.props);
//     }

//     componentDidUpdate(prevProps) {
//       addListenersFromProps(this.layer, this.props, {
//         filter: ({ prop }) => !prevProps[prop],
//       });

//       removeListenersFromProps(this.layer, prevProps, {
//         filter: ({ prop }) => !this.props[prop],
//       });
//     }

//     componentWillUnmount() {
//       removeListenersFromProps(this.layer, this.props);
//       this.layer.removeFrom(this.props.leafletMap);
//     }

//     render() {
//       return null;
//     }
//   }

//   Layer.LayerType = LayerType;
//   Layer.displayName = `createLayer(${componentName})`;

//   return Layer;
// };
