<template>
  <div
    class="flex"
  >
    <RowSegment
      v-for="(segment, index) in normalizedSegments"
      :key="index"
      :segment="segment"
      class="h-8"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import Segment from '../../types/segment';
import RowSegment from './RowSegment.vue';
import getRandomColor from '../../services/getRandomColor';

export default defineComponent({
  name: 'CalendarRow',
  components: {
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
  setup(props) {
    const normalizedSegments = ref<Array<Segment>>([]);

    const randomColor = getRandomColor();
    let lastEnd = 0;

    props.level.forEach((segment) => {
      const gap = segment.startIndex - lastEnd;

      if (gap) {
        normalizedSegments.value.push({
          startIndex: lastEnd,
          span: gap,
          color: 'transparent',
        });
      }

      normalizedSegments.value.push({ ...segment, color: randomColor });

      lastEnd = segment.startIndex + segment.span;
    });

    return {
      normalizedSegments,
    };
  },
});
</script>
