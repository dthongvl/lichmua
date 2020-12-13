<template>
  <div class="home">
    <div
      class="search"
    >
      <div>Tim kiem</div>
      <it-input
        v-model="searchQuery"
        placeholder="Cam, Quyt,.."
        class="inline"
      />
    </div>
    <div
      class="filter"
    >
      <it-toggle
        v-model="calendarStyle"
        :options="['Duong lich', 'Am lich']"
      />
      <it-checkbox
        v-model="thisMonthOnly"
        type="primary"
        label="Chi thang nay"
      />
      <it-checkbox
        v-model="onlyFavorite"
        type="primary"
        label="Chi nhung loai yeu thich"
      />
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
      calendarStyle: 'Duong lich',
      thisMonthOnly: false,
      onlyFavorite: false,
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
