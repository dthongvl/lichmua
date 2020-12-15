<template>
  <div class="flex flex-col">
    <CalendarHeader class="header-shadow border-t pt-3" />
    <div
      class="relative flex-1"
    >
      <CalendarGridBackground class="h-full" />
      <CalendarGridContent
        :levels="levels"
        class="absolute inset-0 top-2 overflow-y-scroll overflow-x-hidden"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  toRefs,
  onMounted, watch,
} from 'vue';
import CalendarHeader from './CalendarHeader.vue';
import CalendarGridContent from './CalendarGridContent.vue';
import CalendarGridBackground from './CalendarGridBackground.vue';
import mergeEventsByStartAndEndDate from '../../services/mergeEventsByStartAndEndDate';
import sortEventsByStartDate from '../../services/sortEventsByStartDate';
import breakdownEventsToSegments from '../../services/breakdownEventsToSegments';
import Segment from '../../types/segment';
import Event from '../../types/event';

export default defineComponent({
  name: 'Calendar',
  components: {
    CalendarHeader,
    CalendarGridContent,
    CalendarGridBackground,
  },
  props: {
    events: {
      type: Array as PropType<Event[]>,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  setup(props) {
    const { events } = toRefs(props);

    const levels = ref<Array<Array<Segment>>>([]);
    const calculateEvents = (): void => {
      const mergedEvents = mergeEventsByStartAndEndDate(props.events);
      const sortedEvents = sortEventsByStartDate(mergedEvents);
      levels.value = breakdownEventsToSegments(sortedEvents);
    };

    onMounted(calculateEvents);
    watch(events, calculateEvents);

    return {
      levels,
    };
  },
});
</script>

<style lang="scss" scoped>
.header-shadow {
  --tw-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>
