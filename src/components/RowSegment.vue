<template>
  <div
    class=""
  >
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Segment from '../types/segment';

export default defineComponent({
  name: 'RowSegment',
  props: {
    segment: {
      type: Object as PropType<Segment>,
      required: true,
    },
  },
});
</script>
