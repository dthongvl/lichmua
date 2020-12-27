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
import { defineComponent, PropType, ref, toRefs, watch, onMounted } from 'vue';
import Segment from '../../types/segment';
import RowSegment from './RowSegment.vue';
import getRandomColor from '../../services/getRandomColor';

export default defineComponent({
  name: 'CalendarRow',
  components: {
    RowSegment,
  },
  props: {
    level: {
      type: Array as PropType<Segment[]>,
      required: true,
    },
  },
  setup(props) {
    const normalizedSegments = ref<Array<Segment>>([]);
    const { level } = toRefs(props);

    const normalizeSegments = (): void => {
      // TODO: fix random color when changing filter
      const randomColor = getRandomColor();
      const result: Array<Segment> = [];
      let lastEnd = 0;

      props.level.forEach((segment) => {
        const gap = segment.startIndex - lastEnd;

        if (gap) {
          result.push({
            startIndex: lastEnd,
            span: gap,
            color: 'transparent',
          });
        }

        result.push({ ...segment, color: randomColor });

        lastEnd = segment.startIndex + segment.span;
      });

      normalizedSegments.value = result;
    };

    onMounted(normalizeSegments);
    watch(level, normalizeSegments);

    return {
      normalizedSegments,
    };
  },
});
</script>
