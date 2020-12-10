import Event from './event';

interface Segment {
  event?: Event;
  startIndex: number;
  span: number;
}

export default Segment;
