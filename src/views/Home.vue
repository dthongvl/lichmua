<template>
  <div class="flex">
    <Sidebar
      v-model:collapsed="categoryCollapsed"
      position="left"
    >
      <div
        v-for="event in events"
        :key="event.content"
      >
        {{ event.content }}
      </div>
    </Sidebar>
    <div
      class="w-screen"
    >
      <Filter />
      <Calendar :events="events" />
    </div>
    <Sidebar
      v-model:collapsed="categoryCollapsed"
      position="right"
    >
      <div
        v-for="event in events"
        :key="event.content"
      >
        {{ event.content }}
      </div>
    </Sidebar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapMutations } from 'vuex';
import Calendar from '../components/calendar/Calendar.vue';
import Filter from '../components/layout/Filter.vue';
import Sidebar from '../components/layout/Sidebar.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Calendar,
    Filter,
    Sidebar,
  },
  data() {
    return {
      categoryCollapsed: true,
      eventInfoCollapsed: true,
      events: [
        {
          content: 'Apple',
          seasons: [
            {
              startDate: new Date(2020, 8, 1),
              endDate: new Date(2020, 11, 31),
            },
          ],
        },
        {
          content: 'Durian',
          seasons: [
            {
              startDate: new Date(2020, 0, 1),
              endDate: new Date(2020, 1, 28),
            },
            {
              startDate: new Date(2020, 4, 1),
              endDate: new Date(2020, 5, 30),
            },
          ],
        },
        {
          content: 'Melon',
          seasons: [
            {
              startDate: new Date(2020, 3, 1),
              endDate: new Date(2020, 4, 31),
            },
            {
              startDate: new Date(2020, 10, 1),
              endDate: new Date(2020, 11, 31),
            },
          ],
        },
        {
          content: 'Tangerin',
          seasons: [
            {
              startDate: new Date(2020, 10, 1),
              endDate: new Date(2021, 0, 31),
            },
          ],
        },
      ],
    };
  },
  beforeMount() {
    document.addEventListener('click', this.handleClickOutside);
  },
  unmounted() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  computed: {
    ...mapState(['eventInfoCollapsed']),
  },
  methods: {
    ...mapMutations(['setEventInfoCollapsed']),
    handleClickOutside(event): void {
      if (event.target.closest('.row-segment') || event.target.closest('.event-info-sidebar')) return;
      this.setEventInfoCollapsed(true);
    },
  },
});
</script>
