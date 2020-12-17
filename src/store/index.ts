import { createStore } from 'vuex';
import { forEach } from 'lodash';
import getFilter from '../services/getFilter';
import loadEvents from '../services/loadEvents';
import eventsData from '../data/eventsData.json';

export default createStore({
  state: {
    events: loadEvents(eventsData),
    currentEvent: null,
    eventInfoCollapsed: true,
    filters: {},
  },
  getters: {
    filteredEvents(state) {
      let filtered = state.events;

      console.log(state.filters);
      forEach(state.filters, (options, filterName) => {
        console.log('before', filtered);
        const filter = getFilter(filterName);
        console.log('Start ', filterName, options);
        filtered = filter(filtered, options);
        console.log('after', filtered);
      });

      return filtered;
    },
  },
  mutations: {
    setCurrentEvent(state, event) {
      state.currentEvent = event;
    },
    setEventInfoCollapsed(state, eventInfoCollapsed) {
      state.eventInfoCollapsed = eventInfoCollapsed;
    },
    addFilter(state, payload) {
      state.filters[payload.filterName] = payload.options;
    },
    removeFilter(state, filterName) {
      delete state.filters[filterName];
    },
  },
  actions: {
  },
  modules: {
  },
});
