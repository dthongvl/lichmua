import filterByMonth from './filterByMonth';
import filterByFavorite from './filterByFavorite';
import { MONTH_FILTER, FAVORITE_FILTER } from '../constants';

const getFilter = (filterName: string) => {
  switch (filterName) {
    case MONTH_FILTER:
      return filterByMonth;
    case FAVORITE_FILTER:
      return filterByFavorite;
    default:
      return (events) => events;
  }
};

export default getFilter;
