import oc from 'open-color';
import { sample } from 'lodash';

// From Excalidraw
const shades = (index: number) => [
  oc.red[index],
  oc.pink[index],
  oc.grape[index],
  oc.violet[index],
  oc.indigo[index],
  oc.blue[index],
  oc.cyan[index],
  oc.teal[index],
  oc.green[index],
  oc.lime[index],
  oc.yellow[index],
  oc.orange[index],
];

const getRandomColor = (): string => sample(shades(6)) || 'black';

export default getRandomColor;
