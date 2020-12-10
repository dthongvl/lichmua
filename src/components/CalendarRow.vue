<template>
  <div
    class="relative"
  >
    <RowBackground :index="index" />
    <RowSegment
      v-for="(segment, index) in level"
      :key="index"
      :segment="segment"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Segment from '../types/segment';
import RowBackground from './RowBackground.vue';
import RowSegment from './RowSegment.vue';

export default defineComponent({
  name: 'CalendarRow',
  components: {
    RowBackground,
    RowSegment,
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
    level: {
      type: Array as PropType<Segment[]>,
      required: true,
    },
  },
});
</script>
