import Event from '../types/event';
import Range from '../types/range';
import Segment from '../types/segment';

const breakdownEventToSegments = (event: Event): Array<Segment> => {
  const smallestSeasons: Array<Range> = [];

  event.seasons.forEach((season) => {
    if (season.endDate.getMonth() < season.startDate.getMonth()) {
      const newEndDate = new Date(season.endDate);
      newEndDate.setMonth(11);

      smallestSeasons.push({
        startDate: season.startDate,
        endDate: newEndDate,
      });

      const newStartDate = new Date(season.startDate);
      newStartDate.setMonth(0);

      smallestSeasons.unshift({
        startDate: newStartDate,
        endDate: season.endDate,
      });

      return;
    }

    smallestSeasons.push(season);
  });

  const segments = smallestSeasons.map((season) => {
    return {
      event,
      startIndex: Math.max(season.startDate.getMonth(), 0),
      span: Math.max(season.endDate.getMonth() - season.startDate.getMonth() + 1, 1),
    };
  });

  return segments;
};

const breakdownEventsToSegments = (events: Array<Event>): Array<Array<Segment>> => {
  const segments: Array<Array<Segment>> = [];

  events.forEach((event) => {
    const segmentedEvent = breakdownEventToSegments(event);
    segments.push(segmentedEvent);
  });

  return segments;
};

export default breakdownEventsToSegments;
