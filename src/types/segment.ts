import Event from './event';

interface Segment {
  event?: Event;
  color?: string;
  startIndex: number;
  span: number;
}

export default Segment;
