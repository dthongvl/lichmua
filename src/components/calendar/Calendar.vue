<template>
  <div>
    <CalendarHeader />
    <div
      class="relative"
    >
      <!-- TODO: fix z-index -->
      <CalendarGridBackground
        class="absolute inset-0"
        style="z-index: -1"
      />
      <CalendarGridContent
        :levels="levels"
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
