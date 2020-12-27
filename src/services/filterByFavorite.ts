import memoizeOne from 'memoize-one';
import Event from '../types/event';

interface FilterByFavoriteOptions {
  favorites: Record<number, boolean>;
}

const filterByFavorite = (events: Array<Event>, options: FilterByFavoriteOptions) => {
  return events.filter((event) => {
    return options.favorites[event.id];
  });
};

export default memoizeOne(filterByFavorite);
