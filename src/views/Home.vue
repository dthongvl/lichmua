<template>
  <div class="flex w-screen h-screen relative">
    <CategorySidebar
      :events="events"
      class="absolute top-14 bottom-0 left-0 z-10 w-3"
    />
    <EventInfoSidebar
      :collapsed="eventInfoCollapsed"
      class="absolute inset-y-0 right-0 z-10 w-0"
    />
    <div
      class="w-full h-full flex flex-col"
    >
      <Header
        :events="events"
        class="mb-6 shadow sm:pr-5 pb-5 sm:pb-0"
      />
      <Filter class="mb-6 mx-5" />
      <Calendar
        :events="events"
        class="flex-1 overflow-x-scroll flex-wrap"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapMutations } from 'vuex';
import Calendar from '../components/calendar/Calendar.vue';
import Filter from '../components/layout/Filter.vue';
import Header from '../components/layout/Header.vue';
import CategorySidebar from '../components/layout/CategorySidebar.vue';
import EventInfoSidebar from '../components/layout/EventInfoSidebar.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Calendar,
    Filter,
    Header,
    CategorySidebar,
    EventInfoSidebar,
  },
  beforeMount() {
    document.addEventListener('click', this.handleClickOutside);
  },
  unmounted() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  computed: {
    ...mapState(['eventInfoCollapsed', 'events']),
  },
  methods: {
    ...mapMutations(['setEventInfoCollapsed']),
    handleClickOutside(event): void {
      if (event.target.closest('.row-segment')
          || event.target.closest('.event-info-sidebar')
          || event.target.closest('.search-option')) {
        return;
      }
      this.setEventInfoCollapsed(true);
    },
  },
});
</script>
