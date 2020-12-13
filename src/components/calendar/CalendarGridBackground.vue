<template>
  <div
    class="flex"
  >
    <div
      v-for="month in months"
      :key="month"
      class="flex-1"
      :class="{ 'border-l-2': month !== 1 }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { range } from 'lodash';
import dayjs from 'dayjs';

export default defineComponent({
  name: 'RowBackground',
  props: {
  },
  setup() {
    return {
      months: range(1, 13),
      currentMonth: dayjs().month() + 1,
    };
  },
});
</script>
