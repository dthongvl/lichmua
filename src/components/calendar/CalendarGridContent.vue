<template>
  <div>
    <CalendarRow
      v-for="(level, index) in levels"
      :key="index"
      :level="level"
      :index="index"
      class="mb-2"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from 'vue';
import Segment from '../types/segment';
import CalendarRow from './CalendarRow.vue';

export default defineComponent({
  name: 'CalendarGridContent',
  components: {
    CalendarRow,
  },
  props: {
    levels: {
      type: Array as PropType<Segment[][]>,
      required: true,
    },
  },
});
</script>
