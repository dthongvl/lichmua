import { createStore } from 'vuex';

export default createStore({
  state: {
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
