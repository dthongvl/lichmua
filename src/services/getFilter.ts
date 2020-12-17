import filterByMonth from './filterByMonth';
import { MONTH_FILTER } from '../constants';

const getFilter = (filterName: string) => {
  switch (filterName) {
    case MONTH_FILTER:
      return filterByMonth;
    default:
      return (events) => events;
  }
};

export default getFilter;
