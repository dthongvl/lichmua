import Event from '../types/event';

const loadEvents = (eventsData: Array<unknown>): Array<Event> => {
  return eventsData.map((data, index) => {
    const seasons = data.seasons.map((season) => {
      return {
        startDate: new Date(season.startDate),
        endDate: new Date(season.endDate),
      };
    });

    return {
      id: index,
      content: data.content,
      seasons,
    };
  });
};

export default loadEvents;
