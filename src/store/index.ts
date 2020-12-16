import { createStore } from 'vuex';
import loadEvents from '../services/loadEvents';
import eventsData from '../data/eventsData.json';

export default createStore({
  state: {
    events: loadEvents(eventsData),
    currentEvent: null,
    eventInfoCollapsed: true,
  },
  mutations: {
    setCurrentEvent(state, event) {
      state.currentEvent = event;
    },
    setEventInfoCollapsed(state, eventInfoCollapsed) {
      state.eventInfoCollapsed = eventInfoCollapsed;
    },
  },
  actions: {
  },
  modules: {
  },
});
