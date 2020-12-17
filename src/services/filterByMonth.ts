import { some } from 'lodash';
import memoizeOne from 'memoize-one';
import Event from '../types/event';
import Range from '../types/range';

interface FilterByMonthOptions {
  month: number;
}

const filterByMonth = (events: Array<Event>, options: FilterByMonthOptions) => {
  return events.filter((event) => {
    return some(event.seasons, (season: Range) => {
      return season.startDate.getMonth() <= options.month && season.endDate.getMonth() >= options.month;
    });
  });
};

export default memoizeOne(filterByMonth);
