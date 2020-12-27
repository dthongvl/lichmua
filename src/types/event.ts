import Range from './range';

interface Event {
  id: number;
  content: string;
  seasons: Array<Range>;
}

export default Event;
