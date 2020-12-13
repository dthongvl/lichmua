<template>
  <div
    class="flex pb-2"
  >
    <div
      v-for="month in months"
      :key="month"
      class="flex-1 flex flex-col items-center"
    >
      <div
        :class="{ 'text-blue-600': month === currentMonth }"
      >
        tháng
      </div>
      <div
        class="text-xl h-12 w-12 flex items-center justify-center"
        :class="{
          'bg-blue-600 text-white rounded-full h-12 w-12': month === currentMonth
        }"
      >
        {{ month }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { range } from 'lodash';
import dayjs from 'dayjs';

export default defineComponent({
  name: 'CalendarHeader',
  setup() {
    return {
      months: range(1, 13),
      currentMonth: dayjs().month() + 1,
    };
  },
});
</script>
