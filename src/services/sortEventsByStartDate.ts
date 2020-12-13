import { forEach, groupBy } from 'lodash';
import Event from '../types/event';
import Range from '../types/range';

const byStartDate = (firstEl: Range, secondEl: Range) => {
  console.log();
  return firstEl.startDate.getTime() - secondEl.startDate.getTime();
};

const sortEventsByStartDate = (events: Array<Event>): Array<Event> => {
  let sortedEvents: Array<Event> = [];
  const eventsGroupedByNumberOfSeasons = groupBy(events, (event) => event.seasons.length);

  forEach(eventsGroupedByNumberOfSeasons, (groupedEvents) => {
    groupedEvents.sort((firstEl, secondEl) => {
      firstEl.seasons.sort(byStartDate);
      secondEl.seasons.sort(byStartDate);
      // TODO: ensure first element
      return firstEl.seasons[0].startDate.getTime() - secondEl.seasons[0].startDate.getTime();
    });
    sortedEvents = sortedEvents.concat(groupedEvents);
  });

  return sortedEvents;
};

export default sortEventsByStartDate;
