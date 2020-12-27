import { createStore } from 'vuex';
import { forEach } from 'lodash';
import getFilter from '../services/getFilter';
import loadEvents from '../services/loadEvents';
import loadFavorites from '../services/loadFavorites';
import Event from '../types/event';
import eventsData from '../data/eventsData';

export default createStore({
  state: {
    events: loadEvents(eventsData),
    favorites: loadFavorites(window.localStorage),
    currentEvent: null,
    eventInfoCollapsed: true,
    filters: {},
  },
  getters: {
    filteredEvents: (state) => {
      let filtered = state.events;

      forEach(state.filters, (options, filterName) => {
        const filter = getFilter(filterName);
        filtered = filter(filtered, options);
      });

      return filtered;
    },
    getEventFavoriteState: (state) => (event: Event) => {
      return state.favorites[event.id];
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
    setEventFavoriteState(state, payload) {
      state.favorites[payload.event.id] = payload.state;
      // TODO: refactor later
      window.localStorage.setItem('favorite-events', JSON.stringify(state.favorites));
    },
  },
  actions: {
  },
  modules: {
  },
});
