<template>
  <div
    class="rounded text-white flex items-center p-2"
    :class="{ 'hover:shadow-md cursor-pointer row-segment': !isGapSegment }"
    :style="segmentStyle"
    @click="openEventInfoSidebar"
  >
    <span
      :class="{ 'text-yellow-500': isFavorite }"
    >
      <StarFilled
        class="mr-1 hover:text-yellow-500 text-lg"
        @click.stop="toggleFavorite"
      />
    </span>
    <span>
      {{ displayValue }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { StarFilled } from '@ant-design/icons-vue';
import { mapMutations, mapGetters } from 'vuex';
import Segment from '../../types/segment';

export default defineComponent({
  name: 'RowSegment',
  components: {
    StarFilled,
  },
  props: {
    segment: {
      type: Object as PropType<Segment>,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['getEventFavoriteState']),
    isGapSegment(): boolean {
      return this.segment.event === undefined;
    },
    displayValue(): string {
      if (this.isGapSegment) return '';
      return this.segment.event.content;
    },
    segmentStyle(): string {
      // TODO: also use date to calculate the percent
      const numberOfMonths = 12;
      const per = (this.segment.span / numberOfMonths) * 100;
      return `flex-basis: ${per}%; background-color: ${this.segment.color}`;
    },
    isFavorite(): boolean {
      if (this.isGapSegment) return false;
      return this.getEventFavoriteState(this.segment.event);
    },
  },
  methods: {
    ...mapMutations(['setCurrentEvent', 'setEventInfoCollapsed', 'setEventFavoriteState']),
    openEventInfoSidebar(): void {
      if (!this.displayValue.length) return;

      this.setCurrentEvent(this.segment.event);
      this.setEventInfoCollapsed(false);
    },
    toggleFavorite(): void {
      this.setEventFavoriteState({
        event: this.segment.event,
        state: !this.isFavorite,
      });
    },
  },
});
</script>
