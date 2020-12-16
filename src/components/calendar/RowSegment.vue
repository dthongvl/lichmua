<template>
  <div
    class="rounded text-white flex items-center p-2"
    :class="{ 'hover:shadow-md cursor-pointer row-segment': displayValue.length }"
    :style="segmentStyle"
    @click="openEventInfoSidebar"
  >
    {{ displayValue }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { mapMutations } from 'vuex';
import Segment from '../../types/segment';

export default defineComponent({
  name: 'RowSegment',
  props: {
    segment: {
      type: Object as PropType<Segment>,
      required: true,
    },
  },
  computed: {
    displayValue(): string {
      if (this.segment.event) {
        return this.segment.event.content;
      }
      return '';
    },
    segmentStyle(): string {
      // TODO: also use date to calculate the percent
      const numberOfMonths = 12;
      const per = (this.segment.span / numberOfMonths) * 100;
      return `flex-basis: ${per}%; background-color: ${this.segment.color}`;
    },
  },
  methods: {
    ...mapMutations(['setCurrentEvent', 'setEventInfoCollapsed']),
    openEventInfoSidebar(): void {
      if (!this.displayValue.length) return;

      this.setCurrentEvent(this.segment.event);
      this.setEventInfoCollapsed(false);
    },
  },
});
</script>
