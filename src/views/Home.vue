<template>
  <div class="home">
    <div
      class="search"
    >
      <span>Tim kiem</span>
    </div>
    <Calendar :events="events" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Calendar from '../components/Calendar.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Calendar,
  },
  data() {
    return {
      searchQuery: '',
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
});
</script>
