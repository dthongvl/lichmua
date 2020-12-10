<template>
  <div class="home">
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
      events: [
        {
          content: 'Apple',
          seasons: [
            {
              startDate: new Date(2020, 9, 1),
              endDate: new Date(2020, 12, 1),
            },
          ],
        },
        {
          content: 'Durian',
          seasons: [
            {
              startDate: new Date(2020, 1, 1),
              endDate: new Date(2020, 2, 1),
            },
            {
              startDate: new Date(2020, 5, 1),
              endDate: new Date(2020, 6, 1),
            },
          ],
        },
        {
          content: 'Melon',
          seasons: [
            {
              startDate: new Date(2020, 4, 1),
              endDate: new Date(2020, 5, 1),
            },
            {
              startDate: new Date(2020, 11, 1),
              endDate: new Date(2020, 12, 1),
            },
          ],
        },
        {
          content: 'Tangerin',
          seasons: [
            {
              startDate: new Date(2020, 11, 1),
              endDate: new Date(2021, 1, 1),
            },
          ],
        },
      ],
    };
  },
});
</script>
